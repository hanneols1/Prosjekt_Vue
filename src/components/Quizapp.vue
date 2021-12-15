<template>
  <div class="d-flex justify-content-center">
    <div v-if="showScore">
      <b-card title="Results" style="max-width: 20rem">
        You Scored {{ score }} of {{ questions.length }}
      </b-card>
    </div>
    <div class="card-q" v-else>
      <span v-if="!startQuiz">
        <ol>
          This is an simple Quiz-Application Written in Vue2. It has a simple
          timer with loading animations. Since it is open source feel free to
          contribute to this simple quiz Application here:
          <button @click="startQuizFunc()">Start Quiz</button>
        </ol>
      </span>
      <span v-else>
        <b-card
          title="Simple Quiz Application"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Question No.{{ currentQuestion + 1 }} of {{ questions.length }}
          </b-card-text>
          <br />
          <b-progress
            variant="warning"
            :max="30"
            :value="countDown"
            height="4px"
          ></b-progress>

          <b-card-text>
            <span style="font-size: 40px"
              ><strong>{{ countDown }} </strong></span
            >
          </b-card-text>
          <b-card-text>
            {{ questions[currentQuestion].questionText }}
          </b-card-text>
          <div class="answer-section">
            <b-button
              :key="index"
              v-for="(option, index) in questions[currentQuestion]
                .answerOptions"
              @click="handleAnswerClick(option.isCorrect)"
              class="ans-option-btn"
              variant="primary"
              >{{ option.answerText }}</b-button
            >
          </div>
        </b-card>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      showScore: false,
      score: 0,
      countDown: 30,
      timer: null,
      startQuiz: false,

      questions: [
        {
          questionText: "Which one is used for two-way binding?",
          answerOptions: [
            { answerText: "v-on", isCorrect: false },
            { answerText: "v-bind", isCorrect: false },
            { answerText: "v-model", isCorrect: true },
            { answerText: "v-if", isCorrect: false },
          ],
        },
        {
          questionText: "Who is the creator of vueJS ?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: false },
            { answerText: "Evan You", isCorrect: true },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "Vue is used in the backend. - True or False?",
          answerOptions: [
            { answerText: "True", isCorrect: false },
            { answerText: "False", isCorrect: true },
          ],
        },
        {
          questionText: "Which version of Vue is Launched on 2020?",
          answerOptions: [
            { answerText: "Vue 2", isCorrect: false },
            { answerText: "Vue 1", isCorrect: false },
            { answerText: "Vue 4", isCorrect: false },
            { answerText: "Vue 3", isCorrect: true },
          ],
        },
        {
          questionText: "Is vue an OpenSource Library?",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false },
          ],
        },
        {
          questionText:
            "Which of the following is a Full Javascript Frramework",
          answerOptions: [
            { answerText: "Vue", isCorrect: false },
            { answerText: "node", isCorrect: false },
            { answerText: "react", isCorrect: false },
            { answerText: "Angular", isCorrect: true },
          ],
        },
        {
          questionText: "Composition API can be used on which version?",
          answerOptions: [
            { answerText: "Vue 5", isCorrect: false },
            { answerText: "Vue 2 Only", isCorrect: false },
            { answerText: "Vue 3 Only", isCorrect: false },
            { answerText: "Both Vue 2 and Vue 3", isCorrect: true },
          ],
        },
      ],
    };
  },

  methods: {
    startQuizFunc() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    handleAnswerClick(isCorrect) {
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (isCorrect) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;
        // this.$store.state.questionAttended = this.currentQuestion;
        // localStorage.setItem('qattended', this.currentQuestion)

        this.countDown = 30;
        this.countDownTimer();
      } else {
        // localStorage.removeItem('qattended')
        this.showScore = true;
        // localStorage.setItem('testComplete',this.showScore)
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    },
  },
  created() {
    //  alert(this.$store.state.questionAttended)
    //    this.showScore = localStorage.getItem('testComplete') || false
    //    this.currentQuestion = localStorage.getItem('qattended') || 0
    //    this.countDownTimer()
    //    this.fetchQuiz()
  },
};
</script>

<style scoped>
.card {
  border-radius: 20px;
}

.ans-option-btn {
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 6px;
}

.answer-section {
  width: 100%; /* Style av spørsmålsfeltene i hele nettleseren */
  flex-direction: column; /* Style av spørsmålsfeltene blir listet nedover */
}

/* Style av spørsmålsfeltene */
.ans-option-btn {
  font-size: 20px; /* Størrelse på skrift i spørsmålsfeltene */
  color: black; /* Farge på font-family i spørsmålsfeltene */
  background-color: white; /* Farge på spørsmålsfeltene */
  border-radius: 15px; /* Rammestyle av spørsmålsfeltene */
  display: flex;
  padding: 15px;
  align-items: center;
  border: 3px solid black;
  cursor: pointer;
}
</style>
