<template>
    <div class="main-view">
        <div class="img-introduce-main-view">
            <div class="chatbox">
                <img v-on:click="displayChatBox" src="/image/chatbox.png" alt="chatbox" srcset="">
                <span class="hover-text">Chat AI Bot!</span>
                    <div class="input-chat" v-if="isInputChat">
                        <div class="chat-container">
                            <div class="message other">Xin chào!</div>
                            <div class="message me">Chào bạn, tôi có thể giúp gì cho bạn?</div>
                            <div class="message other">Tôi cần thông tin về sản phẩm của bạn.</div>
                            <div class="message me">Sản phẩm của chúng tôi bao gồm...</div>
                            <div class="message me">Chào bạn, tôi có thể giúp gì cho bạn?</div>
                            <div class="message other">Tôi cần thông tin về sản phẩm của bạn.</div>
                            <div class="message me">Sản phẩm của chúng tôi bao gồm...</div>
                            <!-- Thêm tin nhắn mới tại đây -->
                        </div>

                    <input type="text" name="" id="" class="input-text-chat">
                    <button type="submit" class="btn-chat-send">Send</button>
                </div>
            </div>
            <img src="/image/chanDung.jpg" alt="" srcset="">
        </div>
        <div class="right-main-view">
            <!-- <article class="introduce">
                Tôi là Nguyễn Văn Thông, là một lập trình viên Full Stack Developer tại Trường Đại học Giao thông Vận tải Thành Phố HCM. 
                Ngành tôi học là Công nghệ thông tin tại Trường, tôi đang theo mảng website.
            </article>

            <article class="skill">
                <h3>Skill:</h3>
                <p>Front-end: Html, css, bootstrap, javascript, jqurey, react js, vue js</p>
                <p>Back-end: Node js, Express Js, Php. Laravel, Wordpress, Java, Spring, Python cơ bản</p>
                <p>Database: Mysql, Mongo DB</p>
            </article>

            <article class="experience">
                <h3>Kinh nghiệm làm việc:</h3>
                <p>Công ty thiết kế Web: Nina từ tháng 06/2023 - 12/2023</p>
                <p>Vị trí công việc: Sales Website</p>
                <p>Mô tả công việc: Tìm kiếm khách hàng, tư vấn cho khách hàng về cách thức tragn web hoạt động, hiệu quả của nó...</p>
                <br>
                <p>Công ty phần mềm: Alta Software từ tháng 09/2022 - 12/2022</p>
                <p>Vị trí công việc: Thực tập sinh backend PHP</p>
                <p>Mô tả công việc: Hoàn thành các tasks được giao</p>
            </article>

            <article class="interest">
                <h3>Sở thích:</h3>
                <p>Đá bóng, đọc sách, chơi game, code...</p>
            </article> -->

            <article class="introduce">
                <h1>Hello. My name is Thong!</h1>
                <p>I am a Software Developer!</p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isInputChat : false,
        };
    },

    methods: {
        displayChatBox() {
           this.isInputChat = !this.isInputChat;
        }
    }
}
</script>

<style scoped>
.main-view {
    width: 75%;
    float: left;
    margin-top: 4rem;
    display: flex;
    align-items: center;
}

.main-view .img-introduce-main-view {
    /* position: relative;
    width: 40%;
    float: left; */
    position: relative; /* Đặt đặt để đặt vị trí tương đối của nó so với vị trí ban đầu, ta có thể thay đổi top, bottom, right, left của nó để dịch chuyển mà các ptu khác không thay đổi vị trí */
    width: 40%;  /* Đặt chiều rộng của container */
    height: 40rem; /* Đặt chiều cao của container */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Ngăn các thành phần vượt ra ngoài container */
        
}

.img-introduce-main-view::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background-color: #d3ad7f80; /* Màu của vòng tròn */
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: pulse 2s infinite ease-out;
    z-index: 0;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

.main-view .img-introduce-main-view img {
    /* width: 100%;
    height: 25rem;
    border-radius: 50%;
    position: relative;
    justify-content: center;
  align-items: center; */
  width: 80%;
  height: 80%;
  border-radius: 50%; /* Tạo viền tròn */
  position: relative;
  z-index: 1;
}

.right-main-view {
    width: 55%;
    margin-top: 2rem;
    margin-left: 1rem;
  
}

.right-main-view .introduce {
    margin-left: 10%;
}

.right-main-view .introduce h1 {
    font-size: 3rem;
}

.right-main-view .introduce p {
    font-size: 2rem;
}

.main-view .img-introduce-main-view .chatbox {
    position: absolute;
    top: 1rem; left: 0;
    z-index: 2;
}

.main-view .img-introduce-main-view .chatbox img {
    width: 5rem;
    height: 5rem;
    transition: opacity 0.3s; /* Hiệu ứng làm mờ nhẹ khi hover */
}

.main-view .img-introduce-main-view .chatbox img:hover {
    opacity: 0.3;        /* Làm mờ ảnh khi hover */
}

.main-view .img-introduce-main-view .chatbox .hover-text {

  transform: translate(-50%, -50%); /* Canh giữa văn bản */
  color: #131313;        /* Màu chữ */
  font-size: 15px;     /* Kích thước chữ */
  opacity: 0;          /* Làm cho văn bản không hiện lúc ban đầu */
  transition: opacity 0.3s; /* Hiệu ứng hiện ra khi hover */
  pointer-events: none; /* Đảm bảo chuột có thể 'click through' văn bản */
}

.main-view .img-introduce-main-view .chatbox:hover .hover-text {
    opacity: 1;          /* Hiển thị văn bản khi hover */
}

.main-view .img-introduce-main-view .chatbox .input-chat {
    width: 20rem;
    height: 25rem;
    border: .1rem solid #131313;
    background-color: aliceblue;
    /* opacity: 0; */
    position: absolute;
    top: 5rem; left: 4rem;
}

.main-view .img-introduce-main-view .chatbox .input-chat .input-text-chat {
    position: absolute;
    bottom: 0; left: 0;
    height: 2rem;
    width: 13.5rem;
}

.main-view .img-introduce-main-view .chatbox .input-chat .btn-chat-send {
    position: absolute;
    bottom: 0; right: 1rem;
    height: 2.4rem;
    width: 4rem;
    border: .1rem solid #131313;
    background-color: #d3ad7f;
}

.chat-container {
    width: 20rem;
    height: 20rem;
    border: 1px solid #ccc;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.message {
    padding: 5px 10px;
    border-radius: 20px;
    color: white;
    max-width: 80%;
}

.me {
    align-self: flex-end;
    background-color: #0b93f6;  /* Màu xanh */
}

.other {
    align-self: flex-start;
    background-color: #e5e5ea;  /* Màu xám */
    color: black;
}

@media (max-width: 1272px) {
    .main-view {
        width: 100%;
    }

    .main-view .img-introduce-main-view {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .main-view .img-introduce-main-view img {
        width: 80%;
        height: 80%;
    }

    .right-main-view {
        width: 100%;
    }
}
</style>