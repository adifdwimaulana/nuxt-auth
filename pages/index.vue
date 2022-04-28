<template>
  <v-row>
    <v-col v-for="movie in movies" :key="movie.id" cols="3">
      <v-card :loading="loading" class="mx-auto my-12" height="640">
        <v-img
          height="300"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        ></v-img>

        <v-card-title class="my-2">{{ movie.original_title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="movie.vote_average / 2"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ movie.vote_average }} ({{ movie.vote_count }})
            </div>
          </v-row>

          <div class="my-2">
            {{ movie.overview }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: ['auth'],
  computed: {
    movies() {
      return this.$store.state.movie.list
    },
  },
  mounted() {
    this.$store.dispatch('movie/fetchMovies')
  },
}
</script>
