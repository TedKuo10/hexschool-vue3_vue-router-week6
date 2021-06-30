<template>
  產品單一頁面
  {{ id }}
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    console.log(this.$route)
    console.log(this.$router)
    const { id } = this.$route.params
    this.id = id
    console.log(id)
  }
}
</script>
