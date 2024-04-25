<template>
  <div id="event" class="min-h-screen text-center m-auto bg-white py-10 rounded-3xl bg-card">
    <div class="mb-10">
      <v-img class="m-auto" lazy-src="../assets/img/linetop.png" max-width="100" src="../assets/img/linetop.png" alt="img-line" />
    </div>
    <h1 class="text-3xl font__cursive font-semibold color__pink">Akad Nikah</h1>
    <p class="font__title text-lg font-semibold uppercase">{{ dateDay }}</p>
    <div class="relative flex items-center justify-center h-36">
      <div class="absolute left-0 right-0 -top-18 text-center">
        <v-img class="m-auto" lazy-src="../assets/img/linecentral.png" max-width="200" src="../assets/img/linecentral.png" alt="img-line" />
      </div>
      <p data-aos="zoom-in" data-aos-duration="1500" class="font__title font-bold text-5xl color__yellow">{{ dateOnly }}</p>
    </div>
    <p v-html="dateAkad" />
    <div class="my-5">
      <p>
        <span class="font__cursive text-xl color__pink font-semibold">Lokasi Acara</span>
        <br />
        <b>{{ placeWedding }}</b> <br />
        <span class="text-sm break-words"> {{ placeAddress }} </span>
      </p>
      <v-btn small rounded class="color__yellow-bg text-capitalize" @click="openMap()">
        <v-icon dark small class="mr-1"> mdi-map-marker-outline </v-icon>
        Lihat Lokasi
      </v-btn>
    </div>
    <div class="mt-10">
      <v-img class="m-auto rotate-180" lazy-src="../assets/img/linetop.png" max-width="100" src="../assets/img/linetop.png" alt="img-line" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMap() {
      window.open('https://maps.app.goo.gl/gdddHTQq2S4aK9jSA', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped></style>