<template>
  <div class="loading-pane" v-if="loading">
    <svg xml:space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="圖層_1" version="1.1" style="height: 100%; width: 100%; background: rgb(255, 255, 255);" width="128px" height="128px"><g class="ldl-scale" style="transform-origin: 50% 50%; transform: rotate(0deg) scale(0.8, 0.8);"><g class="ldl-ani"><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.03879s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><circle stroke-miterlimit="10" stroke-width="3.855" stroke="#333" fill="#fff" r="13.6" cy="61.7" cx="21.1" style="fill: rgb(255, 255, 255); stroke: rgb(51, 51, 51);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.0546s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><circle fill="#e0e0e0" r="5" cy="61.7" cx="21.1" style="fill: rgb(224, 224, 224);"></circle></g></g></g></g></g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.0704s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><circle stroke-miterlimit="10" stroke-width="3.855" stroke="#333" fill="#fff" r="13.6" cy="61.7" cx="78.9" style="fill: rgb(255, 255, 255); stroke: rgb(51, 51, 51);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.08621s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><circle fill="#e0e0e0" r="5" cy="61.7" cx="78.9" style="fill: rgb(224, 224, 224);"></circle></g></g></g></g></g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.10201s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><path fill="#77a4bd" d="M80.3 61L63.7 24.1c-.3-.8-1.3-1.1-2-.8-.8.3-1.1 1.3-.8 2l6.3 14H37.5L35 33.7 32.2 35l2.8 6.2-14.2 18.4c-.5.7-.6 1.6-.2 2.3.4.8 1.1 1.2 2 1.2h23.3l1-.4 22.3-19.1 8.3 18.5c.3.6.8.9 1.4.9.2 0 .4 0 .6-.1.8-.2 1.2-1.1.8-1.9zM36.4 44.4l7.1 15.8H24.3l12.1-15.8zm10 14.8l-7.5-16.7h27L46.4 59.2z" style="fill: rgb(119, 164, 189);"></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.11782s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><path d="M28.9 34.4h10.4" stroke-miterlimit="10" stroke-linejoin="bevel" stroke-linecap="round" stroke-width="3.084" stroke="#c33737" fill="none" style="stroke: rgb(195, 55, 55);"></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.13362s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><circle stroke-miterlimit="10" stroke-width="2.5" stroke="#77a4bd" fill="#a0c8d7" r="6.5" cy="61" cx="45.5" style="fill: rgb(160, 200, 215); stroke: rgb(119, 164, 189);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: matrix(1, 0, 0, 1, 0, 0); animation: 1.14943s linear -1.14943s infinite normal forwards running bounce-1974ee70-7578-4fca-923c-5cc50a46d372;"><path d="M62.3 24.8h9.1" stroke-miterlimit="10" stroke-linejoin="bevel" stroke-linecap="round" stroke-width="3.084" stroke="#c33737" fill="none" style="stroke: rgb(195, 55, 55);"></path></g></g></g></g></g><metadata xmlns:d="https://loading.io/stock/"><d:name>bike</d:name><d:tags>bicycle,cycling,ride,bike,transportation</d:tags><d:license>by</d:license><d:slug>5c9ekv</d:slug></metadata></g></g></svg>
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
