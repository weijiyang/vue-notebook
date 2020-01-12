import { Toast } from 'mint-ui'
const localName = 'vueNotes'
const getLocalData = function () {
    let data = JSON.parse(localStorage.getItem(localName))
    if (data && Array.isArray(data)) {
        return data
    } else {
        return []
    }
}
const setLocalData = function (arr) {
    if (Array.isArray(arr)) {
        localStorage.setItem(localName, JSON.stringify(arr))
    } else {
        Toast('请检查数据格式');
    }
}
export default {
    getLocalData, setLocalData
}