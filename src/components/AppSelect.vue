<script>
    import axios from 'axios';
import { store } from '../store';
    
    export default{
        name: "AppSelect",
        
        data (){
            return{
                store,
                selectedType: "",
                counterCard: 0
            }
        },
        methods:{
            filterByType(){
                console.log("hai selezionato", this.selectedType)
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.selectedType}`).then(r=>{
                    this.store.cards = r.data.data
                    this.counterCard = this.store.cards.length
                })
                // store.cards = []
                
            }
        }
       
    }
    

</script>

<template>
    <select @change="filterByType" v-model="selectedType">
        <option v-for="type in this.store.types"> {{ type.archetype_name }}</option>
    </select>

</template>

<style scoped></style>