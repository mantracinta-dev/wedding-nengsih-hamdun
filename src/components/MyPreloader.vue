<template>
  <div class="text-center">
    <v-overlay :value="loader" z-index="999">
      <div>
        Loading
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="white"
          ></v-progress-circular>
        </div>
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "ThePreloader",
  props: ["loader"],
  data() {
    return {};
  }
};
</script>

<style scoped></style>
