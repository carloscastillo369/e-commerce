<template>
    <div class="bg-mobile">
        <img src="./../../public/img/mobile-form.png" alt="">
        <FormPostula style="display:initial"/>
    </div>
</template>

<script>
import FormPostula from "@/components/FormPostula.vue"

export default {
    name: 'FormMobile',
    components: {
        FormPostula
    }

}
</script>

<style scoped>
    .bg-mobile {
        display: none;
    }

    @media screen and (min-device-width:1366px){
        .bg-mobile {
            display: initial;
            width: 1366px;
            height: 0px;
            position: sticky;
            z-index: 100;
            top: 60px;
            display: flex;
            justify-content: flex-end;
            padding-right: 100px;
        }

        img {
            width: 370px;
            height: 608px;
        }
    }
</style>