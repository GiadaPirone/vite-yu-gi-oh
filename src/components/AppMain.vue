<script>
import { store } from '../store';
    export default{
        name: "AppMain",
        data() {
            return {
                store
            }
        }
    }
</script>


<template>
    <div class="conteinerCards">
        <div v-for="card in store.cards" class="card">
            <img :src="card.card_images[0].image_url" alt="">
            <p> {{ card.name}} </p> 
        </div>
    </div>
</template>

<style  scoped>
    .conteinerCards{
        background-color: white;
        min-height: 100vh;
        width: 80%;
        margin: 0 auto;    
        margin-top: 50px;

        display: flex;
        flex-wrap: wrap;

    }

    .card{
        width: calc(100% / 6);
        background-color: brown;
        
    }

    img{
        width: 80%;
    }
    

</style>