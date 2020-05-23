<template>
  <div class="gift">
    <div>
      <i :class="[icon1, icon2]" :style="{'color': colorArr[this.type]}" aria-hidden="true"></i>
    </div>
    <div>
      <span class="bold-text">{{keyword}}</span><br>
      <span>{{content}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['keyword', 'content', 'icon', 'type'],
  data () {
    return {
      colorArr: ['#ff9510', '#cc2127'],
      icon1: 'fa',
      icon2: this.icon
    }
  }
}
</script>
<style scoped>

.gift {
  position: relative;
  display: flex;
  margin-bottom: 20px;
}
.bold-text {
  font-weight: 700;
  text-transform: uppercase;
}
.fa {
  float: left;
  padding-right: 5px;
  width: 60px;
  height: 60px;
  font-size: 50px;
  text-align: center;
  overflow: hidden;
}
</style>
