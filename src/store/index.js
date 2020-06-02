export const state = () => ({
  categories: [],
  clothes: [],
  accessories: [],
  slugs: {
    'tao-dang': '3',
    'huong-dan': '4',
    'dia-diem-chup-hinh': '5',
    'idea': '1',
    '3':'tao-dang',
    '4': 'huong-dan',
    '5': 'dia-diem-chup-hinh',
    '1': 'idea'
  }
})

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
