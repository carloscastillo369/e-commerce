<template>
    <div class="banner">
        <img v-if="curso == undefined"  class="banner-img" src="./../../public/img/banner.png" alt="">
        <img v-else class="banner-img" :src="`/img/${curso.imagen}.png`" alt="">
        <div class="contain">
            <h1>!Explota todo tu potencial <br> tecnológico!</h1>
            <p>Con nuestro programas de especialización</p>
            <a href="#formulario"><b-icon icon="pencil"></b-icon><span>Inscríbite</span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        curso: {}
    }
}
</script>

<style scoped>
    .banner {
        width: 100vw;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-img {
        width: 100vw;
        height: 300px;
        position: relative;
    }

    .contain {
        width: 375px;
        height: 300px;
        margin: 0 auto;
        padding-top: 40px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffff;
        position: absolute;
        z-index: 10;
    }

    h1 {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        width: 130px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FF1558;
        position: fixed;
        top: 233px;
        left: 62.5%;
        z-index: 100;
    }

    span {
        margin-left: 10px;
    }

    @media screen and (min-device-width:1366px){
        .banner {
            height: 500px;
        }

        .banner-img {
            width: 100vw;
            height: 500px;
        }
        .contain {
            width: 1366px;
            padding-top: 204px;
            padding-left: 86px;
        }

        h1 {
            font-size: 54px;
            margin-bottom: 40px;
        }

        p {
            font-size: 20px;
        }

        a {
            display: none;
        }
    }
</style>