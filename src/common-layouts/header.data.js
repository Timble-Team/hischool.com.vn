export class HeaderData {
  items;

  constructor (data = [[], [], []]) {
    this.items = data
  }

  config () {
    return [
      {
        name: 'Trang chủ',
        path: '/',
        type: 0
      },
      {
        name: 'Bảng giá',
        type: 0,
        children: [
          {
            name: 'Gói chụp Combo sinh viên',
            path: '/bang-gia/sinh-vien'
          },
          {
            name: 'Gói chụp Combo học sinh',
            path: '/bang-gia/hoc-sinh'
          },
          {
            name: 'Gói quay video',
            path: '/bang-gia/quay-phim'
          },
          {
            name: 'Gói trang phục',
            path: '/bang-gia/trang-phuc'
          },
          {
            name: 'Gói trang trí',
            path: '/bang-gia/trang-tri'
          },
          {
            name: 'Gói phụ kiện',
            path: '/bang-gia/phu-kien'
          },
          {
            name: 'Gói makeup/ làm tóc',
            path: '/bang-gia/make-up'
          }
        ]
      },
      {
        name: 'Sản phẩm',
        type: 0,
        children: [
          {
            name: 'Ảnh',
            path: '/product/pictures'
          },
          {
            name: 'Video',
            path: '/product/videos'
          },
          {
            name: 'Trang trí',
            path: '/product/decoration'
          },
          {
            name: 'SCHOOL STORIES',
            path: '/product/stories'
          }
        ]
      },
      {
        name: 'Tin tức',
        type: 0,
        children: [
          // {
          //   name: 'Khuyến mãi',
          //   path: '/news/offer'
          // },
          {
            name: 'Ý tưởng - Concept',
            path: '/bai-viet/idea',
          },
          {
            name: 'Tạo dáng',
            path: '/bai-viet/pose-dang',
          },
          {
            name: 'Tips & Tricks',
            path: '/bai-viet/huong-dan',
          }
        ]
      },
      {
        name: 'Tìm ảnh',
        path: '/tim-kiem',
        type: 0
      },
      {
        name: 'About',
        path: '/ve-chung-toi',
        type: 0
      }
    ]
  }
}
