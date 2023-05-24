<script>
    import { store } from '../store';
    
    export default{
        name: "AppSelect",
        
        data (){
            return{
                store
            }
        }
    }
    

</script>

<template>
    <select>
        <option v-for="card in store.cards">{{ card.archetype }}</option>
    </select>

</template>

<style scoped></style>