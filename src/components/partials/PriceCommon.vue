<template>
  <div class="price">
    <section class="cp_price-section">
      <div class="container">
        <div class="cp-heading-holder text-center col-lg-12">
          <div class="align-center">
            <h3 class="title-price">Prices</h3>
            <p>Bảng giá dành cho <b>{{type}}</b></p>
            <div class="block">
              <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              <a @click="scrollSmooth"> Kích vào đây trượt nhanh xuống<br> bảng giá {{this.$route.query.title}}</a>
            </div>
          </div>
        </div>
        <ul class="row normal-ul">
          <li class="col-md-3 col-sm-6">
            <img src="../../assets/images/content/ticket1.png">
            <h6 class="text-center">Lên đến 20 quà tặng<br> khi book chụp</h6>
          </li>
          <li class="col-md-3 col-sm-6">
            <img src="../../assets/images/content/ticket2.png">
            <h6 class="text-center">Hỗ trợ 2 Triệu VND<br> khi book quay</h6>
          </li>
          <li class="col-md-3 col-sm-6">
            <img src="../../assets/images/content/ticket3.png">
            <h6 class="text-center">Vừa chụp combo<br> vừa được bao ô tô</h6>
          </li>
          <li class="col-md-3 col-sm-6">
            <img src="../../assets/images/content/ticket4.png">
            <h6 class="text-center">Vừa chụp combo<br> vừa được bao ô tô</h6>
          </li>
        </ul>
        <h4 class="title-price">CHỈ CẦN ĐĂNG KÝ CHỤP VÀ THUÊ TRANG PHỤC BẠN SẼ ĐƯỢC</h4>
        <div class="gift-row row">
          <gift class="col-md-4" :icon="'ti-gift'" type="0" :content="item" :keyword="'FREE'" v-for="(item, index) of giftPhoto" :key="index"/>
        </div>
        <h4 class="title-price">GẤP ĐÔI QUÀ TẶNG HƠN NỮA!!!!</h4>
        <div class="gift-row row">
          <gift class="col-md-4" :icon="'ti-gift'" type="1" :content="item.content" :keyword="item.keyword" v-for="(item, index) of giftCam" :key="index"/>
        </div>
      </div>
      <div class="background-price">
        <div class="container">
          <h4 id="skip"  class="title-price">VẪN CÒN RẤT NHIỀU KHUYẾN MÃI BẤT NGỜ ĐANG CHỜ QUÝ KHÁCH BOOK LỊCH</h4>
          <span>Các gói chụp của chúng tôi được chia làm 3 nhóm, tương ứng với nhu cầu của khách hàng:</span>
          <ul>
            <li><b>Gói chụp combo cơ bản:</b> đây là các gói chụp cơ bản nhất để sử dụng dịch vụ của chúng tôi.</li>
            <li><b>Gói chụp mở rộng:</b> mở rộng thời gian chụp đến đêm.</li>
            <li><b>Gói trang phục - concept:</b> giá thuê từng loại trang phục theo concept và phụ kiện đi kèm.</li>
          </ul>
          <h5 class="text-center">Các gói chụp combo cơ bản</h5>
          <div class="row">
            <div class="col-md-4 col-sm-12 price-item" v-for="(item, index) of prices" :key ="`a${index}`">
              <price-item :price="item" :height="height"/>
            </div>
          </div>
          <h5 class="text-center">Các gói chụp mở rộng</h5>
          <div class="row">
            <div class="col-md-6 col-sm-12 price-item" v-for="(item, index) of extraShootingPrices" :key ="`b${index}`">
              <price-item :price="item" :height="true"/>
            </div>
          </div>
          <h5 class="text-center">Các gói Video</h5>
          <div class="row">
            <div class="col-md-4 col-sm-12 price-item" v-for="(item, index) of videoPrices" :key ="`c${index}`">
              <price-item :price="item" :height="true"/>
            </div>
          </div>
          <h5 class="p-t50 text-center">Các gói trang phục concept</h5>
          <div class="row">
            <div class="col-lg-4" v-for="(item, index) of clothes" :key="index">
              <CoverArticle :article="item" :shortcut="true" />
            </div>
            <div class="text-center dis-block">
              <button class="load-more-btn text-center">
                <nuxt-link :to="'/bang-gia/trang-phuc'" class="btn outline outline-2 black radius-xl">Xem thêm gói trang phục</nuxt-link>
              </button>
            </div>
          </div>
          <h5 class="p-t50 text-center">Các gói phụ kiện</h5>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="(item, index) of accessories" :key="index">
              <Accessory :accessory="item" />
            </div>
            <div class="text-center dis-block">
              <button class="load-more-btn text-center">
                <nuxt-link :to="'/bang-gia/phu-kien'" class="btn outline outline-2 black radius-xl">Xem full giá phụ kiện</nuxt-link>
              </button>
            </div>
          </div>
          <div>
            <h4 id="skip"  class="title-price">MỘT SỐ LƯU Ý</h4>
            <ul class="notice-list normal-ul">
              <li class="list-item-notice">Tất cả các gói áp dụng cho các lớp sĩ số trên 30 người. (Các lớp dưới 30 người liên hệ để được tư vấn) </li>
              <li class="list-item-notice">The Classic Studio có dịch vụ makeup: 120k/ mặt. Bên cạnh đó, các bạn nữ vào hình cũng sẽ xinh lung linh hơn khi chỉ cần tự make up nhẹ nhàng, che khuyết điểm</li>
              <li class="list-item-notice">1 thợ chụp mỗi 20 sinh viên, tha hồ tẹt ga, ko lo đợi chờ!!!</li>
              <li class="list-item-notice">Đội ngũ thợ bẩn bựa, cực kì vui tính</li>
            </ul>
          </div>
          <div>
            <!-- <h4 id="skip"  class="title-price">XEM CÁC BẢNG GIÁ KHÁC</h4> -->
            <!-- <figure-list :figures="figures"></figure-list> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Gift from '@/components/partials/Gift'
