<template>
  <div class="add">
      <mt-field label="标题" placeholder="请输入标题" v-model="form.title"></mt-field>
      <mt-field label="提醒日" placeholder="请输入提醒日" type="date" v-model="form.time"></mt-field>
      <mt-field label="详情" placeholder="填写记录详细内容" type="textarea" rows="4" v-model="form.content"></mt-field>
      <div class="button-group">
        <div class="left" @click="$router.back()">取 消</div>
        <div class="right" @click="addNote">确 定</div>
      </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'add',
  data () {
    return {
      form: {
        title: '',
        time: '',
        content: ''
      }
    }
  },
  methods: {
    ...mapMutations(['ADD_NOTE']),
    addNote () {
      this.ADD_NOTE(this.form)
      this.$toast({
        message: '新增成功',
        iconClass: 'icon-success'
      })
      this.$router.push({name: 'list'})
    }
  }
}
</script>
<style lang="scss" scoped>
.button-group {
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  div {
    display: inline-block;
    flex: 1;
    padding: 10px;
    &.left {
      background: #f8f8f8;
      color: #656b79;
    }
    &.right {
      background: #26a2ff;
      color: #fff;
    }
  }
}
</style>

