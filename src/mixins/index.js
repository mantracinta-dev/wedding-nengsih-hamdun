export default {
  data() {
    return {
      mySong: require('../../public/voyageur-firestone.mp4'),
      man: "Hamdun",
      manFullName: "M. Nuril Hamdun",
      manFamily: "Bai Rohimah & Enas Rudin (alm)",
      women: "Putri",
      womenFullName: "Putri Nengsih",
      womenFamily: "Yanuarti (alm) & Agus Manjani ",
      urlWebsite: "https://www.instagram.com/undanganepic/",
      dateWedding: "Minggu, 26 Mei 2024 <br /> Pandeglang",
      dateDay: "Minggu",
      dateAkad: `
      <span class="font__title text-lg font-semibold uppercase"> Mei 2024 </span>
      <br />
      Pukul <b>09:00 Wib</b> s/d Selesai
      `,
      dateOnly: 26,
      placeWedding: "Kediaman Mempelai Wanita",
      placeAddress: "Kadu Gajah RT:06 RW:08 Pandeglang - Banten",
      dateResepsi: `
      <span class="font__title text-lg font-semibold uppercase"> Mei 2024 </span>
      <br />
      Pukul <b>11:00 Wib</b> s/d Selesai
      `,
      dataAccount: [
        {
          img: require("../assets/img/bank-bri.png"),
          name: "Putri Nengsih",
          norek: 386801047604531,
          bank: "BRI",
        },
        {
          img: require("../assets/img/bank-bsi.png"),
          name: "M. Nuril Hamdun",
          norek: 7102583300,
          bank: "BSI",
        },
      ],
      dateInitial: "PH",
      googleMap: "https://maps.app.goo.gl/gdddHTQq2S4aK9jSA"
    };
  },
};
