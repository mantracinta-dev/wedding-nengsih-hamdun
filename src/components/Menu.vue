<template>
  <div class="fixed bottom-0 right-0 left-0">
    <v-bottom-navigation class="bg-menu" color="amber darken-3">
      <v-btn @click="getMenu('couple')">
        <span class="text-amber">Pasangan</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn @click="getMenu('event')">
        <span>Acara</span>

        <v-icon>mdi-calendar-heart</v-icon>
      </v-btn>

      <v-btn @click="openMap()">
        <span>Lokasi</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <!-- <v-btn value="amplop">
        <span>Amplop</span>

        <v-icon>mdi-gift</v-icon>
      </v-btn> -->
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  methods: {
    getMenu(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    },
    openMap() {
      window.open('https://goo.gl/maps/hB9KeWNLQFrtHfZD6?coh=178571&entry=tt', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped></style>
