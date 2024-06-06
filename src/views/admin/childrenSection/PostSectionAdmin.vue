<script setup>
  import Editor from '@tinymce/tinymce-vue'
</script>

<template>
<form @submit.prevent="submitData">
  <main id="sample">
    <input type="text" placeholder="Tiêu đề của bài viết..." class="title-post-admin" v-model="title" required>
    <label for="">Chọn ảnh đại diện cho tin tức:</label>
    <input type="file" name="file" id="" ref="inputFile" required>
    <Editor
      api-key="muq3ewk9282l1n7wrp7xu3wmreb9h9xyekl5ep63f1m7sgou"
      :init="{
        selector: 'textarea',
        toolbar_mode: 'sliding',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        content_css: '/src/assets/tinymce.css',
      }"
      v-model="content"
    />
  </main>
  <button class="btn-send-admin-content" type="submit">Gửi</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            title: '',
            content: '',
            file: null
        }
    },
    methods: {

        // handleFileUpload(event) {
        //   this.file = event.target.file[0];
        //   console.log("thong");
        // },

        submitData() {
         
            this.file = this.$refs.inputFile.files[0];
            
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('content', this.content);
            formData.append('file', this.file);

            axios.post('http://44.198.78.243:3000/api/post', formData, {
                headers: {
                  'Content-Type' : 'multipart/form-data'
                }
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
    margin-top: 4rem;
  }

  #sample input {
    margin-bottom: 1rem;
    width: 40rem;
    font-size: 1rem;
  }

  .file {
    display: flex;
  }

  .file label {
    flex: 1 1 30%;
    margin-left: 3rem;
  }

  .file input {
    flex: 1 1 70%;
  }

  .btn-send-admin-content {
    margin-top: 15px;
    margin-left: 45px;
    font-size: 20px;
  }
}
</style>
