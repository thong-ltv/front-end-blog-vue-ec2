<template>
    <div class="post-view-user">
      <h1 v-html="cleanHtmlTitle" v-if="itemIdTitle"></h1>
      <img :src="dataItemByIdFile" alt="">
      <div v-html="cleanHtmlContent" v-if="itemIdContent" class="content"></div>

      <!-- <div class="comment">
        <h1> 3 Comments</h1>
        <ul>
          <li>
            <h4>Mail:</h4>
            <p>Content</p>
          </li>
          <li>
            <h4>Mail:</h4>
            <p>Content</p>
          </li>
          <li>
            <h4>Mail:</h4>
            <p>Content</p>
          </li>
        </ul>
      </div>

      <div class="send-comment">
        <h3>Your comment:</h3>
        <form action="">
          <input type="email" name="" id="" placeholder="Enter your email!" required>
          <input type="text" name="" id="" placeholder="Enter your comment" required>
          <button type="submit" class="btn-send-comment">Send</button>
        </form>
      </div> -->

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
      itemIdTitle: "",
      itemIdFile: ""
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

    dataItemByIdFile() {
      return "http://44.198.78.243:3000/" + `${this.$store.getters['dataItemByIdFile'].replace(/\\/g, '/')}`;
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

    this.getItemByIdFile(this.postId);
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
   },

   dataItemByIdFile(newVal) {
      this.itemIdFile = newVal;
   }
    
  },

  methods: {
    getItemById(id) {
      this.$store.dispatch('fetchItemById', id);
    },

    getItemByIdTitle(id) {
      this.$store.dispatch('fetchItemByIdTitle', id);
    },

    getItemByIdFile(id) {
      this.$store.dispatch('fetchItemByIdFile', id);
    }
  },

}

</script>

<style scoped>
.post-view-user {
    width: 73%;
    height: auto;
    float: left;
    text-align: center;
    margin-right: 2rem;
}

.post-view-user h1 {
  margin-top: 2rem;
}

.post-view-user img {
  width: 70%;
  height: 20%;
}

.post-view-user .content {
  text-align: justify;
}

.post-view-user .comment {
  text-align: justify;
  margin-top: 2rem;
}

.post-view-user .comment ul {
  text-decoration: none;
}

.post-view-user .comment ul li {
  display: flex;
}

.post-view-user .comment ul li h4 {
  flex: 1 1 5%;
}

.post-view-user .comment ul li p {
  flex: 1 1 95%;
}

/* css send-comment */
.post-view-user .send-comment h3 {
  display: flex;
}

.post-view-user .send-comment form input {
  display: block;
  width: 30%;
  height: 2rem;
  margin: 1rem;
}

.post-view-user .send-comment form .btn-send-comment {
  display: block;
  width: 10%;
  height: 2rem;
  margin: 1rem;
  background: red;
  font-weight: bold;
  font-size: 1rem;
}

@media (max-width: 1272px) {
  .post-view-user {
    width: 100%;
    height: auto;
    text-align: justify;
}
}
</style>