import PriceItem from '@/components/partials/PriceItem'
import Accessory from '@/components/partials/Accessory'
import CoverArticle from '@/components/modules/CoverArticle2.vue'

export default {
  name: 'Price',
  components: {
    Gift,
    PriceItem,
    CoverArticle,
    Accessory
  },
  props: [
    'prices',
    'type',
    'height'
  ],
  data () {
    return {
      extraShootingPrices: [],
      videoPrices: [],
      giftPhoto: [
        'Hoa cầm tay và hoa đội đầu cho cả lớp',
        'Cà vạt cho tất cả các bạn nam',
        'Máy bay giấy màu cho cả lớp phi tẹt bô',
        '3kg bột màu chơi mệt nghỉ',
        'Loa thùng quẩy tẹt ga khi chơi bột màu',
        'Khói màu cho các lớp chơi bột màu',
        'Mỗi bạn 2 ảnh 13×18 in chất lượng cao',
        'Gói thiết kế photobook trị giá 2.000.000đ',
        'Flycam chụp hình cho các lớp đăng ký sớm và trên 50 người.'
      ],
      giftCam: [
        { keyword: 'TẶNG NGAY', content: 'bóng bay khi book lịch' },
        { keyword: 'TẶNG NGAY', content: 'gói Flycam khi book gói trang phục concept' },
        { keyword: 'CAM ĐOAN', content: 'trả ảnh trong vòng 3-5 ngày' },
        { keyword: 'MIỄN PHÍ', content: 'sử dụng hệ thống ảnh fullHD' },
        { keyword: 'TẶNG NGAY', content: '2.000.000đ khi sử dụng gói quay phim' },
        { keyword: 'Không giới hạn', content: 'số lượng file ảnh trong ngày chụp' },
        { keyword: 'Không giới hạn', content: 'Địa điểm chụp hình trong thời gian chụp' },
        { keyword: 'Chỉnh sửa', content: 'Toàn bộ file chụp trong buổi chụp, trả toàn ảnh bộ đã qua chỉnh sửa' },
        { keyword: 'Tư vấn', content: 'Concept chụp ảnh kỷ yếu độc nhất vô nhị' }
      ],
      figures: [
        // {
        //   timeBefore: 'chụp - xe di chuyển - trang phục',
        //   type: 'Bảng giá',
        //   topic: 'Gói Combo',
        //   cover: require('../assets/images/main-6.jpg'),
        //   url: '/price?title=Combo&type=2'
        // },
        // {
        //   timeBefore: '2tr VND quà tặng',
        //   type: 'Bảng giá',
        //   topic: 'Quay Phim',
        //   cover: require('../assets/images/main-5.jpg'),
        //   url: '/price?title=Combo&type=1'
        // },
        // {
        //   timeBefore: 'Độc - lạ',
        //   type: 'Bảng giá',
        //   topic: 'Concept - Trang Phục',
        //   cover: require('../assets/images/main-4.jpg'),
        //   url: '/clothes'
        // }
      ],
    }
  },
  created() {
    this.getExtraShootingPrices()
    this.getVideoPrices()
  },
  computed: {
    clothes () {
      return this.$store.state.clothes.slice(0, 3)
    },
    accessories () {
      return this.$store.state.accessories.slice(0, 4)
    }
  },
  methods: {
    scrollSmooth () {
      var hash = '#skip'
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500)
    },
    async getExtraShootingPrices () {
      const pricesRef = await this.$fireStore.collection('prices').where('kind', '==', '6').get()
      this.extraShootingPrices = this.$common.convertCollectionRecord(pricesRef).sort((a,b) => (+a.order - +b.order))
    },
    async getVideoPrices () {
      const pricesRef = await this.$fireStore.collection('prices').where('kind', '==', '3').get()
      this.videoPrices = this.$common.convertCollectionRecord(pricesRef).sort((a,b) => (+a.order - +b.order))
    }
  }
}
</script>
