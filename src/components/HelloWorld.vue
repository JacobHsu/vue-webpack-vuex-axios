<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'
import { apiComments, apiGetPosts, delay2s, apiProfile } from "@/api/api";
export default {
  name: 'HelloWorld',
  components: {
    ProductList,
    ShoppingCart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: "",
      comments: "",
      profile: "",
    }
  },
  created() {
    this.onLoad();
  },
  methods: {
    // 获取数据
    async onLoad() {
      // 调用api接口，并且提供了两个参数
      await apiComments({
        // type: 0,
        // sort: 1,
      }).then((res) => {
        // 获取数据成功后的其他操作
        this.comments = res[0];
        console.log("comments", res);
      });
      await delay2s();

      apiProfile().then((res) => {
        this.profile = res;
        console.log("profile", res);
      });

      await apiGetPosts().then((res) => {
        // 获取数据成功后的其他操作
        this.posts = res[0];
        console.log("posts", res);
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
