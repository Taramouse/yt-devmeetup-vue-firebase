<template>
  <v-container>

    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading">
        </v-progress-circular>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel icon="stop" style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    // data () {
    //   return {
    //     meetups: [
    //       { imageUrl: 'http://images.huffingtonpost.com/2013-10-24-72263318.jpg', id: '1', title: 'Meeting in Painswick' },
    //       { imageUrl: 'http://www.coolplaces.co.uk/system/images/6091/stroud-farmers-market-shop-food-drink-large.jpg', id: '2', title: 'Meeting in Stroud' },
    //       { imageUrl: 'http://www.thecityofgloucester.co.uk/imageresizer/?image=%2Fdbimgs%2Fimg_home_mainimggallery_1.jpg&action=ET-MediaBackgroundHome', id: '3', title: 'Meeting in Gloucester' }
    //     ]
    //   }
    // }
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
