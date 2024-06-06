<template>
    <div class="main-view">
        <div class="img-introduce-main-view">
            <!-- <div class="chatbox">
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
                        </div>

                        <input type="text" name="" id="" class="input-text-chat">
                        <button type="submit" class="btn-chat-send">Send</button>
                    </div>
            </div> -->
            <img src="/image/chanDung.jpg" alt="" srcset="">
        </div>
        <div class="right-main-view">
            <article class="introduce">
                <h1>Hello. My name is Thong!</h1>
                <p>I am a Software Developer!</p>
            </article>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
    setup() {
        useHead({
            title: 'Home'
        });
    },

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
/* .main-view {
    width: 75%;
    float: left;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 50% 45%;
}

.main-view .img-introduce-main-view {
    height: 50rem;
    overflow: hidden;
}

.main-view .img-introduce-main-view img {
    width: 100%;
    height: auto;
}

.main-view .right-main-view {
    height: 50rem;
}

.main-view .right-main-view .introduce {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50rem;        
}

.main-view .right-main-view .introduce h1 {
    font-size: 4rem;
}

.main-view .right-main-view .introduce p {
    font-size: 2rem;
} */

/* .main-view .img-introduce-main-view {
    position: relative;
    width: 40%;
    height: 40rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    float: left;
        
}

.img-introduce-main-view::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background-color: #d3ad7f80;
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
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: relative;
    z-index: 1;
}

.right-main-view {
    width: 100%;
}

.right-main-view .introduce {
    margin-left: -10rem;
    margin-top: 3rem;
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
    transition: opacity 0.3s; 
}

.main-view .img-introduce-main-view .chatbox img:hover {
    opacity: 0.3;       
}

.main-view .img-introduce-main-view .chatbox .hover-text {

  transform: translate(-50%, -50%); 
  font-size: 15px;     
  opacity: 0;          
  transition: opacity 0.3s; 
  pointer-events: none; 
}

.main-view .img-introduce-main-view .chatbox:hover .hover-text {
    opacity: 1;        
}

.main-view .img-introduce-main-view .chatbox .input-chat {
    width: 20rem;
    height: 25rem;
    border: .1rem solid #131313;
    background-color: aliceblue;
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
    background-color: #0b93f6;  
}

.other {
    align-self: flex-start;
    background-color: #e5e5ea; 
    color: black;
} */

/* @media (max-width: 1272px) {
    .main-view {
        width: 100%;
    }
}

@media (max-width: 1000px) {
    .main-view .img-introduce-main-view {
        width: 100%;
        float: none;
    }

    .right-main-view {
        width: 100%;
        float: left;
    }

    .right-main-view .introduce {
        margin-left: 25rem;
        margin-top: 15rem;
    }

    .right-main-view .introduce h1 {
        font-size: 3rem;
    }

    .right-main-view .introduce p {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {

}

@media (max-width: 480px) {


} */
@media (min-width: 1025px) {
    .main-view {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 3rem;
        float: left;
        width: 75%;
        border-right: 1px solid #333;
    }

    .main-view .img-introduce-main-view {
        flex: 1 1 45%;
        justify-content: center;
        align-items: center;
    }

    .main-view .img-introduce-main-view img {
        height: 40rem;
        width: 100%;
    }

    .main-view .right-main-view {
        flex: 1 1 45%;
    }

    .main-view .right-main-view .introduce {
        
    }

    .main-view .right-main-view .introduce h1 {
       text-align: center;
       margin-top: 10rem;
       font-size: 3rem;
    }

    .main-view .right-main-view .introduce p {
      text-align: center;
      font-size: 2rem;
    }
}

@media (max-width: 1024px) {
    .main-view {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 3rem;
    }

    .main-view .img-introduce-main-view {
        flex: 1 1 100%;
        justify-content: center;
        align-items: center;
    }

    .main-view .img-introduce-main-view img {
        height: 40rem;
        width: 100%;
    }

    .main-view .right-main-view {
        flex: 1 1 100%;
    }

    .main-view .right-main-view .introduce {
        
    }

    .main-view .right-main-view .introduce h1 {
       text-align: center;
    }

    .main-view .right-main-view .introduce p {
      text-align: center;
    }
}

@media (max-width: 768px) {
    .main-view {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 3rem;
    }

    .main-view .img-introduce-main-view {
        flex: 1 1 100%;
        justify-content: center;
        align-items: center;
    }

    .main-view .img-introduce-main-view img {
        height: 30rem;
        width: 100%;
    }

    .main-view .right-main-view {
        flex: 1 1 100%;
    }

    .main-view .right-main-view .introduce {
        
    }

    .main-view .right-main-view .introduce h1 {
       text-align: center;
    }

    .main-view .right-main-view .introduce p {
      text-align: center;
    }

}

</style>