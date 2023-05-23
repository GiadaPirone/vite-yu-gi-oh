<script>
    export default{
        name: "AppMain"
    }
</script>


<template>
    <div class="conteiner">
        <div class="nCards"> 
            <div class="barraCards">
                <p>Found 39 cards</p>
                
            </div>
        </div>
    </div>
</template>

<style  scoped>
    .conteiner{
        background-color: white;
        height: 100vh;
        width: 80%;
        margin: 0 auto;    
        margin-top: 50px;
    }
    .nCards{
        width: 90%;
        min-height: 100px;
        margin: 0 auto;
    }

    .barraCards{
        background-color: black;
        height: 100px;
        display: flex;
        align-items: center;
    }

    p{
        color: white;
        padding-left: 30px;
        font-size: 2rem;
    }

</style>