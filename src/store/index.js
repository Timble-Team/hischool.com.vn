export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories (state, categories = []) {
    state.categories = categories
  }
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
