let p_name = "";
let p_image = "";
let get_p_api = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';
function getPokemons(){
    fetch(get_p_api).then((response) => response.json()).then((data) => {
        var results = data.results;
        results.forEach(getEachPokemon);
    }).catch((err) =>{
        alert("Error fetching list: "+err);
    });
}
function getEachPokemon(details){
    p_name = details.name;
    let p_info = getPokemonDetails(p_name);
}
function getPokemonDetails(name){
    return fetch('https://pokeapi.co/api/v2/pokemon/'+name).then((response) => response.json()).then((data) => {
        createPokemonElement(name, data);
        console.log(data);
    }).catch((err)=>{
        alert("Error in fetching details: "+err);
    });
}
function createPokemonElement(name, data){
            //Creating of div elements per pokemon
            var poke_info = document.createElement("div");
            poke_info.setAttribute("id", "poke-info-"+name);
            poke_info.classList.add("poke-info");
            var poke_image = document.createElement("div");
            poke_image.setAttribute("id", "poke-image-"+name);
            var poke_name = document.createElement("div");
            poke_name.setAttribute("id","poke-"+name);
            var poke_catch = document.createElement("div");
            poke_catch.setAttribute("id","poke-catch-"+name);
            var poke_details = document.createElement("div");
            poke_details.setAttribute("id","poke-details-"+name);
    
            //Displaying the created element inside the html
            document.getElementById("lists").append(poke_info);
            document.getElementById("poke-info-"+name).append(poke_image);
            document.getElementById("poke-info-"+name).append(poke_name);
            document.getElementById("poke-info-"+name).append(poke_catch);
            document.getElementById("poke-info-"+name).append(poke_details);
    
            //Displaying the pokemon details
            document.getElementById("poke-image-"+name).innerHTML = "<img src='"+data.sprites.front_default+"'>";
            document.getElementById("poke-"+name).innerHTML = "<h2>"+name+"</h2>";
            document.getElementById("poke-catch-"+name).innerHTML = "<input type='button' value=\"Who\'s this?\" onclick=\"showPokemon('"+name+"')\">";
            document.getElementById("poke-details-"+name).innerHTML = "<h4>Base Experience: <span>"+data.base_experience+"</span></h4> <h4>Weight: <span>"+data.weight+"</span></h4>";
}
function showPokemon(name){
    document.getElementById("poke-info-"+name).style.backgroundColor = "orange";
    document.getElementById("poke-info-"+name).onmouseleave = function(){
        this.style.backgroundColor = "white";
    };
}

getPokemons();


