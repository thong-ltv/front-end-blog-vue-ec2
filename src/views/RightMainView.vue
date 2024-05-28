<template>
    <div class="rightMainView" id="right-main-view-id" v-if="!($route.path.includes('/admin') || $route.path.includes('/about') || $route.path.includes('/contact'))">
        <h2>Bài viết mới nhất</h2>
        <ul>
            <li v-for="(item, index) in lastThreeItemValues" :key="index" >
                <a :href="`/user/posts/${item._id}`" v-html="item.title"></a>
            </li>
        </ul>
    </div>
    <div class="clear"></div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            lastThreeItemValues: []
        }
    },

    computed: {
        dataItems() {
            return this.$store.getters['dataItems'];
        }, 

        lastThreeItems() {
        // Lấy chiều dài của mảng
        const len = this.items.length;
        // Trả về 3 phần tử cuối cùng nhưng loại bỏ phần tử cuối cùng
        return this.items.slice(Math.max(len - 6, 0), len - 1);
        },
    },

    watch: {
        dataItems(newVal) {
            this.items = newVal;
        },

        lastThreeItems(newVal) {
            this.lastThreeItemValues = newVal;
        }
    },

    mounted() {
        this.$store.dispatch('fetchData')
        // .then(() => {
        //     this.$nextTick(() => {
        //         this.items = this.$store.state.data.data;
        //         console.log(this.items); // Kiểm tra lại dữ liệu đã cập nhật
        //     });
        // })
        .catch(error => {
            console.error('Failded to fetch Data', error);
        });
    }
}
</script>

<style scoped>
.rightMainView {
   width: 24%;
   float: left;
   margin-top: 4rem;
}

.clear {
    clear: both;
}

.rightMainView {
        height: 600px;
        margin-left: 3px;
    }

.rightMainView ul li {
        font-size: 18px;
        padding: 5px;
    }

.rightMainView ul li a {
        text-decoration: none;
        color: #000;
    }

.rightMainView ul li:hover {
    cursor: pointer;
    color: #d3ad7f;
}

.article-thumbnail img {
        width: 30px;
        height: 30px;
        float: left;
        margin-right: 5px;
}

@media (max-width: 1272px) {
    .rightMainView {
        width: 100%;
        margin-top: 1rem;
    }
}

</style>