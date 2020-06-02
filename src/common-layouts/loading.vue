<template>
  <div class="loading-pane" v-if="loading">
    <img src="../assets/images/loading.gif" alt="kỉ yếu Hischool Đà Nẵng - Loading">
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
<style scoped>
  .loading-pane {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background-color: rgba(255,255,255, 0.9);
  }
  .loading-img {
    width: 50vw;
    max-width: 100px;
  }
</style>
