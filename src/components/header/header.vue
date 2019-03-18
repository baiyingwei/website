<template>
  <div id="header-con" class="header">
    <div class="header-notes">
      <div class="header-notes-left">
        <p class="notes-left-text">时光·记录</p>
        <p class="notes-left-context">
          一生至少该有一次，为了某个人而忘了自己，不求有结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇到你。(再美的回忆还是会淡忘，只能让相片定格那瞬间。)
        </p>
      </div>
      <div class="header-notes-right">
        <div class="notes-btn" v-on:click="showFlower">{{flowerStatus ? '合回': '咔嚓'}}</div>
        <ul class="flower-list">
          <li v-for="item in flowerList" v-bind:style="{'top': item.top + 'px', 'left': item.left + 'px','transform': 'rotate('+item.rotate+'deg)'}">
            <img v-bind:src="item.url" alt="" >
          </li>
        </ul>
      </div>
    </div>
    <ul class="tab-list">
      <li v-for="item in navList"><a href="">{{item}}</a></li>
    </ul>
    <button v-on:click="$emit('enlarge-text')">{{type}}</button>
  </div>
</template>

<script>
  export default {
    name: "header-con",
    props:['type'],
    data() {
      return {
        flowerList: [
          'http://www.lmlblog.com/time/images/img12.jpg',
          'http://www.lmlblog.com/time/images/img4.jpg',
          'http://www.lmlblog.com/time/images/img9.jpg',
          'http://www.lmlblog.com/time/images/img11.jpg',
          'http://www.lmlblog.com/time/images/img10.jpg',
          'http://www.lmlblog.com/time/images/img2.jpg',
          'http://www.lmlblog.com/time/images/img12.jpg',
          'http://www.lmlblog.com/time/images/img5.jpg',
          'http://wx4.sinaimg.cn/large/764240e1gy1fu3ea4f2gpj20m80m8tnq.jpg',
          'http://wx4.sinaimg.cn/large/764240e1gy1fu3ea4f2gpj20m80m8tnq.jpg'
        ],
        flowerStatus: false,
        navList:[
            '关于我',
            '图片下载',
            '碎言碎语',
            '慢生活',
            '杂货铺',
            '留言板'
        ]
      }
    },
    beforeCreate() {
      console.log(this.flowerList) //创建前状态
    },
    created(){
      this.loadFlowerList('0', '0');
      console.log(this.flowerList) //创建完毕状态
    },
    methods:{
      rnd(min, max){
        return min + Math.floor(Math.random() * (max - min + 1));
      },
      loadFlowerList(top, left){
        this.flowerList = this.flowerList.map((k, index) => {
          return {
            url: k.url || k,
            top: top || this.rnd(-90, 150),
            left: left || this.rnd(-400, 300),
            rotate: this.rnd(-70, 70),
          }
        })
      },
      showFlower(){
        this.flowerStatus = !this.flowerStatus;
        if (!this.flowerStatus){
          this.loadFlowerList('0', '0')
        } else {
          this.loadFlowerList();
        }
      }
    },
    beforeMount(){
      console.log(this.flowerList) //挂载前状态
    },
    mounted(){
      console.log(this.flowerList) //挂载结束状态
    },
    beforeUpdate(){
      console.log(this.flowerList) //更新前
    },
    updated(){
      console.log(this.flowerList) //更新完成
    },
    beforeDestroy(){
      console.log(this.flowerList) //销毁前
    },
    destroyed(){
      console.log(this.flowerList) //销毁
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 380px;
    position: relative;
    background: url('../../images/101723_top.jpg') no-repeat top center;
    overflow: hidden;
  }
  .tab-list{
    display: flex;
    height: 50px;
    line-height: 50px;
    background: rgba(56, 134, 72, 0.43);
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: center;
  }
  .tab-list a{
     color: #fff;
     padding: 0 20px;
    height: 100%;
    display: inline-block;
   }
  .tab-list a:hover {
    background:#5EA51B;
    border-radius: 40px 0;
  }
  .header-notes{
    display: flex;
    justify-content: space-between;
    color: #fff;
    width: 1000px;
    margin: 40px auto 0;
    padding-top: 60px;
  }
  .notes-left-text{
    font-size: 30px;
    margin-bottom: 10px;
  }
  .header-notes-left{
    width: 330px;
    font-size: 12px;
    line-height: 26px;
  }
  .header-notes-right{
    width: 175px;
    height: 175px;
    position: relative;
  }
  .notes-btn{
    background: #6EBD0A;
    text-shadow: 1px 1px 0 #58950a;
    width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    top: 30px;
    left:24px;
    z-index:3;
    cursor:pointer;
  }
  .flower-list li{
    width: 100px;
    padding: 5px;
    background: #fff;
    position: absolute;
    transition: all 0.5s ease;
  }
  .flower-list li img{
    width: 100%;
    height: auto;
    vertical-align: top;
  }
</style>
