import {reactive} from "vue"

export const store= reactive({
    urlApi : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    urlType: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    // urlArchetype:"https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    cards: [],
    types: [],
    

});