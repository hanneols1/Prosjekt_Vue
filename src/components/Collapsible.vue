<template>
  <div class="collapsible">
    <div class="collapsible__top-container">
      <button
        @click="toggleDetails"
        :class="`collapsible__arrow fa-lg fas fa-chevron-circle-right${
          !collapsed ? 'fas fa-caret-square-down' : ' '
        }`"
      >
        <div class="collapsible__title">
          {{ title }}
        </div>
      </button>
    </div>

    <div class="collapsible__components" v-if="!collapsed">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Click to read more",
    },
  },

  data() {
    return {
      collapsed: true,
    };
  },

  methods: {
    toggleDetails() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style>
/* Style av container for applikasjoner i Homepage */

.collapsible {
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: auto;
}

.collapsible__top-container {
  background: rgb(231, 163, 174);
  border-radius: 30px;
}

.collapsible__arrow {
  display: inline-block;
  padding: 100px;
}

.collapsible__title {
  display: inline-block;
  font-family: Didot, serif;
  font-weight: bold;
  margin-left: 1rem;
  font-size: 30px;
}

</style>
