<script >
    import AppHeader from './components/AppHeader.vue'
    import AppMain from './components/AppMain.vue'
    import AppSelect from './components/AppSelect.vue'

    import {store} from './store.js'
    import axios from 'axios'

    export default {
        components:{
            AppHeader,
            AppMain,
            AppSelect
        },
        data (){
            return{
                store
               
            }
        },
        mounted(){
            axios.get(this.store.urlApi).then(r=>{
                this.store.cards =  r.data.data;
                console.log(r.data.data)
            }).catch(err=>{
                console.error("qualcosa non va");
            });
            
        }
    }


    
</script>

<template>
    <header>
        <AppHeader />
    </header>

    <main >
        <AppSelect />
        <AppMain />
    </main>
</template>

<style lang="scss"  >
@use "./styles/generic.scss" as*;

</style>
