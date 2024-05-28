<template>

    <div class="admin-view">
        <HeaderAdminView />
        <AsideAdminViewVue />
        <SectionAdminViewVue />
    </div>

</template>

<script>
import AsideAdminViewVue from './AsideAdminView.vue'
import HeaderAdminView from './HeaderAdminView.vue'
import SectionAdminViewVue from './SectionAdminView.vue'

export default {
    components: {HeaderAdminView, AsideAdminViewVue, SectionAdminViewVue}
}

</script>

<style scoped>
.admin-view {
    width: 100%;
    height: 600px;
}
</style>