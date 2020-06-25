export const state = () => ({
  categories: [],
  clothes: [],
  accessories: [],
  lightboxItems: [],
  lightboxCurrentItem: null,
  slugs: {
    'tao-dang': '3',
    'huong-dan': '4',
    'dia-diem-chup-hinh': '5',
    'make-up': '6',
    'idea': '1',
    '3':'tao-dang',
    '4': 'huong-dan',
    '5': 'dia-diem-chup-hinh',
    '1': 'idea',
    '6': 'make-up'
  }
})

export const getters = {
  getCategories: state => {
    return state.categories
  },
  getAccessories: state => {
    return state.accessories
  },
  getClothes: (state) => {
    return state.clothes
  }
}

export const mutations = {
  setCategories (state, categories = []) {
    state.categories = categories
  },
  setClothes (state, clothes = []) {
    state.clothes = clothes
  },
  setAccessories (state, accessories = []) {
    state.accessories = accessories
  },
  setLightbox (state, payload = {items: [], index: null}) {
    console.log(payload)
    state.lightboxItems = payload.items
    state.lightboxCurrentItem = payload.index
  },
}

// modules: {
  //   todos: {
  //     namespaced: true,
  //     state: () => ({
  //       list: []
  //     }),
  //     mutations: {
  //       add (state, { text }) {
  //         state.list.push({
  //           text,
  //           done: false
  //         })
  //       },
  //       remove (state, { todo }) {
  //         state.list.splice(state.list.indexOf(todo), 1)
  //       },
  //       toggle (state, { todo }) {
  //         todo.done = !todo.done
  //       }
  //     }
  //   }
  // }
