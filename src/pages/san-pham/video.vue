<template>
  <div class="portfolio-video">
    <section class="cp_price-section">
      <div class="container">
        <div class="cp-heading-holder text-center col-lg-12">
          <div class="align-center">
            <h3 class="title-price">Videos</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4" v-for="(video, index) of videos" :key="`v${index}`">
            <div class="fb-video" :data-href="video.source.url" data-show-text="false" data-width="">
              <blockquote :cite="video.source.url" class="fb-xfbml-parse-ignore">
                <a :href="video.source.url">{{video.name}} - {{video.desc}}</a>
                <p>------------------------

                💥CHỈ 1 LẦN THANH TOÁN sẽ hưởng FULL ưu đãi từ HÌNH ẢNH, TRANG PHỤC CHO ĐẾN XE DI CHUYỂN theo GÓI DỊCH VỤ.
                ------------------------
                ‼️❤️ Chỉ cần BOOK LỊCH sẽ nhận được hàng đống khuyến mãi sau

                🎁 FREE gói FLYCAM và tặng bóng bay cho tất cả gói chụp.
                🎁 FREE hoa đội đầu cho các bạn nữ.
                🎁 FREE cà vạt cho tất cả các bạn nam.
                🎁 FREE gói loa thùng quẩy banh xác.
                🎁 FREE máy bay giấy màu ném tẹt ga.
                🎁 FREE 3kg bột màu loại cao cấp chơi mệt nghỉ.
                🎁 FREE mỗi bạn 2 ảnh 13x18 in chất lượng cao.
                🎁 FREE DY ĐÈN TRANG TRÍ, phụ kiện hỗ trợ ánh sáng cho các gói chụp ban đêm.
                Bạn muốn 1 bộ hình tâm đắc và đậm chất cổ điển. Hãy cùng với đội #TheClassicStudio cùng làm nên những điều khác biệt, độc nhất vô nhị.
                Chúng tôi:
                👉 KHÔNG GIỚI HẠN địa điểm và file ảnh chụp trong ngày - Chỉnh sửa TOÀN BỘ ảnh đã chụp.
                👉 Được Trải nghiệm hệ thống nhận ngay ảnh gốc gần như ngay lập tức khi vừa chụp xong, giao nhận ảnh sửa chỉ với 1 đường link.
                👉 KHÔNG GIỚI HẠN ý tưởng concept, chỉ cần bạn dám nghĩ chúng tôi sẽ dám làm.
                👉 HỖ TRỢ cho thuê các trang phục kỷ yếu concept tại những tiệm thuê đồ lớn trong Đà Nẵng.
                👉 Màu sắc luôn sáng tạo trong những bộ hình khác nhau không nơi nào có.
                👉 Đội ngũ tư vấn, thợ chụp bao bẩn bựa, vui tính, chuyên nghiệp, chịu chơi chịu làm.
                👉 Cam kết có một ngày chụp tràn đầy tiếng cười và đáng nhớ.
                ❤️ Ảnh thì thích có thể chụp nhưng kỷ yếu tốt nghiệp cả đời chỉ có 1 lần.
                -------------------------------------
                📞 SĐT: 0773420210
                📞 Địa chỉ: 43 Tống Phước Phổ, Hải Châu, Đà Nẵng
                -------------------------------------
                ✨https://hischool.com.vn - Hãy để sự chuyên nghiệp lên tiếng.
                #ky_yeu_the_classic #chupanhkyyeutheclassic #quayphimkyyeutheclassic#kyyeutrongoitheclassic #chupanhkyyeucap3 #chupanhkyyeuhoian#kyyeuhoian #kyyeu #theclassic #áothổcẩm
                ------------------------------------------------------
                ☑️Album đã thực hiện : https://www.facebook.com/pg/classic.yearbook/photos/
                ☑️Truy cập hệ thống kho ảnh trên website : https://hischool.com.vn/viewers
                ☑️Xem bảng giá:
                https://hischool.com.vn/price?title=Combo&amp;type=2
                ☑️Xem trang phục:
                http://www.hischool.com.vn/clothes
                </p>
                Người đăng: <a href="https://www.facebook.com/classic.yearbook/">The Classic Studio - Kỷ yếu số 1 Đà Thành</a> vào Chủ nhật, 2 tháng 2, 2020
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
</template>
<script>

export default {
  mounted() {
    this.getVideos()
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    async getVideos() {
      const videosRef = await this.$fireStore.collection('videos').get()
      this.videos = this.$common.convertCollectionRecord(videosRef).sort((a,b) => (+a.order - +b.order))
      setTimeout(() => {
        window.FB.XFBML.parse()
      })
    }
  }
}
</script>
