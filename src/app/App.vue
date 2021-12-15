<template>
  <Header />

  <RouterView />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
    crossorigin="anonymous"
  />
  
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/style.css";

/* Style av Homepage */

h1 {
  font-weight: normal;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.6em;
  letter-spacing: 0.01em;
  color: black;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ol {
  font-weight: normal;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.6em;
  letter-spacing: 0.01em;
  font-size: 17px;
  color: black;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

footer ol {
  height: 40px;
  text-align: center;
  border-top: #f6fdf7 4px solid;
  color: black;
  background-color: transparent;
  font-size: 15px;
  line-height: 50px;
  position: relative;
}

</style>