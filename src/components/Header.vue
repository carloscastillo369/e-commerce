<template>
    <div :class="['header', bgdark]">     
        <div class="contain">
            <div class="logo">
                <img src="./../../public/img/logo.png">
                <div class="logo-text">
                    <img src="./../../public/img/logo-nombre.png">
                    <img src="./../../public/img/logo-foot.png">
                </div>
            </div>

            <div>
                <b-dropdown id="dropdown-1" text="Carrito" class="m-md-2" right>
                    <template>
                        <Carrito/>
                    </template>
                </b-dropdown>
            </div>

            <div>
                <b-dropdown id="dropdown-2" text="Cursos" class="m-md-2" right>
                    <template>
                        <Cursos/>
                    </template>
                </b-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import Carrito from "@/components/Carrito.vue"
import Cursos from "@/components/Cursos.vue"

export default {
    name: 'Header',
    components: {
        Carrito,
        Cursos
    },
    props: {
        bgdark:String
    }
}
</script>

<style scoped>
    .header {
        width: 100vw;
        height: 80px;
        background: rgba(59, 0, 255, 0.5);
        position: fixed;
        z-index: 200    ;
    }

    .contain {
        width: 1366px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    .logo {
        display: flex;
        margin-left: 86px;
    }

    .logo-text {
        display: none;
    }


    @media screen and (min-device-width:1366px){
        .logo-text {
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            display: flex;
        }

        .bgdark {
            background: rgba(28,28,30,0.7);
        }
    }
</style>