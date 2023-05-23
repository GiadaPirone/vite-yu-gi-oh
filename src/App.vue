<script >
    import AppHeader from './components/AppHeader.vue'
    import AppMain from './components/AppMain.vue'

    import {store} from './store.js'
    import axios from 'axios'

    export default {
        components:{
            AppHeader,
            AppMain
        },
        data (){
            return{
                store
                ndgz
            }
        },
        mounted(){
            axios.get(this.store.urlApi).then(r=>{
                console.log("ricevuto:", r.data)

            }).catch(err=>{
                console.error("qualcosa non va");
            })
        }
    }


    
</script>

<template>
    <header>
        <AppHeader />
    </header>

    <main >
        
        <AppMain />
    </main>
</template>

<style lang="scss"  >
@use "./styles/generic.scss" as*;

</style>
