<template>
    <div class="contact-view-user">
        <h3>Nhấn vào đây để liên hệ với tôi qua gmail: thonglaptrinhvien@gmail.com</h3>
        <a class="btn-contact" href="https://mail.google.com/mail/?view=cm&fs=1&to=thonglaptrinhvien@gmail.com" target="_blank">Liên hệ</a>
    </div>
</template>

<script>
</script>

<style>
.contact-view-user {
    width: 100%;
    max-width: 600px; /* Điều chỉnh độ rộng tối đa của phần tử */
    margin: 0 auto; /* Canh giữa */
    padding: 20px;
    box-sizing: border-box;
    margin-top: 3rem;
    height: 40rem;
    justify-items: center;
    text-align: center;
}

.contact-view-user h3 {
    margin-top: 10rem;
}

.btn-contact {
    display: block;
    width: 100%;
    max-width: 200px; /* Điều chỉnh độ rộng tối đa của nút */
    margin: 10px auto;
    padding: 10px;
    text-align: center;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn-contact:hover {
    background-color: #0056b3;
}

@media screen and (max-width: 768px) {
    .contact-view-user {
        padding: 10px;
    }

    .contact-view-user h3 {
        font-size: 1rem;
    }

    .btn-contact {
        max-width: 150px;
        padding: 8px;
    }
}



</style>