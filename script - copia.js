let characters = JSON.parse(file).results // [{}, {}, {}, ...]
let input_character_name = document.getElementById("input_character_name")
let container = document.getElementById("divContainerCard")


function search_character_button_click() {
  let results = ""
  console.log("presionaste Buscar")
  
  //let character = search_character(input_character_name.value)
  //console.log(character)
  
  let res_characters = search_characters(input_character_name.value)
  if(input_character_name.value!=''){
    for(let i = 0; i<res_characters.length; i++) {
        results += `
        <div class="row col-md-4 box-personaje">
            <div class="col-md-6">
                <img class="card-img-top" src="${res_characters[i].img}" alt="Card image cap">
            </div>
            <div class="col-md-6">
                    <h4>${res_characters[i].name}</h4>
                    <div class="row-detalle">
                    <div>Género:</div>
                    <div>${res_characters[i].gender}</div>
                    </div>
                    <div class="row-detalle">
                    <div>Año de nacimiento:</div>
                    <div>${res_characters[i].birth_year}</div>
                    </div>
                    <div class="row-detalle"> 
                    <div>Altura:</div>
                    <div>${res_characters[i].height}</div>
                    </div>
                    <div class="row-detalle">
                    <div>Color de ojos:</div>
                    <div>${res_characters[i].eye_color}</div>
                    </div>
                    <div class="row-detalle">
                    <div>Color de Cabello:</div>
                    <div>${res_characters[i].hair_color}</div>
                    </div>
            </div>
        </div>
        `
      }
      
      container.innerHTML = results
  }
  else {
    container.innerHTML = `
    <div class="col-md-4 text-center sin-resultado" >
        <img src="./img/img-sinresultado-white.png">
        <h3>DEBES INGRESAR UN NOMBRE</h3>
    </div>
    `
}
  
}

// solo encuentra uno
/*function search_character(character_name) { 
  let longitud_cadena = character_name.length
  for(let i = 0;i<characters.length;i++) {
    if(characters[i].name.substring(0,longitud_cadena) == character_name) {
       return characters[i]
    }
  }
}*/

// Encuentra todos los que coincidan
function search_characters(character_name) {
  let results = []
  let longitud_cadena = character_name.length


  /*for(let i = 0;i<characters.length;i++) {
    if(characters[i].name.substring(0,longitud_cadena).toLowerCase() == character_name.toLowerCase()) {
      results.push(characters[i])
    }else{

        console.log("no hay resultado")
        

    } 
  }*/
   for(let i = 0;i<characters.length;i++) {
    if(characters[i].name.toLowerCase().includes(character_name.toLowerCase())) {
      results.push(characters[i])
    }else{

        console.log("no hay resultado")
        

    } 
  }
  return results
}