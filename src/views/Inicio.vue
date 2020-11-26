<template>
    <div>
        <Banner/>
        <FormMobile/>
        <Respaldo/>
        <ListCursos/>
        <Comunidad/>
        <Beneficios/>
        <FormPostula/>
        <Footer/>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import FormMobile from "@/components/FormMobile.vue"
import Respaldo from "@/components/Respaldo.vue"
import ListCursos from "@/components/ListCursos.vue"
import Comunidad from "@/components/Comunidad.vue"
import Beneficios from "@/components/Beneficios.vue"
import FormPostula from "@/components/FormPostula.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Inicio',
    components: {
        Banner,
        FormMobile,
        Respaldo,
        ListCursos,
        Comunidad,
        Beneficios,
        FormPostula,
        Footer
    }

}
</script>

<style scoped>
    div {
        background: #F2F3F5;
        width: 100vw;
    }

    Footer {
        background: yellow;
    }
</style>