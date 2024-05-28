<script setup>
  import Editor from '@tinymce/tinymce-vue'
</script>

<template>
  <main id="sample">
    <input type="text" placeholder="Tiêu đề của bài viết..." class="title-post-admin" v-model="title">
    <Editor
      api-key="muq3ewk9282l1n7wrp7xu3wmreb9h9xyekl5ep63f1m7sgou"
      :init="{
        toolbar_mode: 'sliding',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }"
      v-model="content"
    />
  </main>
  <button @click="submitData" class="btn-send-admin-content">Gửi</button>

</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            title: '',
            content: '',
        }
    },
    methods: {
        submitData() {
            axios.post('http://localhost:3000/api/post', {
                content: this.content,
                title: this.title
            })
            .then(response => {
                console.log('data sent success');
            })
            .catch(error => {
                console.log("error: ", error);
            });
        }
    }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 75%;
  }

  .btn-send-admin-content {
    margin-top: 15px;
    margin-left: 45px;
    font-size: 20px;
  }
}
</style>