<template>
  <div v-if="price" class="cp-price-item text-center">
    <div class="main-bg-price pb-2">
      <div class="star">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <h2 class="title">{{price.name}}</h2>
      <p v-if="+price.type == 0">Áp dụng theo sĩ số</p>
      <p v-if="+price.type == 1">Không giới hạn sĩ số</p>
    </div>
    <div v-if="+price.type == 0" class="price-holder">
      <template v-if="price.price">
        <p><b style="color: #3ca1c3;">{{price.priceFirst}}k/<i class="ti-user"></i></b> cho 30 người đầu tiên</p>
        <p>từ người thứ 31 chỉ còn</p>
        <b class="price-num">{{price.price}}<sup>K</sup>
        <span><i class="ti-user"></i></span></b>
      </template>
      <template v-else>
        <b class="price-num">{{price.priceFirst}}<sup>K</sup>
        <span><i class="ti-user"></i></span></b>
      </template>
    </div>
    <div v-if="price.type == 1" class="price-holder">
      <b class="price-num">{{price.price}}<sup>K</sup></b>
    </div>
    <div class="meta-price">
      <span>Số thợ chụp: sĩ số / 20</span>
      <p v-if="price.takenTime">Thời gian: <b>{{price.takenTime}}</b></p>
      <ul class="container list-price-rule normal-ul">
        <h6>Bao gồm</h6>
        <li v-for="(item, index) of price.includes" :key="index">
          <a class="green-color"><i class="fa fa-check-circle-o" aria-hidden="true"></i> {{item}}</a>
          <hr class="line-item">
        </li>
      </ul>
    </div>
    <!-- <el-button v-if="!booked"  type="danger" @click="booking({
        id: price.id,
        price: price.price,
        priceFirst: price.priceFirst,
        name: price.num_pp,
        type: 0,
        types: price.types,
        url: $route.fullPath
      }); booked = true">Book đi đừng ngại ngùng!!!
    </el-button> -->
    <!-- <div v-else>
      <el-button type="success">✓ Đã book</el-button><br>
      <el-button @click="deleteBooking({id: price.id, type: 0}); booked = false" type="text">Không book nữa click vào đây</el-button>
    </div> -->
  </div>
</template>
<script>
export default {
  props: ['price'],
  data () {
    return {
      colorArr: ['#ffa534', '#fb404b', '#ff9510', '#cc2127', '#248cc9', '#4ec6f8'],
      booked: false
    }
  },
  mounted () {
    // let packsArr = JSON.parse(localStorage.getItem('PACKS'))
    // this.booked = packsArr.filter(x => x.id === this.price.id).length > 0
  }
  // methods: {
  //   ...mapActions({
  //     booking: 'booking',
  //     deleteBooking: 'deleteBooking'
  //   }),
  // }
}
</script>
<style lang="scss" scoped>
.star {
  padding-top: 20px;
}
.title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  padding-top: 10px;
  margin-bottom: 0;
}
.price-num {
  font-size: 40px;
  font-family: 'Anton', sans-serif;
  letter-spacing: 1.5px;
  color: #3ca1c3;
}
.main-bg-price {
  // background: linear-gradient(to top right, #ddb958 0%, #e5c66b 100%);
  border-radius: 10px 10px 0 0;
  .star, .title, p {
    color: white;
  }
}
.meta-price {
  border-radius: 5px;
  padding: 20px 0;
}
.btn-buynow {
  a {border-radius: 5px;}
}
.list-price-rule {
  padding-top: 30px;
//   overflow: scroll;
//   max-height: 300px;
}

.el-button {
  margin: 10px 0;
}
.el-button--text {
  margin: 0;
  padding: 0;
}
.cp-price-item {
  background-color: white;
  border-radius: 10px 10px 0 0;
  color: #505050;
  p {
    margin: 0;
  }
  h2 {
    padding: 0;
    line-height: 1.5;
  }
  h6 {
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }
  .price-holder {
    padding-top: 10px;
  }
}
.line-item {
  margin: 10px 0;
  border-color: #f0f0f0;
}

.green-color {
  color: grey;
  &:hover {
    color: #9ACD32;
  }
}
</style>
