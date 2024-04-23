<template>
  <div class="min-h-screen text-center m-auto">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="h-screen bg-cover">
            <div class="card-header" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
              <v-img class="m-auto" lazy-src="../assets/img/ornament.png" max-width="180" src="../assets/img/ornament.png"
                alt="img-ornament" />
              <h1 class="font__cursive text-capitalize my-2 lg:text-6xl text-5xl text-white my-5">{{ women }} & {{ man }}
              </h1>
              <p class="text-sm tracking-widest font__title text-white" v-html="dateWedding" />
              <div class="text-white" id="time" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    let countDownDate = new Date('May 26, 2024 09:00:00').getTime()

    let countdownfunction = setInterval(function () {
      let now = new Date().getTime()

      let distance = countDownDate - now

      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      document.getElementById('time').innerHTML = `
       <div class="flex items-center justify-items-center justify-center gap-3">
        <div class="text-center bg-yellow-600 py-2 px-4 rounded">
          <span>${days}</span> </br>
          <span class="text-xs capitalize">hari</span>
        </div>

        <div class="text-center bg-yellow-600 py-2 px-4 rounded">
          <span>${hours}</span> </br>
          <span class="text-xs capitalize">jam</span>
        </div>

        <div class="text-center bg-yellow-600 py-2 px-4 rounded">
          <span>${minutes}</span> </br>
          <span class="text-xs capitalize">menit</span>
        </div>

        <div class="text-center bg-yellow-600 py-2 px-4 rounded">
          <span>${seconds}</span> </br>
          <span class="text-xs capitalize">detik</span>
        </div>
      </div>
      `

      if (distance < 0) {
        clearInterval(countdownfunction)
        document.getElementById('time').innerHTML = 'Sudah Halal'
      }
    }, 1000)
  }
}
</script>