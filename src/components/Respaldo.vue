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
        height: 150px;
        margin: 0 auto;
        padding: 10px;
        padding-top: 40px;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            height: 180px;
            padding: 48px 85px;
        }
    }
</style>