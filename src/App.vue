<template>
  <div id="app">
    <section>
      <NovaDatePicker v-model="date"></NovaDatePicker>
      &nbsp;
      <NovaAlert type="info" border>First Component</NovaAlert>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      date: null
    }
  }
}
</script>
