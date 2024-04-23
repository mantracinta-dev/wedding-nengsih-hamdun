<template>
  <footer class="text-sm m-auto text-center bg-black white--text py-10 z-3 relative">
    Made with love By
    <span @click="goToWeb()" class="cursor-pointer">@undanganEpic</span>
  </footer>
</template>

<script>
export default {
  methods: {
    goToWeb() {
      window.open('https://www.instagram.com/undanganepic/', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped></style>
