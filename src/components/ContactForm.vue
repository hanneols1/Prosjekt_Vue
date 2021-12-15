<template>
  <div class="wrapper">
    <div class="items">
      <h1>Send Us a Message</h1>
      <input
        type="text"
        class="lname"
        placeholder="Full name"
        v-model="fullName"
        required=""
      />
      <input
        type="email"
        class="lname"
        placeholder="Your Email"
        v-model="email.value"
        required=""
        :class="{ email, error: !email.valid }"
      />
      <input
        type="tel"
        class="lname"
        placeholder="Phone number"
        v-model="phoneNumber"
        required=""
      />
      <div class="msg">
        <textarea
          class="lbox"
          placeholder="Your Message"
          v-model="Message.text"
          required=""
        ></textarea>
      </div>

      <div>
        <input type="submit" value="Submit form" class="btn" />
      </div>
    </div>
    <div class="items">
      <input
        type="text"
        class="lname"
        placeholder="Full name"
        v-model="fullName"
        required=""
      />
      <input
        type="email"
        class="lname"
        placeholder="Your Email"
        v-model="email.value"
        required=""
        :class="{ email, error: !email.valid }"
      />
      <input
        type="tel"
        class="lname"
        placeholder="Phone number"
        v-model="phoneNumber"
        required=""
      />

      <div class="msg">
        <textarea
          class="lbox"
          placeholder=" Your Message"
          v-model="Message.text"
          required=""
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: {
        value: "",
        required: "Email is required",
        email: "Email is not valid",
      },
      phoneNumber: "",
      Message: {
        text: "",
        value: "",
        required: "Message is required",
      },
    };
  },
};
</script>

<!-- Here is the style -->
<style>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0;
}

.items {
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 24px 35px #645d972b;
  height: auto;
  width: auto;
  flex: 40%;
  margin: 10px;
  padding: 10px;
}

.btn {
  border: none;
  width: 477px;
  height: 72px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  background-color: #171736;
  border-radius: 70px;
  color: white;
  cursor: pointer;
}

.msg .lbox {
  margin: 15px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  height: 159px;
  width: 477px;
}

.lname {
  margin: 20px;
  border: none;
  border-bottom: 2px solid #b4b1bc;
  height: 40px;
  width: 477px;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: #171736;
  margin: 15px;
}
</style>
