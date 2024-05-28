<template>
    <div class="main-view-user" ></div>
    <router-view></router-view>
</template>

<script>

</script>-

<style>
.main-view-user {
    width: 75%;
    float: left;
    margin-top: 4rem;
    border-right: 1rem solid #333;
    text-align: justify;
}

@media (max-width: 1272px) {
    .main-view-user {
    width: 100%;
    margin-top: 4rem;
}
}

</style>