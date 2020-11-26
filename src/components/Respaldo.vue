<template>
    <div class="contain">
        <img src="./../../public/img/respaldo.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Respaldo'
}
</script>

<style scoped>
    .contain {
        width: 375px;
        height: 165px;
        margin: 0 auto;
        padding: 10px;
        padding-top: 40px;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            height: 241px;
            padding: 85px;
            padding-top: 48px;
        }
    }
</style>