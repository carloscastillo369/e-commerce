<template>
    <div>
        <Banner :curso="curso"/>
        <FormMobile/>
        <h1>{{curso.nombre}}</h1>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import FormMobile from "@/components/FormMobile.vue"
import { mapActions, mapState } from "vuex";

export default {
    name:'Curso',
    components: {
        Banner,
        FormMobile
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getCursoAction']),
    },
    computed: {
        ...mapState(['curso'])
    },
    created(){
        this.getCursoAction(this.id);
    }
}
</script>

<style>

</style>