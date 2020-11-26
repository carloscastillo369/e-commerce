<template>
    <div id="formulario" class="contain">
        <h3>Postula y obtén un 10% de descuento en el programa</h3>
        <form>
            <b-form-input type="text" placeholder="NOMBRE"></b-form-input>
            <b-form-input type="number" placeholder="CELULAR"></b-form-input>
            <b-form-input type="email" placeholder="CORREO ELECTRÓNICO"></b-form-input>
            <b-form-input type="text" placeholder="PROGRAMA"></b-form-input>
            <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
            >
            <p>Acepto las Políticas de privacidad</p> 
            </b-form-checkbox>
            
            <b-button type="submit">Quiero Postular</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormPostula'
}
</script>

<style scoped>
    .contain {
        width: 375px;
        height: 530px;
        margin: 0 auto;
        background: #ffffff;
        position: relative;
        z-index: 50;
    }

    h3 {
        color:#000425;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-top: 65px;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    input {
        width: 355px;
        height: 50px;
        border-radius: 5px;
        margin-bottom: 15px;
        padding-left: 10px;
        border: unset;
        border: 1px solid #8B9099;
    }

    input::placeholder {
            font-size: 12px;
        }

    button {
        width: 355px;
        height: 50px;
        margin-top: 30px;
        background: #5640FF;
        font-size: 14px;
        font-weight: bold;
        color: #FFFFFF;
    }

    p {
            font-size: 12px;
        }

    @media screen and (min-device-width:1366px){
        .contain {
            display: none;
            position: absolute;
            margin-top: 70px;
            margin-right: 66px;
            width: 240px;
            height: 450px;
        }

        h3 {
            padding: 0 10px;
            padding-top: 15px;
        }

        input {
            width: 216px;
            height: 50px;
            margin-bottom: 15px;
        }

        button {
            width: 216px;
            margin-top: 20px;
        }
    }
</style>