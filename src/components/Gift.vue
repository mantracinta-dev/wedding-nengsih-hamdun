<template>
  <div class="text-center m-auto py-2">
    <div class="bg-card rounded-2xl">
      <v-container>
        <v-icon x-large color="amber draken-3" class="my-4">
          mdi-gift-outline
        </v-icon>
        <h1 class="font__cursive text-2xl font-semibold color__yellow">
          Kirim Hadiah
        </h1>
        <p class="text-sm">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless.
        </p>
        <div class="mb-5" data-aos="fade-up" data-aos-duration="1500">
          <div
            v-for="(card, index) in dataAccount"
            :key="index"
            class="ma-auto rounded-lg outline outline-amber-500 pa-5 text-center my-4"
          >
            <v-img
              class="m-auto"
              max-height="150"
              max-width="250"
              :src="card.img"
            ></v-img>
            <span>a /n {{ card.name }}</span> <br />
            <strong class="text-xl">{{ card.norek }}</strong> <br />
            <v-btn
              class="mt-2 color__yellow-bg"
              @click="copyNumberBank(card.norek)"
            >
              <v-icon left dark> mdi mdi-content-copy </v-icon> Copy No Rek
              {{ card.bank }}
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
    <div>
      <v-container>
        <p class="text-sm text-white">
          Atas kehadiran dan do’a restu dari bapak/ibu/saudara/I sekalian, kami
          mengucapkan Terima Kasih.
        </p>
        <p class="font__cursive color__yellow text-2xl">
          Wassalamualaikum Wr. Wb.
        </p>
        <div class="relative flex items-center justify-center h-36">
          <div class="absolute left-0 right-0 -top-18 text-center">
            <v-img
              class="m-auto"
              lazy-src="../assets/img/linecentral.png"
              max-width="200"
              src="../assets/img/linecentral.png"
              alt="img-line"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          <p
            data-aos="zoom-in"
            data-aos-duration="1500"
            class="font__title font-bold text-5xl color__pink"
          >
            {{ dateInitial }}
          </p>
        </div>
        <p class="text-sm">
          Kami yang berbahagia <br />
          <span class="font__cursive color__yellow text-2xl pt-10">
            {{ women }} & {{ man }}
          </span>
        </p>
      </v-container>
    </div>

    <v-dialog v-model="dialog" width="200">
      <v-card class="text-center py-5"> Berhasil dicopy </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Gift",

  data() {
    return {
      dialog: false,
      alert: false,
    };
  },
  methods: {
    copyNumberBank(value) {
      navigator.clipboard.writeText(value).then(() => {
        this.dialog = !this.dialog;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
