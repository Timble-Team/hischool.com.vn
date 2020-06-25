<template>

</template>
<script>
export default {
  created() {
    this.$router.push({ path: `/albums/${this.$route.params.code}` })
  }
}
</script>
