<template>
  <div class="public-contract">
    <div class="contract" v-if="contract">
      <div class="container contract-info-main">
        <h3 class="center-head">Thông tin hợp đồng<br></h3>
        <div class="row">
          <div class="el-col col-md-6 col-xs-12">
              <div class="contracts-form">
                <div class="row">
                  <div class="el-col col-md-4 avatar-box">
                    <div>
                      <div class="avatar"><img src="@/assets/images/main-male.png" alt="Si" class="avatar-image">
                      </div>
                      <h4 class="center-head">Bên A</h4>
                    </div>
                  </div>
                  <div class="el-col col-md-8">
                    <label>Họ và Tên: </label><span> Đỗ Hồng Quân </span>
                    <a target="_blank" href="https://www.fb.com/dhquan19"><i aria-hidden="true" class="ti-facebook"></i></a><br>
                    <label>Đơn vị: </label><span> The Classic Studio</span><br>
                    <label>Địa chỉ: </label><p> 42-43 Tống Phước Phổ, P. Hòa Cường Bắc, Q. Hải Châu, Đà Nẵng</p>
                    <label>SĐT: </label><a href="tel: 0773420210"> 0773420210</a><br>
                  </div>
                </div>
              </div>
          </div>
          <div class="el-col col-md-6 col-xs-12">
            <div class="contracts-form">
              <div class="row">
                <div class="el-col col-md-4 avatar-box">
                  <div>
                    <div class="avatar">
                      <img src="@/assets/images/student-male.png" alt="Si" class="avatar-image">
                    </div>
                    <h4 class="center-head">Bên B</h4>
                  </div>
                </div>
                <div class="el-col col-md-8" v-if="contract.member">
                  <label>Họ và Tên: </label>
                  <span> {{ contract.member.name }} </span>
                  <a target="_blank" :href="contract.member.link_facebook ? contract.member.link_facebook : null"><i aria-hidden="true" class="ti-facebook"></i></a><br>
                  <label>Số lượng thành viên: </label><span> {{ contract.total_member}}</span><br>
                  <label>Đại diện của: </label><p> {{contract.group}} - {{contract.school.name}}</p>
                  <label>SĐT: </label><span> <a :href="'tel:' + contract.member.phone_number"> {{contract.member.phone_number}}</a></span><br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contract center-head">
        <div class="container">
          <h3 class="center-head">Lịch trình</h3>
          <div class="row">
            <div class="el-col col-md-5 col-xs-12"  v-if="contract.date_takens && contract.date_takens.length > 0">
              <!-- <div v-for="let date of contract.date_takens">
                <div v-for="let plan of date.plans">
                  <div class="timeline-item" [attr.date-is]="plan.plan_time | date: 'HH:mm' : '+0700'">
                    <span><b>Tập trung:</b> {{plan.place}}</span><br>
                    <span><b>Trang phục:</b> {{plan.costume}}</span><br>
                    <span>{{plan.plan_time | date: 'MM/dd'}}</span>
                  </div>
                </div>
              </div> -->
              <no-ssr>
                <light-timeline :items="plans">
                  <template slot="tag" slot-scope="{ item }">
                    {{item.plan_time | dateFormat('dd MMMM')}}
                  </template>
                  <template slot="symbol" slot-scope="{ item }">
                    <div class="my_icon_class"><i :class="item.icon"></i></div>
                  </template>
                  <template slot="content" slot-scope="{ item }">
                    <label>Nội dung:</label> {{item.content}}<br>
                    <label>Địa điểm:</label> {{item.place}}<br>
                    <label>Trang phục:</label> {{item.costume}}
                  </template>
                </light-timeline>
              </no-ssr>
            </div>
            <div class="el-col col-md-7 col-xs-12">
              <h5 class="price-contract">Các gói dịch vụ đã chọn</h5>
                <table class="table">
                  <thead>
                    <tr class="row">
                      <th class="col-4">Tên cụ thể</th>
                      <th class="col-4">Cách tính tiền</th>
                      <th class="col-4">Số lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <div v-for="(budget, index) of budgets" :key="index">
                      <tr class="row" v-if="budget.budgetableType === 'Package'">
                        <td class="col-4">{{budget.name}}</td>
                        <td class="col-4">{{statusCalc[budget.type]}}</td>
                        <td class="col-4">{{budget.quantity}}</td>
                      </tr>
                    </div>
                  </tbody>
                </table>
              <h5 class="price-contract">Các nội dung phát sinh</h5>
              <div>
                <table class="table">
                  <thead>
                    <tr class="row">
                      <th class="col-4">Tên cụ thể</th>
                      <th class="col-4">Cách tính tiền</th>
                      <th class="col-4">Số lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <div v-for="(budget, index) of budgets" :key="index">
                      <tr class="row" v-if="budget.budgetableType !== 'Package'">
                        <td class="col-4">{{budget.name}}</td>
                        <td class="col-4">{{statusCalc[budget.type]}}</td>
                        <td class="col-4">{{budget.quantity}}</td>
                      </tr>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="bonus-info">
            <h5 class="price-contract">Thông tin bổ sung</h5>
            <p><b>Tiền cọc:</b> {{contract.deposit | moneyConvert}}</p>
            <b>Ghi chú:</b>
            <p style="white-space: pre-wrap;" v-if="contract.note">{{contract.note}}</p>
            <p style="white-space: pre-wrap;" v-if="!contract.note"><i>Chưa có ghi chú</i></p>
          </div>
        </div>
      </div>
      <div id="contract" class="photographer-container photo-back">
        <div class="container photo-meta">
          <h3 class="title">Thợ chụp / quay</h3>
          <div class="photographer-list" v-if="photographers.length > 0">
            <div class="detail-container" v-for="(item, index) of photographers" :key="`b-${index}`">
              <div class="detail">
                <img src="@/assets/images/photographer.png" alt="Si" class="detail-image">
              </div>
              <h4 class="detail-name">{{item.user.name}}</h4>
              <span class="description">{{item.photographer_role}}</span><br>
              <span>{{ item.date_taken | dateFormat('dd/MM') }}</span>
              <div class="contact-container">
                <a :href="'tel:' + item.user.phone"><i class="fa fa-phone" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.fb.com/dhquan19"><i class="ti-facebook" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.fb.com/dhquan19"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="no-photo" v-if="photographers.length == 0">
            <p>Chưa rõ thợ chụp</p>
          </div>
        </div>
      </div>
      <div class="container">
        <h3 class="center-head">Các điều khoản cơ bản</h3>
        <div role="tablist" aria-multiselectable="true" class="el-collapse">
          <div class="el-collapse-item is-active">
            <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-6139" aria-describedby="el-collapse-content-6139">
              <div role="button" id="el-collapse-head-6139" tabindex="0" class="el-collapse-item__header is-active">Điều khoản về thanh toán <i class="header-icon el-icon-info"></i><i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i></div>
            </div>
            <div role="tabpanel" aria-labelledby="el-collapse-head-6139" id="el-collapse-content-6139" class="el-collapse-item__wrap">
              <div class="el-collapse-item__content">
                <div>
                  <p>
                    <b>Về việc đặt cọc:</b> Hợp đồng chỉ có giá trị khi lớp tiến hành đặt cọc tiền và có lịch chụp cụ thể. Giá trị đặt cọc tối thiểu là 30% hợp đồng.<br><br>
                    <b>Về việc thanh toán:</b> Sau khi chụp xong, lớp tiến hành thanh toán hết toàn bộ số tiền còn lại (bao gồm các phát sinh). Ảnh sẽ bắt đầu tính ngày sửa, khi lớp đã hoàn thành xong các thủ tục thanh toán &amp; trả đồ.<br>Các lớp sẽ có 7 ngày để thanh toán, kể từ khi chụp xong. Nếu quá thời hạn, số tiền còn lại sẽ được tính <b>phát sinh nợ</b>, dựa trên lãi ngân hàng.<br><br>
                    <b>Về phương thức thanh toán:</b> Các lớp có thể tiến hành trả tiền trực tiếp (chú ý: nhận hóa đơn) hoặc chuyển khoản qua thông tin tài khoản của studio ở bên dưới ( có hình ảnh giấy tờ chuyển khoản đi kèm &amp; ghi rõ nội dung: "tên lớp - ngày chụp- tên đại diện").<br>
                        ---------------------<br>
                        STK - 100214849231113<br>
                        Tên chủ thẻ - ĐỖ HỒNG QUÂN<br>
                        Ngân hàng - Eximbank chi nhánh Hùng Vương - Đà Nẵng<br>
                        ---------------------
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="el-collapse-item is-active">
            <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-7509" aria-describedby="el-collapse-content-7509">
              <div role="button" id="el-collapse-head-7509" tabindex="0" class="el-collapse-item__header is-active">
            Điều khoản về việc thuê trang phục <i class="header-icon el-icon-info"></i><i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
          </div>
        </div>
        <div role="tabpanel" aria-labelledby="el-collapse-head-7509" id="el-collapse-content-7509" class="el-collapse-item__wrap">
          <div class="el-collapse-item__content">
            <div>
              <b>Về thời gian thử đồ:</b> Thành viên các lớp có thể thử đồ trước 2 ngày kể từ ngày chụp (Trường hợp ngoại lệ, vui lòng liên hệ trực tiếp studio).<br>
              Lớp cùng studio chọn ra khung giờ nhiều thành viên thử đồ nhất để studio dễ dàng xếp người quản lý, và phục vụ cho cả lớp.<br> <br> <b>Về việc thuê:</b> Thành viên các lớp có thử và mang về các trang phục thuộc các loại sau: quần, áo, những phụ kiện đi kèm với loại trang phục đó.<br>Riêng <b>vòng hoa, cà vạt, bằng cử nhân </b>, studio sẽ sắp xếp đem lên vào ngày chụp. Lý do vì các vật dụng này dễ hư và dễ mất, nên phát trước sẽ không được bảo quản tốt.<br>
              Sau khi chụp xong, lớp vui lòng tự sắp xếp và trả <b>vòng hoa, cà vạt, bằng cử nhân </b> về cho studio <b>ngay trong ngày</b>. Trường hợp trả trễ, studio tính phát sinh theo giá thuê mới. <a style="display: inline-block;">(tham khảo giá phát sinh thuê tại đây)</a><br> <br><b>Về việc trả:</b> Lớp có <b>đúng 1 ngày</b> sau khi chụp xong, để trả ít nhất 70% số trang phục. Số lượng trang phục còn lại phải hoàn thành trong ngày tiếp theo (ngày thứ 2). <br>
              Phát sinh sẽ bắt đầu tính từ <b>ngày thứ 3</b> trở đi, cho các bạn chưa trả trang phục, dựa trên bảng giá thuê trang phục. <a style="display: inline-block;">(tham khảo giá phát sinh thuê tại đây)</a><br><br>
              <b>Về việc bảo quản:</b>Các thành viên thuê đồ phải có trách nhiệm trong việc giữ gìn đồ đạc. Studio không nhận lại các trang phục lỗi, và những bạn sử dụng các trang phục này phải chi trả toàn bộ số tiền mua trang phục theo bảng giá niêm yết, <a style="display: inline-block;">(tham khảo giá đền quần áo tại đây)</a> trang phục hư là trang phục có 1 trong các tình trạng sau:
              <p>+ Bị rách, cháy xém, ố vàng và không thể fix được.</p>
              <p>+ Bị lem màu ( thường xảy ra với áo dài trắng, giặt chung với trang phục có màu).</p>
              <p>+ Bị mất, thất lạc. </p>
              <p>+ Bị ẩm mốc ( thường xảy ra với lớp chụp ngày mưa, hoặc vì lý do gì đó mà quần áo bị ướt, sau đấy về bỏ vào bao ko phơi ra).</p>
              <p>+ Tự ý thay đổi, may vá, sửa trang phục mà ko thể đưa về hiện trạng cũ được ( 1 trường hợp dễ hiểu là lên lai áo dài, điều này bình thường, nhưng nhiều bạn ko lên lai mà cắt luôn tà áo dài).</p>
              Ảnh sẽ bắt đầu tính ngày sửa khi trang phục được qua ít nhất 70% và hợp đồng đã thanh toán đầy đủ.
            </div>
          </div>
        </div>
      </div>
      <div class="el-collapse-item is-active">
        <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-434" aria-describedby="el-collapse-content-434">
          <div role="button" id="el-collapse-head-434" tabindex="0" class="el-collapse-item__header is-active">
            Điều khoản về sửa ảnh, video <i class="header-icon el-icon-info"></i><i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
          </div>
        </div>
        <div role="tabpanel" aria-labelledby="el-collapse-head-434" id="el-collapse-content-434" class="el-collapse-item__wrap">
          <div class="el-collapse-item__content">
            <div>
              <b>Thời gian sửa ảnh:</b> thời gian sửa ảnh bắt đầu kể từ khi trả 70% trang phục và thanh toán đầy đủ. Sau khi bắt đầu tính thời gian sửa, chúng tôi sẽ cần 3 ngày để làm bản demo ảnh, và thêm 2 ngày nữa để hoàn thiện toàn bộ album ảnh ( tức là mất 5 ngày kể từ ngày trả đồ xong, thì cả lớp sẽ có toàn bộ ảnh chỉnh và ảnh gốc)<br><br>
              <b>Thời gian sửa video:</b> cũng tính như cách trên. Sau đó 1,5 tuần, video hoàn thiện sẽ ra mắt. Trong khoảng thời gian chờ đợi, studio có thể tung ra thêm các trailer cho lớp xem và chia sẻ.<br> <br> <b>Thời gian giao ảnh in:</b> Với những lớp có ảnh in, sau khi chúng tôi giao link ảnh đầy đủ. Các bạn sẽ tiến hành chọn ảnh theo form studio cung cấp. <a style="display: inline-block;">hướng dẫn tại đây</a> Cả lớp sẽ có 1 tuần để điền thông tin và ảnh mong muốn in. Sau 1 tuần link sẽ bị khóa, 3 tuần sau cả lớp sẽ được nhận ảnh in.<br> <br>
            </div>
          </div>
        </div>
      </div>
      <div class="el-collapse-item is-active">
        <div role="tab">
          <div role="button" id="el-collapse-head-3328" tabindex="0" class="el-collapse-item__header is-active">
              Thông tin chi tiết <i class="header-icon el-icon-info"></i><i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
            </div>
          </div>
          <div role="tabpanel" id="el-collapse-content-3328" class="el-collapse-item__wrap">
            <div class="el-collapse-item__content"><div>
              <p><b>Địa chỉ: 42 Tống Phước Phổ - Hải Châu- Đà Nẵng.</b></p>
              <p><b>SĐT chịu trách nhiệm toàn bộ: <a href="tel: 0773420210">0773420210</a> (Mr. Quân)</b></p>
            </div>
          </div>
        </div>
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
      icons: ['ti-star', 'ti-control-record', 'ti-tag', 'ti-wand'],
      contract: null,
      budgets: [],
      photographers: [],
      objectKeys: {},
      plans: [],
      statusCalc: ['Tính theo đầu người', 'Tính theo gói']
    }
  },
  async mounted () {
    const { contract } = await this.$api.get(['contracts', this.$route.params.id])
    // if (this.secretKey === v.contract.secret_key) {
    this.contract = contract
    contract.budgets.forEach(x => {
      if (x.price) {
        let obj = {
          budgetableType: x.budgetable_type,
          type: x.budget_type,
          name: x.budgetable.name,
          quantity: x.quantity,
          id: x.id,
          price: x.price,
          note: x.note,
          total: x.quantity * x.price,
        };
        this.budgets.push(obj);
      }
    });
    this.contract.date_takens.forEach(x => {
      let a = x.photographer_date_takens.map(y => ({...y, date_taken: x.date_taken}));
      this.photographers.push(...a);
    });
    let plans = []
    this.contract.date_takens.forEach((dateTaken, index) => {
      plans.push(...dateTaken.plans.map(plan => ({...plan, icon: this.icons[index]})))
    })
    this.plans = plans
  }
}
</script>
<style>
.my_icon_class {
  font-size: 20px;
  transform: translateX(-50%);
}
</style>
