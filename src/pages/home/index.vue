<template>
  <div>
    <header-con type="home"></header-con>
    <div class="content-in">
      <div class="con-header">
        <div class="con-header-title">碎言碎语</div>
        <div>奔忙中，你来我往，遇见的都是缘分。茫茫人海，一生当中的擦肩相遇少之可怜，更何况相识与相知。</div>
      </div>
      <div class="con-list">
        <ul>
          <li>
            <div class="con-list-left">
              <div>
                <img src="http://www.lmlblog.com/shuo/uploads/allimg/160708/1-160FQ63G5-53.jpg" alt="">
              </div>
              <div class="con-list-desp">
                <p>人这一生要走很长很长的路，沿途必定要经过很多风景，其中当然不乏让你怦然心动的美丽风景。但你要清楚，不是所有你喜欢的风景都能属于你。有些风景，你只能是路过，只能是欣赏，然后，要毅然决然地继续向前，走自己的路。</p>
                <p class="con-list-desp-more">阅读更多>></p>
              </div>
            </div>

            <div class="con-list-date">2016-10-06</div>
          </li>
        </ul>
      </div>
      <div v-on:enlarge-text="enlarge">{{fullName}}</div>
    </div>
  </div>
</template>

<script>
import HeaderCon from '../../components/header/header';
export default {
  name: 'Index',
  props: {
    msg: String
  },
  data(){
    return {
      firstName: 'Foo',
      lastName: 'Odd'
    }
  },
  components:{
    HeaderCon
  },
  computed:{
    fullName: {
      get: function(){
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue){
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1] + 'lastNaem'
      }
    }
  },
  created(){
    this.fullName = 'zhng san'
  },
  methods:{
    enlarge(e){
      console.log(1111111111111)
    }
  }
}
</script>

<style scoped>
  .content-in{
    max-width: 1000px;
    margin: 0 auto;
    color: #fff;
  }
  .con-header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    align-items: center;
    height: 40px;
    margin: 20px auto;
    font-size: 14px;
  }
  .con-header-title{
    background: #8BBF5D;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
  }
  .con-list-left{
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 730px;
    padding: 20px;
    border-radius: 10px;
  }
  .con-list ul li{
    display: flex;
    justify-content: space-between;
    color:#5d5d5d;
    margin-bottom: 20px;
  }
  .con-list ul img{
    width: 280px;
    height: auto;
  }
  .con-list-desp{
    width: 380px;
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
  position: relative;
  }
  .con-list-desp::before{
    content: "";
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 0 20px 22px;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    top: 0px;
    right: -40px;
  }
  .con-list-desp-more{
    width: 96px;
    height: 40px;
    background: #4CAF50;
    color:#fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .con-list-date{
    margin-right: 100px;
    background: #5EA51B;
    border-radius: 0 50px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 13px;
    padding: 0 20px;
    margin-top: 20px;
  }
</style>
