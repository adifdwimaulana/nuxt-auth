const state = () => ({
  list: [],
})

const mutations = {
  setList(state, param) {
    state.list = param
  },
}

const actions = {
  async fetchMovies(store) {
    const response = await this.$axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=9adbf9b696ac935f8dedfac5c6e8948b'
    )

    store.commit('setList', response.data.results)
  },
}

export { state, mutations, actions }
