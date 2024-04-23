<template>
  <v-app>
    <v-main class="bg-greeting">
      <card-greeting :dialog="dialog" :guest="guest" @open="btnOpen" />
      <floating-button :audio="audio" @music="play(audio)" @top="btnTop" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CardGreeting from '@/components/CardGreeting.vue'
import FloatingButton from '@/components/FloatingButton.vue'

export default {
  name: 'App',
  components: {
    CardGreeting,
    FloatingButton
  },

  data: () => ({
    dialog: true,
    load: true,
    guest: '',
    audio: {
      id: 'music-love',
      name: 'kau-ditakdirkan-untukku',
      file: null,
      isPlaying: false
    }
  }),

  created() {
    const check = sessionStorage.getItem('guest')
    this.audio.file = new Audio(require('/public/minang-tari-pasambahan.mp3'))

    if (check) {
      this.guest = check
      this.dialog = false
    } else {
      this.guest = this.$route.query.to
    }
  },

  methods: {
    btnTop() {
      window.scrollTo(0, 0)
    },

    btnOpen() {
      this.dialog = false
      this.play(this.audio)
      sessionStorage.setItem('guest', this.guest)
    },

    play(audio) {
      audio.isPlaying = !audio.isPlaying

      if (audio.isPlaying) {
        audio.file.play()
      } else {
        this.pause(audio)
      }
    },
    
    pause(audio) {
      audio.isPlaying = false
      audio.file.pause()
    }
  }
}
</script>
