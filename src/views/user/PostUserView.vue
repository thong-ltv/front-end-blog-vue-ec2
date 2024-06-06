<template>
    <div class="post-view-user">
      <h1 v-html="cleanHtmlTitle" v-if="itemIdTitle"></h1>
      <img :src="dataItemByIdFile" alt="">
      <div v-html="cleanHtmlContent" v-if="itemIdContent" class="content"></div>

      <!-- <div class="another-post">
        <h3>Another posts</h3>
        <ul>
          <li>
            <a href="http://"><img src="../../../public/image/chanDung.jpg" alt=""></a>
            <p>Post 1</p>
          </li>
          <li>
            <a href="http://"><img src="../../../public/image/chanDung.jpg" alt=""></a>
            <p>Post 1</p>
          </li>
          <li>
            <a href="http://"><img src="../../../public/image/chanDung.jpg" alt=""></a>
            <p>Post 1</p>
          </li>
          <li>
            <a href="http://"><img src="../../../public/image/chanDung.jpg" alt=""></a>
            <p>Post 1</p>
          </li>
          <li>
            <a href="http://"><img src="../../../public/image/chanDung.jpg" alt=""></a>
            <p>Post 1</p>
          </li>
          <li>
            <a href="http://"><img src="../../../public/image/chanDung.jpg" alt=""></a>
            <p>Post 1</p>
          </li>
        </ul>
      </div>

      <div class="pagination">
        <ul>
          <li><</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>...</li>
          <li>9</li>
          <li>10</li>
          <li>></li>
        </ul>
      </div> -->

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

// import DOMPurify from 'dompurify'
// import { useHead } from '@vueuse/head'

import DOMPurify from 'dompurify';
import { useHead } from '@vueuse/head'; 
import { ref, onMounted, watch } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router'

export default {
  
  setup() {

    const route = useRoute();

    const currentUrl = window.location.href;

    const url = currentUrl;
    const parts = url.split('/');
    const idPost = parts[5];

    // const idPost = '665d11c5786ef0332cf3dc01';

    const titleValue = ref('');

    onMounted(() => {
      axios.get(`http://44.198.78.243:3000/api/post/${idPost}`)
        .then(response => {
          titleValue.value = response.data.title;
          console.log(idPost);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    });

    watch(titleValue, (newTitle) => {
      useHead({
        title: newTitle,
        meta: [
          {
            name: 'description',
          }
        ]
      });
      });

    return {};
    },

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
    },
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
    },
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

:deep(.post-view-user .content p img) {
  width: 3rem;
  height: 3rem;
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

.post-view-user .another-post {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.post-view-user .another-post h3 {
  display: flex;
}

.post-view-user .another-post ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0rem;
}

.post-view-user .another-post ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-view-user .another-post ul li img {
  width: 20rem;
  height: 15rem;
  object-fit: cover;
  margin-bottom: .5rem;
}

.post-view-user .another-post ul li p {
  margin: 1rem;
}

.post-view-user .pagination {
  margin-top: .5rem;
  margin-bottom: 2rem;
}

.post-view-user .pagination ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.post-view-user .pagination ul li {
  padding: 1rem;
  border: 1px solid #333;
}

.post-view-user .pagination ul li:hover {
  cursor: pointer;
}

@media (max-width: 1272px) {
  .post-view-user {
    width: 100%;
    height: auto;
    text-align: justify;
  } 

  .post-view-user .another-post ul {
    grid-template-columns: repeat(3, 1fr);
  }

  .post-view-user .another-post ul li img {
    width: 15rem;
    height: 12rem;
  }
}

@media (max-width: 1024px) {
  .post-view-user .another-post ul {
    grid-template-columns: repeat(2, 1fr);
  }

  .post-view-user .another-post ul li img {
    width: 18rem;
    height: 11rem;
  }
}

@media (max-width: 768px) {
  .post-view-user .another-post ul {
    grid-template-columns: repeat(2, 1fr);
  }

  .post-view-user .another-post ul li img {
    width: 13rem;
    height: 10rem;
    object-fit: cover;
    margin-bottom: .5rem;
  }

  .post-view-user .pagination ul li {
    font-size: 1rem;
    padding: .5rem;
  }
}

@media (max-width: 480px) {
  .post-view-user .another-post ul {
    grid-template-columns: repeat(2, 1fr);
  }

  .post-view-user .another-post ul li img {
    width: 10rem;
    height: 8rem;
    object-fit: cover;
    margin-bottom: .5rem;
  }
}

</style>