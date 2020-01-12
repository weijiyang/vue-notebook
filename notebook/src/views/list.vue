<template>
  <div class="list">
    <div class="list-content" v-if="noteList.length" >
      <mt-cell-swipe v-for="item in noteList" :key="item.id" :title="item.title" :right="noteSetting(item.id)" @click.native="showDetail(item)"></mt-cell-swipe>
    </div>
    <div class="empty" v-else>
      <img src="@/assets/images/empty.svg" alt="empty_error">
      <div>记事本为空，点击下方按钮去添加吧~</div>
    </div>
    <mt-popup
      class="detailPopup"
      v-model="detailVisible"
      popup-transition="popup-fade"
      position="bottom">
      <detail-content :data="detailData"></detail-content>
    </mt-popup>
    <div class="add" @click="addNotes">
      <img src="@/assets/images/add.svg" alt="error">
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import DetailContent from './detail.vue'
const noteSetting = function (id) {
  return [
    {
      content: '删 除',
      style: { background: 'red', color: '#fff'},
      handler: () => {
        this.$messagebox({
            message: '确定要删除嘛？',
            showCancelButton: true,
            cancelButtonText: '取消'
          }).then(() => {
          this.DELETE_NOTE(id)
        })
      }
    }
  ]
}
export default {
  name: 'list',
  data () {
    return {
      noteSetting,
      addVisible: false,
      detailVisible: false,
      detailData: {}
    }
  },
  components: { DetailContent },
  computed: mapState(['noteList']),
  methods: {
    ...mapMutations(['GET_NOTE_LIST', 'SET_LOCALSTORAGE', 'DELETE_NOTE']),
    addNotes () {
      this.$router.push({name: 'add'})
    },
    showDetail (item) {
      this.detailVisible = true
      this.detailData = item
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  .empty {
    font-size: 0.2rem;
    text-align:center;
    line-height: 2rem;
  }
  .list-content {
    overflow: auto;
  }
  .add {
    position: fixed;
    bottom: 0.7rem;
    right: 0.7rem;
    width: 0.7rem;
    height: 0.7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detailPopup {
    width: 100%;
    text-align: left;
  }
}
</style>

