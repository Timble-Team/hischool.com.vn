<template>
  <div class="pagination-bx clearfix text-center">
    <ul class="pagination">
      <!-- <li class="prev"><a><i class="fa fa-angle-left"></i></a></li> -->
      <li v-for="i of pages" :key="i" @click="changePage(i)" :class="{'active': i === currentPage + 1}"><a>{{i}}</a></li>
      <!-- <li class="next"><a><i class="fa fa-angle-right"></i></a></li> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: ['pages', 'currentPage'],
  methods: {
    changePage (i) {
      this.$emit('changePage', i)
    }
  }
}
</script>
<style scoped>
.pagination {
  align-items: center;
  justify-content: center;
}
</style>
