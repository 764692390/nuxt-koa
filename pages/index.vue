<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />ssr 服务器端渲染
	
    <h1 class="title" v-for="(item,index) in rows" :key="index">
        <span>{{item.title}} === QQ群：</span>
        <img :src="item.logoUrl">
    </h1>

    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>

  </section>
</template>


<script>

import { baseurl } from '~/plugins/url.js'

export default {
	data() {
		return {
			active:'index'
		}
	},
	async asyncData({app}) {
		// 服务器端渲染数据
		let json = {page:1,pagesize:5}
		let {data} =await app.$axios.get(`${ baseurl }/home/getList`);
		let {rows} = data.data;
		return { rows }
	},
    created(){
		
	},
	methods: {
	
	},
	components: {
	
	}
}

</script>


<style scoped>
.title{
  margin: 50px 0;
}
</style>
