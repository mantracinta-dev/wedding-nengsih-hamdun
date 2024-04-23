<template>
  <div
    id="couple"
    class="min-h-screen text-center m-auto bg-white py-10 rounded-3xl bg-card"
  >
    <div data-aos="fade-up" data-aos-duration="1500">
      <h1 class="font__cursive text-2xl font-semibold color__yellow">
        Assalamualaikum Wr. Wb.
      </h1>
      <p class="text-sm">
        Dengan menyebut nama Allah Subhanahu Wa Ta'ala yang Maha Pengasih dan
        Maha Penyayang. Kami mengundang Anda untuk menghadiri pernikahan
        putra-putri kami:
      </p>
    </div>
    <div data-aos="zoom-in" data-aos-duration="1500">
      <v-img
        class="m-auto rounded-full image-profile"
        lazy-src="../assets/img/gallery/women.jpeg"
        height="250"
        width="250"
        src="../assets/img/gallery/women.jpeg"
        alt="img-women"
      />
      <h3 class="font-bold mt-2 text-lg font__title">{{ womenFullName }}</h3>
      <p class="text-sm">Putri dari {{ womenFamily }}</p>
    </div>
    <div class="my-2">
      <span class="font__cursive text-7xl color__pink">&</span>
    </div>
    <div data-aos="zoom-in" data-aos-duration="1500">
      <v-img
        class="m-auto rounded-full image-profile"
        lazy-src="../assets/img/gallery/man.jpeg"
        height="250"
        width="250"
        src="../assets/img/gallery/man.jpeg"
        alt="img-man"
      />
      <h3 class="font-bold mt-3 text-lg font__title">{{ manFullName }}</h3>
      <p class="text-sm">Putra dari {{ manFamily }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
:deep .image-profile .v-image__image--cover {
  background-position: 50% 20% !important;
}
</style>
