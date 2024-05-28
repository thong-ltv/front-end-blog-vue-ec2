<template>
  <header>
      <div class="nav-container" >
        <div class="nav-logo">
          <router-link to="/" class="nav-logo-link"><h1>Nguyễn Văn Thông - Full Stack Developer</h1></router-link>
        </div>
        
        <div class="nav-menu">
          <ul class="nav-links">
          <li><router-link to="/" class="nav-link-router">Trang chủ</router-link></li>
          <li><a :href="`/user/posts/${latestPostId}`" class="nav-link-router">Bài viết</a></li>
          <li><router-link to="/user/about" class="nav-link-router">Tôi là ai?</router-link></li>
          <li><router-link to="/user/contact" class="nav-link-router">Liên hệ</router-link></li>
          </ul>
        </div>

        <div class="nav-menu-btn fa-solid fa-bars" id="menu-btn" v-on:click="displayNavMenu"></div>
      </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      items: [],
      latestPostId: ''
    };
  },

  computed: {
    getLatestPostId () {
      return this.$store.getters['getLatestPostId'];
    }
  },

  watch: {
    getLatestPostId(newVal) {
      this.latestPostId = newVal;
    }
  },

  mounted () {
    this.$store.dispatch('fetchLatestPostId')
    .catch(error => {
            console.error('Failded to fetch Data', error);
    });
  },

  methods: {
    displayNavMenu () {
      let navMenu = document.querySelector('.nav-menu');

      navMenu.classList.toggle('active');

    }
  },
}

</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #eee;
  position: fixed;
  top: 0; left: 10.3%; right: 10.3%;
  z-index: 1000;
}

.nav-container .nav-logo .nav-logo-link {
   text-decoration: none;
}

.nav-container .nav-logo h1 {
  color: #eee;  
  margin-left: 1rem;
}

.nav-container .nav-logo h1:hover {
  color: #d3ad7f;
}

.nav-container .nav-menu {
  display: flex;
  justify-content: flex-end;
}

.nav-container .nav-menu ul {
  display: flex;
}

.nav-container .nav-menu ul li {
  list-style: none;
  margin-top: 1rem;
}

.nav-container .nav-menu ul li a {
  color: #eee;
  text-decoration: none;
  padding: 1rem;
}

.nav-container .nav-menu ul li a:hover {
  color: #d3ad7f;
}

.nav-container .nav-menu-btn {
  display: flex;
  font-size: 1.5rem;
  margin: auto;
  display: none;
}
/* media queries */

@media (max-width: 1272px) {

    #menu-btn {
      display: inline-block;
      margin-right: 1rem;
    }

    .nav-container .nav-menu {
      position: absolute;
      top: 100%; right: -100%;
      background: #333;
      width: 20rem;
      height: calc(100vh - 25rem);
    }

    .nav-container .nav-menu.active {
      right: 0;
    }

    .nav-container .nav-menu ul {
      display: block;
      margin-right: 65%;
      margin-left: -10%;
    }

    .nav-container .nav-menu ul li {
    }

    .nav-container .nav-menu ul li a:hover {
      cursor: pointer;
    }
}

@media (max-width: 768px) {

}

@media (max-width: 768px) {

}

</style>