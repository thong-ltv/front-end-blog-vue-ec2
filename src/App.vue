<template>
  <NavbarView />
  
  <router-view />

  <RightMainView />
  <FooterView />
</template>

<script>
import NavbarView from './views/NavbarView.vue';
import MainView from './views/MainView.vue';
import RightMainView from './views/RightMainView.vue';
import FooterView from './views/FooterView.vue';

    // document.addEventListener('copy', function(e) {
    //   e.preventDefault();
    //   alert('Không thể sao chép nội dung này!');
    // });
    document.addEventListener('cut', function(e) {
      e.preventDefault();
      alert('Không thể cắt nội dung này!');
    });
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault(); /* Ngăn menu chuột phải */
});

export default {
  name: 'App',
 
  components : { 
     NavbarView,
     MainView,
     RightMainView,
     FooterView
   },

}
</script>

<style scoped>
* {
    user-select: none;
    font-family: 'Roboto', sans-serif;
    margin: 0; padding: 0; /* loại bỏ các khoảng cách mặc định */
    box-sizing: border-box;  /* đặt chế độ tính kích thước của phần tử (bao gồm cả padding và border của ptu tổng thể sẽ không thay đổi khi ta thay đổi giá trị padding và border */
    outline: none; border: none; /* loại bỏ các đường viền mặc định và đường bao xung quanh */
    text-decoration: none;
    transition: .2s linear; /* áp dụng hiệu ứng chuyển đổi cho các tất cả các thuộc tính có thể chuyển đổi của ptu trong thời gian 0.2s với tốc độ đều linear  */
}

html {
    font-size: 62.5%; /* đặt lại font chữ: 62.5% của mặc định (16px), tương đương 10px; mà 1rem = 10px nên ta có thể dễ dàng thiết kế responsive hơn */
    overflow-x: hidden;  /* ẩn các ptu tràn ra ngoài theo chiều ngang, không cho người dùng cuộn ngang trang web */
    scroll-padding-top: 9rem; /* đặt khoảng cách đệm đầu trang khi cuộn tự động đến ptu cụ thể trên trang */
    scroll-behavior: smooth; /* đặt hành vi cuốn trang là phù hợp.Khi người dùng cuộn trang hoặc sử dụng các liên kết điều hướng đến 1 phần của cuộn trang */
}

/* tạo kiểu cho các thành phần của thanh cuộn */
html::-webkit-scrollbar {
    width: .8rem;   /* đặt kích thước của thanh cuộn là .8rem - không quá lớn */
}

/* track: phần nền mà thanh cuộn đó di chuyển */
html::-webkit-scrollbar-track {
    background: transparent; /* đặt phần nền là trong suốt để ít thể hiển rõ ràng, giúp cho thanh cuộn trông gọn gàng và ít nổi bật hơn trên trang web */
}

/* thumb: có thể click hoặc kéo để cuộn trang trong trình duyệt sử dụng webkit như Chrome hoặc safari */
html::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 5rem;
}

</style>