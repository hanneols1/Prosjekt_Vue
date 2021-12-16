<template>
<!-- Slideshow starts-->
<div class="container">
<div class="slideshow ">
  <div class="slideshow__container js-slideshow">
    <!-- Here we're rendering our source data array below img-->
    <img
      v-for="slide, index in slides"
      :key="slide.id"
      :src="slide.url"
      :alt="slide.title"
      :class="{ active: isActive(index) }"
      @mouseover="stopRotation"
      @mouseout="startRotation"
    />

  </div>
</div>
</div>
</template>
<script>

export default{
  // Here we're declaring our data
	data() {
		return {
			current: 0,
      /***************************************************************************
      *Url link is used below here because files couldnt be detected from assets folder
      ****************************************************************************/
    		slides: [
				{
					id: 1,
					url: 'https://images.unsplash.com/photo-1602181026089-ef2bf4a3e23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					title: 'Slide 1',
          caption: 'Picture 1'
				},
				{
					id: 2,
					url: 'https://images.unsplash.com/photo-1553775927-a071d5a6a39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80',
					title: 'Slide 2'
          
				},
				{
					id: 3,
					url: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
					title: 'Slide 3'
				},
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          title: 'Slide 4'
        }

			],
				//the speed of each slide in milli second
   			speed: 2000,
    		timer: null
		}
    
	},

  // Here we're declaring our methods
  //This method will connect the current slide to the active class
	methods: {
		startRotation: function () {
     	 this.timer = setInterval(this.next, this.speed);
    	},
			stopRotation: function () {
			clearTimeout(this.timer);
			this.timer = null;
    	},
		next: function () {
			let current = this.current;
			let next = current + 1;

				if (next > this.slides.length - 1) {
					next = 0;
				}
				this.current = next;
				this.setActive(this.current);
    	},
		prev: function () {
			let current = this.current;
			let prev = current - 1;

			if (prev < 0) {
				prev = this.slides.length -1;
			}

			this.current = prev;
			this.setActive(this.current);
    },
		isActive: function (slide) {
		return this.current === slide;
		},
		setActive: function (slide) {
		this.current = slide;
		},
  },
}

</script>

<!-- STYLE STARTS HERE -->
<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  color: #34495e;
  background-color:  rgb(231, 163, 174);
}

p {
  margin: 1rem 0 0;
  
  font-size: 18px;
  line-height: 1;
}

a {
  padding-bottom: 2px;
  border-bottom: 1px solid;
  
  color: inherit;
  
  text-decoration: none;
}

/* Slideshow styling ----- */
.slideshow__container {
  overflow: hidden;
  position: relative;
  
  padding-top: calc(9 / 16 * 100%);
  
  min-width: 400px;
  width: 50vw;
  height: 0;
  
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

img {
  display: block;
  
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  
  object-fit: cover;
  
  opacity: 0;
  transition: opacity 1s;
}

img:hover {
  cursor: pointer;
}

.active {
  opacity: 1;
}

</style>