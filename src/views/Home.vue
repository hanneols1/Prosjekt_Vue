<template>
  <h1>DASHBOARD APPLICATION</h1>

  <br />

  <ol>
    This is your Application Dashboard, where you can easily access the most
    important application.
  </ol>
  <ol>
    The application dashboard allows users to quickly access their favorite and
    most frequently used applications and supported objects, such as
    contact-form, to-do-list, slideshow with more.
  </ol>

  <br />

  <Collapsible v-model:title="titles.contact">
    <ContactForm />
  </Collapsible>

  <Collapsible v-model:title="titles.slideshow">
    <Slideshow />
  </Collapsible>

  <Collapsible v-model:title="titles.quiz">
    <Quizapp />
  </Collapsible>

  <Collapsible v-model:title="titles.todo">
    <TodoList />
  </Collapsible>

  <Collapsible v-model:title="titles.sorttable">
    <SortTable />
  </Collapsible>

  <h1>You will build your components by applying the following concepts</h1>
  <br />
  <ol>
    Components and subcomponents
  </ol>
  <ol>
    Global state router
  </ol>
  <ol>
    Props Calculated properties
  </ol>
  <ol>
    Life cycle hooks
  </ol>
  <br />
  <br />
  <br />
  <br />
  <footer>
    <ol>
      © 2021 DASHBOARD APPLICATION, FAGSKOLEN KRISTIANIA, FRONTEND-DEVELOPMENT.
      ALL RIGHTS<br />
    </ol>
  </footer>
  <br />
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import Slideshow from "../components/Slideshow.vue";
import SortTable from "../components/SortTable.vue";
import Quizapp from "../components/Quizapp.vue";
import TodoList from "../components/Todo.vue";
import Collapsible from "../components/Collapsible.vue";

export default {
  components: {
    ContactForm,
    Slideshow,
    Quizapp,
    SortTable,
    TodoList,
    Collapsible,
  },

  data() {
    return {
      titles: {
        contact: "Contact-form",
        slideshow: "Slideshow",
        sorttable: "Table",
        todo: "Todo-list",
        quiz: "Quiz-app",
      },
    };
  },
};
</script>