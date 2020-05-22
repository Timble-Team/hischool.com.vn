<template>
  <div>
    <h2 class="text-center">TÌM KIẾM FULL ALBUM</h2>
    <div class="section-full bg-gray subscribe-sc">
      <div class="container">
        <div class="row align-items-center subscribe-design">
          <div class="col-lg-7 col-md-7 d-none d-md-block">
            <img src="../../assets/images/content/search.jpeg" alt />
          </div>
          <div class="col-lg-5 col-md-5">
            <h2>Give Us Contract Code</h2>
            <div class="form-style subscribe">
              <div class="input-group">
                <input
                  name="dzEmail"
                  required="required"
                  type="email"
                  class="form-control"
                  placeholder="Mã code"
                  v-model="code"
                />
                <div class="input-group-append">
                  <button class="btn" @click="submitCode()">
                    <i class="la la-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="dzSubscribeMsg"></div>
            <p class="custom-p">Xem lại hợp đồng để lấy được mã code của lớp. Mã code là công cụ bảo mật vì thế quý khách hàng vui lòng giữ kĩ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: null
    }
  },
  methods: {
    submitCode () {
      this.$router.push({ name: 'viewer', params: { id: this.code } })
    }
  }
}
</script>
<style scoped>
.custom-p {
  font-size: 14px;
  margin-top: 10px;
}
</style>
