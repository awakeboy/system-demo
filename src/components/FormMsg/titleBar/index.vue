<template>
  <div>
    <div class="title">
      <div class="line" />
      <div class="titlename">{{ tit }}</div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tit: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
   .title{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
    color: #333;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 20px;
    margin-bottom: 20px;
    & .line{
        width: 4px;
        height: 16px;
        background-color: #3e9ffd;
        margin-right: 10px;
    }
   }
</style>
