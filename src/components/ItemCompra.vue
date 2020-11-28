<template>
        <tr class="fila">
            <td><img :src="`/img/${item.imagen}.jpg`" alt=""></td>
            <td>{{item.nombre}}</td>
            <td>S/. {{item.precio}}</td>
            <td>
                <b-button variant="success">X</b-button>
            </td>
        </tr>
</template>

<script>

export default {
    name: 'ItemCompra',
    props: ['item']
}
</script>

<style scoped>
    img {
        width: 60px; 
        height: 50px;
    }

    th, td {
        vertical-align: middle;
    }

</style>