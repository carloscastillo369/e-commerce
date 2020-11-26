<template>
    <div class="my-5">
        <h4>Carrito de compras</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody id="items">
                
            </tbody>
            <tfoot>
            <tr id="footer-carrito">
                
                
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Carrito'
}
</script>

<style>

</style>