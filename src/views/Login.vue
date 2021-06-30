<template>
  登入頁
  <button type="button" @click="goToAdmin">進入後台管理</button>
</template>

<script>
export default {
  methods: {
    goToAdmin () {
      // ajax
      this.$router.push('/admin/products')
    }
  }
}
</script>
