<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="../../assets/logo.png" alt="header" />
      </div>
      <nav class="nav">
        <img
          class="nav__hamburger-menu"
          v-bind:class="{ toggle: !toggle }"
          @click="hamburgerOnClick"
          src="../../assets/hamburger-menu.svg"
          alt=""
        />

        <img
          class="nav__hamburger-close"
          v-bind:class="{ toggle: toggle }"
          @click="hamburgerOnClick"
          src="../../assets/hamburger-close.svg"
          alt=""
        />

        <ul
          @click="hamburgerOnClick"
          class="nav__links-container"
          v-bind:class="{ toggle: toggle }"
        >
          <li>
            <router-link to="/">HOMEPAGE</router-link>
          </li>
          <li>
            <router-link to="/contactform">CONTACT-FORM</router-link>
          </li>
          <li>
            <router-link to="/quizapp">QUIZ</router-link>
          </li>
          <li>
            <router-link to="/slideshow">SHOWSLIDE</router-link>
          </li>
          <li>
            <router-link to="/sorttable">TABLE</router-link>
          </li>
          <li>
            <router-link to="/todolist">TODO-LIST</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggle: true,
      isTrue: true,
      isFalse: false,
    };
  },
  methods: {
    hamburgerOnClick() {
      if (this.toggle) {
        this.toggle = this.isFalse;
      } else {
        this.toggle = this.isTrue;
      }

      console.log(this.toggle);
    },
  },
};
</script>

<style>

/* Style av Logo på venstre side og Navigasjonsmeny */

.header__logo img {
  width: auto;
  height: 300px;
}

.header {
  background-color: transparent;
  padding: 1px;
  margin-bottom: 1px;
}

.header__container {
  max-width: auto;
  margin: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-family: Didot, serif;
}

/* Style av hamburgermeny/ikoner */

.nav__hamburger-menu {
  display: none;
}

.nav__hamburger-close {
  display: none;
  width: 44px;
}

.nav__links-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  color: rgb(182, 112, 21);
  text-decoration: underline;
}

@media (max-width: 660px) {
  .nav__hamburger-menu {
    width: 44px;
  }
  .nav__links-container {
    position: absolute;
    z-index: 900;
    top: 75;
    left: 0;
    padding: 1rem 0 0 0;
    background-color: pink;
    height: 100%;
    width: 100%;
    display: none;
    text-align: center;
  }

  .nav__links-container li + li {
    margin-top: 1rem;
  }

  .nav__hamburger-menu {
    display: none;
  }

  .nav__hamburger-close {
    display: none;
  }

  .toggle {
    display: block;
  }
}
</style>
