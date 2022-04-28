<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <validation-observer ref="observer">
      <form @submit.prevent="submit">
        <validation-provider name="email" rules="required|email">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </validation-provider>
        <validation-provider name="Password">
          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit"> submit </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('authentication/fetchLogin', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
