<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
        </header>
        <div v-if="fatherComponent == 'home'" >
    		<div class="home_logo item_container_style"></div>
    		<!-- <router-link to="item" class="start button_style" ></router-link> -->
    	</div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'itemcontainer',
    props:['fatherComponent'],
  	computed: mapState([
	  	'itemNum', //第几题
  		'level', //第几周
  		'itemDetail', //题目详情
  		'timer', //计时器
    ]),
    created(){
		//初始化信息
		if(this.fatherComponent == 'home') {
			this.initializeData();
			document.body.style.backgroundImage = 'url(./static/img/1-2.jpg)';
		}
	}
}
</script>

<style lang="less">
 .top_tips{
     position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
 }
 .home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
</style>


