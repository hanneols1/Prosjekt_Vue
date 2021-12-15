<template>
  <div class="slideshow">
    <button @click="previousImage" class="slideshow__previous">
      <i class="fas fa-arrow-left fa-4x"></i>
    </button>

    <button @click="nextImage" class="slideshow__next">
      <i class="fas fa-arrow-right fa-4x"></i>
    </button>

    <figure class="slideshow__container">
      <img
        :src="currentSlide.file"
        :alt="currentSlide.title"
        class="slideshow__img"
      />

      <figcaption v-if="showDetails" class="slideshow__figcaption">
        {{ currentSlide.caption }}
      </figcaption>
    </figure>
    <div class="slideshow__dots"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      showDetails: false,
      slides: [
        {
          title: "firstImage",
          caption: "Dans er en av de eldste uttrykkene for kultur og kunst",
          file: "assets/bilde1.jpeg",
        },
        {
          title: "secondImage",
          caption: "Alle typer musikk er like viktige kulturbærere",
          file: "assets/bilde2.jpeg",
        },
        {
          title: "thirdImage",
          caption: "Uvanlig norsk arkitektur",
          file: "assets/bilde3.jpeg",
        },
        {
          title: "fourthImage",
          caption: "Utforsk ulike kunstarter og håndverkstradisjoner",
          file: "assets/bilde4.jpeg",
        },
        {
          title: "fifthImage",
          caption:
            "Vi mener at spill har like stor mulighet til å formidle verdier, holdninger og normer som andre kulturobjekter",
          file: "assets/bilde5.jpeg",
        },
        {
          title: "sixthImage",
          caption:
            "Fotballkultur kan skape relasjoner mellom folk som ellers ikke har så mye til felles",
          file: "assets/bilde6.jpeg",
        },
      ],
    };
  },

  computed: {
    currentSlide() {
      return this.slides[this.index];
    },
  },

  methods: {
    previousImage() {
      this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
    },

    nextImage() {
      this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
    },

    goToIndex(index) {
      this.index = index;
    },
  },
};
</script>

<style>
/* Style av Slideshow bilder */

.slideshow {
  position: relative;
  top: 10;
  width: 500px;
  bottom: -10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slideshow__previous {
  position: absolute;
  top: 300px;
  left: 15px;
  color: pink;
  cursor: pointer;
}

.slideshow__next {
  position: absolute;
  top: 300px;
  left: 430px;
  color: pink;
  cursor: pointer;
}

.slideshow__information {
  position: absolute;
  z-index: 100;
}

.slideshow__information--button {
  position: absolute;
  left: 20px;
  top: 10px;
  color: rgb(221, 183, 114);
  cursor: pointer;
}

.slideshow__container {
  height: 640px;
  width: 500px;
}

.slideshow__img {
  width: 100%;
  height: 100%;
  margin-top: 2px;
  object-fit: cover;
  border-radius: 35px;
}

.slideshow__figcaption {
  position: absolute;
  width: 100%;
  bottom: 20;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 40px;
  color: white;
  border: 2px inset white;
  border-right: none;
  border-left: none;
}
</style>
