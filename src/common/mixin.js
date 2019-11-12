import { debounce } from './utils'
export const itemListenerMixin = {
    mounted() {
        let newRefresh = debounce(this.$refs.scroll.refresh, 500)
        this.itemImgListener = () => {
            newRegresh(20, 30, 'abc');
        }
        this.$bus.$on("itemImageLoad", () => {
            newRefresh();
        });
    }
}