<template>
    <div class="detail">
        <mt-cell title="标题" :value="data.title"></mt-cell>
        <mt-cell title="提醒日" :value="data.time"></mt-cell>
        <mt-cell title="详情" :value="data.content"></mt-cell>
    </div>
</template>
<script>
export default {
  name: 'detail',
  props: ['data']
}
</script>
<style lang="scss" scoped>
.detail {
    width: 100%;
}
</style>

