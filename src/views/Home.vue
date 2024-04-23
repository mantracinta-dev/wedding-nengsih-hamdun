<template>
  <div class="wrapper">
    <Navbar />
    <Header />
    <DataInfo class="mb-2" />
    <QuotesArum />
    <DataEventAkad class="mb-2" />
    <DataEventResepsi class="mb-2" />
    <Moment />
    <GalleryPhoto />
    <Gift class="mt-2" />
    <Footer />
    <!-- <Menu /> -->
  </div>
</template>

<script>
import DataEventAkad from "../components/DataEvent.vue";
import DataEventResepsi from "../components/DataEvent2.vue";
import DataInfo from "../components/DataInfo.vue";
import Footer from "../components/Footer.vue";
import GalleryPhoto from "../components/GalleryPhoto.vue";
import Gift from "../components/Gift.vue";
import Header from "../components/Header.vue";
// import Menu from '../components/Menu.vue'
import Navbar from "../components/Navbar.vue";
import Moment from "../components/Moment.vue";
import QuotesArum from "../components/QuotesArum.vue";
export default {
  name: "Home",
  components: {
    Header,
    DataInfo,
    // Menu,
    Navbar,
    DataEventAkad,
    DataEventResepsi,
    Gift,
    Footer,
    GalleryPhoto,
    Moment,
    QuotesArum,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
