<template>
  <div class="btn-floating">
    <v-fab-transition>
      <v-btn class="btn-floating__right color__yellow-bg" fab small @click.prevent="$emit('top')">
        <v-icon> mdi-chevron-up </v-icon>
      </v-btn>
    </v-fab-transition>
    <v-fab-transition>
      <v-btn class="color__pink-bg btn-floating__left" :class="audio.isPlaying ? 'btn-floating__rotate' : ''" fab small @click.prevent="$emit('music')">
        <v-icon>
          {{ audio.isPlaying ? 'mdi-music' : 'mdi-music-off' }}
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  props: {
    audio: Object
  }
}
</script>
