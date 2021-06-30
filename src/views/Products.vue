<template>
  <div class="container">
    <h1>前台 / 產品列表</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            {{ item.title }}
          </td>
          <td>
            {{ item.description }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            {{ item.origin_price }}
          </td>
          <td>
            <button type="button" class="btn btn-primary" @click="goToPage(item)">進入單一頁面</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    goToPage (item) {
      this.$router.push(`/product/${item.id}`)
    }
  },
  created () {
    const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products`

    this.$http.get(url)
      .then((res) => {
        console.log(res)
        this.products = res.data.products
      })
  }
}
</script>
