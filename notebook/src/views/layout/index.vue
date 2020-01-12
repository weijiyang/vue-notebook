<template>
    <div>
        <mt-header fixed title="记事本">
            <router-link to="list1" slot="left">
                <mt-button icon="back" v-show="$route.name === 'add'">返回</mt-button>
            </router-link>
            <mt-button slot="right" @click.native="deleteAllNotes" v-show="$route.name === 'list' && noteList.length">
                <img class="nav-right" src="@/assets/images/delete.svg" alt="delete_error">
            </mt-button>
        </mt-header>
        <transition :name="transitionName">
            <router-view class="content" :key="$route.name"></router-view>
        </transition>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'entry',
    data () {
        return {
            transitionName: ''
        }
    },
    computed: mapState(['noteList']),
    methods: {
        ...mapMutations(['DELETE_ALL']),
        deleteAllNotes () {
            this.$messagebox.confirm('确定要删除全部记录嘛？').then(() => this.DELETE_ALL())
        }
    },
    watch: {
        $route(to, from) {
            if (to.meta.index > from.meta.index) {
                this.transitionName = 'slide-left';
            } else {
                this.transitionName = 'slide-right';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-right {
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
}
.content {
    position: absolute;
    box-sizing: border-box;
    padding-top: 0.54rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all .35s ease;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
