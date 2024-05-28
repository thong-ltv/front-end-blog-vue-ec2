<template>
    <div class="post-view-user">
      <h1 v-html="cleanHtmlTitle" v-if="itemIdTitle"></h1>
      <div v-html="cleanHtmlContent" v-if="itemIdContent"></div>
    </div>
</template>

<script>

import DOMPurify from 'dompurify'

export default {
  data() {
    return {
      items: [],
      postId: null,
      itemIdContent: "",
      itemIdTitle: ""
    }
  }, 

  computed: {
    dataItems() {
      return this.$store.getters['dataItems'];
    }, 

    // lastItem() {
    //   // Kiểm tra nếu mảng không trống trước khi truy cập phần tử cuối cùng
    //   if (this.dataItems.length > 0) {
    //     return this.dataItems[this.dataItems.length - 1];
    //   }
    //   return null;  // Trả về null hoặc một giá trị mặc định nếu mảng trống
    // },

    dataItemById() {
      return this.$store.getters['dataItemById'];
    }, 

    dataItemByIdTitle() {
      return this.$store.getters['dataItemByIdTitle'];
    },

    //xử lý an toàn đối với dữ liệu đưa vào v-html
    cleanHtmlTitle() {
      return DOMPurify.sanitize(this.itemIdTitle);
    },

    cleanHtmlContent() {
      return DOMPurify.sanitize(this.itemIdContent);
    }
  }, 

  mounted() {
    this.postId = this.$route.params.id;

    this.getItemById(this.postId);

    this.getItemByIdTitle(this.postId);
  },

  watch: {
    dataItems(newVal) {
      this.items = newVal;
    },

    dataItemById(newVal) {
      this.itemIdContent = newVal;
    }, 

   dataItemByIdTitle(newVal) {
      this.itemIdTitle = newVal;
  }
    
  },

  methods: {
    getItemById(id) {
      this.$store.dispatch('fetchItemById', id);
    },

    getItemByIdTitle(id) {
      this.$store.dispatch('fetchItemByIdTitle', id);
    }
  },

}

</script>

<style scoped>
.post-view-user {
    width: 73%;
    height: auto;
    float: left;
    text-align: justify;
    margin-right: 2rem;
}

@media (max-width: 1272px) {
  .post-view-user {
    width: 100%;
    height: auto;
    text-align: justify;
}
}
</style>