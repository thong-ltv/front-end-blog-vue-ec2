<template>
    <footer class="blog-footer">
        <div class="footer-content">
            <div class="footer-column">
                <h3>About Me</h3>
                <p>Là một lập trình viên full-stack luôn nổ lực phấn đấu và yêu đời!!!</p>
                <a href="http://localhost:5173/" target="_blank"><img src="/image/facebook.png" alt="Loading..." srcset=""></a>
                <a href="https://www.youtube.com/channel/UCwGYfNwPAdHxG3vJSA22SsQ" target="_blank"><img src="/image/youtube.png" alt="Loading..." srcset=""></a>
                <a href="https://www.linkedin.com/in/thongnguyen123" target="_blank"><img src="/image/linkedin.png" alt="Loading..." srcset=""></a>
            </div>
            <div class="footer-column">
                <h3>Latest Posts</h3>
                <ul>
                    <li v-for="(item, index) in lastThreeItemValues" :key="index" >
                        <a :href="`/user/posts/${item._id}`" v-html="item.title"></a>
                    </li>
                </ul>


            </div>
            <div class="footer-column">
                <h3>NHẬN THÔNG BÁO</h3>
                <h4>Đăng kí nhận bài viết mới nhất qua Email</h4>
                <input type="email" placeholder="Vui lòng nhập email của bạn nhé!!!" 
                v-model="email" 
                required 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                title="Vui lòng nhập một địa chỉ email hợp lệ. Ví dụ: example@example.com"
                id="input-email"
                onfocus= "this.value=''"
            >
                <button @click="submitForm">ĐĂNG KÍ</button>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Blog Thông Nguyễn. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            items: [],
            lastThreeItemValues: [],
            email: ''
        }
    },

    computed: {
        dataItems() {
            return this.$store.getters['dataItems'];
        }, 

        lastThreeItems() {
        // Lấy chiều dài của mảng
        const len = this.items.length;
        const itemResult = [];
        if(this.items[len - 1]) {
           itemResult.push(this.items[len - 1]); 
        }
        if(this.items[len - 2]) {
           itemResult.push(this.items[len - 2]); 
        }
        if(this.items[len - 3]) {
           itemResult.push(this.items[len - 3]); 
        }
        return itemResult;
        // // Trả về 3 phần tử cuối cùng nhưng loại bỏ phần tử cuối cùng
        // return this.items.slice(Math.max(len - 3, 0), len);
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
        .catch(error => {
            console.error('Failded to fetch Data', error);
        });
    },

    methods: {
        submitForm() {
            axios.post('http://localhost:3000/api/mail/sendMail', {
                email: this.email,
            })
            .then(response => {
                alert("Đăng kí nhận email thành công");
                document.getElementById('input-email').value = '';
            })
            .catch(error => {
                alert(error.response.data.message);
                document.getElementById('input-email').classList.add('input-error');
            });
        }
    }
}
</script>

<style scoped>
.blog-footer {
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-column {
    flex: 0 0 calc(33.33% - 20px); /* 33.33% width for each column with margin */
    margin-bottom: 20px;
}

.footer-column img {
    width: 40px;
    height: 40px;
    margin: 5px;
}

.footer-column h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer-column p {
    font-size: 14px;
    margin-bottom: 10px;
}

.footer-column ul {
    list-style-type: none;
    padding: 0;
}

.footer-column ul li {
    margin-bottom: 5px;
}

.footer-column ul li a {
    color: #fff;
    text-decoration: none;
}

.footer-column input {
    width: 60%;
    height: 2rem;
    margin-right: .5rem;
}

.footer-column button {
    margin-top: 15px;
    width: 100px;
    height: 2.3rem;
    background-color: red;
    font-weight: bold;
    border: none;
}

.footer-bottom {
    margin-top: 20px;
    text-align: center;
}

.footer-bottom p {
    font-size: 14px;
}

.input-error {
    border: 2px solid red;
}

@media (max-width: 1272px) {
    .footer-content {
        display: block;
        text-align: center;
    }

    .footer-content .footer-column {
        margin-bottom: 3rem;
    }

    .footer-content .footer-column inpput {
       width: 20%;
    }
}
</style>