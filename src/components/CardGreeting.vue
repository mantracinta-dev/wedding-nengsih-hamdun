<template>
  <v-dialog v-model="dialog" hide-overlay fullscreen outlined persistent>
    <v-card class="text-center dialog-rcv bg-greeting">
      <div class="ma-auto py-10">
        <v-img lazy-src="../assets/img/minang.png" max-width="250" src="../assets/img/minang.png" class="ma-auto"></v-img>
      </div>

      <v-card-text class="amber--text text--lighten-1 mt-10">
        <v-col>
          <h1 class="font__cursive text-capitalize my-2 lg:text-7xl md:text-5xl text-4xl">{{ women }} & {{ man }}</h1>
        </v-col>
        <v-divider class="mx-4"></v-divider>
        <v-col class="pt-5">
          <p class="font__subtitle text-xs sm:text-sm">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h1 class="font-weight-bold text-capitalize text-lg my-3 tracking-widest">{{ guest ? guest : 'Nama Tamu Undangan' }}</h1>
          <p class="font-italic font__subtitle mb-0 text-xs sm:text-sm" style="font-size: 9px">*Mohon Maaf bila ada
            kesalahan penulisan nama dan gelar</p>
        </v-col>
        <v-divider class="mx-4"></v-divider>
        <div class="mt-1">
          <v-spacer></v-spacer>
          <v-btn color="amber darken-3" dark @click="$emit('open')">
            <v-icon small class="pa-1"> mdi-book-open-page-variant </v-icon>
            <span class="capitalize">Buka Undangan</span>
          </v-btn>
          <v-spacer></v-spacer>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name: 'CardGreeting',
  props: {
    dialog: Boolean,
    guest: String
  },

  data() {
    return {}
  }
}
</script>