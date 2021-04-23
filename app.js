// using the pokemon api to retrieve information for the DOM


// document.ready function
$(()=>{
     
    // calling by name on submit function
    $('#byName').on('submit',(event)=>{
        // prevent default info from populating
        event.preventDefault()

        // set a variable for the user input
        const userInput = $('#nameId').val();

        // pass in the userInput as an argument for the function
        getPokeData(userInput);
        
    })

    // calling by number on submit function
    $('#byNumber').on('submit',(event)=>{
        // prevent default info from populating
        event.preventDefault()

        // set a variable for the user input
        const userInput = $('#numberId').val();

        // pass in the userInput as an argument for the function
        getPokeData(userInput);  
    })
    

    // the function takes an input that will specified when the function is run
    async function getPokeData(input) {
        // async await to grab the data
        // fetch the data
        // be able to input the user's search into the api
        // temperate literal: the `${} works like concatenation `. this takes the userInput
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${input}` )
        // change the data to json data
        const data = await response.json();
        console.log(data);
        // populate the data to the DOM
        $('#pokeImage').attr('src',data.sprites.other.dream_world.front_default);
        $('#pokeName').html(data.forms[0].name);
        $('#pokeType').html(data.types[0].type.name);
        $('#pokeNumber').html(data.id);
        // changing the color of the type to the equivalent color scheme
        if(data.types[0].type.name == "fire"){
            $('#pokeType').css('color','rgb(171,32,33)'); 
        } else if(data.types[0].type.name == "grass"){
            $('#pokeType').css('color','rgb(18,124,61)');
        }  else if(data.types[0].type.name == "bug"){
            $('#pokeType').css('color','rgb(30,75,37)');
        }   else if(data.types[0].type.name == "dark"){
            $('#pokeType').css('color','rgb(4,7,6)');
        }   else if(data.types[0].type.name == "dragon"){
            $('#pokeType').css('color','rgb(68,139,147)');
        }   else if(data.types[0].type.name == "electric"){
            $('#pokeType').css('color','rgb(225,228,45)');
        }   else if(data.types[0].type.name == "fairy"){
            $('#pokeType').css('color','rgb(151,25,68)');
        }   else if(data.types[0].type.name == "fighting"){
            $('#pokeType').css('color','rgb(150,65,41)');
        }   else if(data.types[0].type.name == "flying"){
            $('#pokeType').css('color','rgb(74,103,125)');
        }   else if(data.types[0].type.name == "ghost"){
            $('#pokeType').css('color','rgb(51,51,107)');
        }   else if(data.types[0].type.name == "ground"){
            $('#pokeType').css('color','rgb(169,112,44)');
        }   else if(data.types[0].type.name == "ice"){
            $('#pokeType').css('color','rgb(137,208,245)');
        }   else if(data.types[0].type.name == "normal"){
            $('#pokeType').css('color','rgb(115,85,90)');
        }   else if(data.types[0].type.name == "poison"){
            $('#pokeType').css('color','rgb(94,45,136)');
        }   else if(data.types[0].type.name == "psychic"){
            $('#pokeType').css('color','rgb(163,43,108)');
        }   else if(data.types[0].type.name == "rock"){
            $('#pokeType').css('color','rgb(72,24,11)');
        }   else if(data.types[0].type.name == "steel"){
            $('#pokeType').css('color','rgb(94,117,111)');
        }   else if(data.types[0].type.name == "water"){
            $('#pokeType').css('color','rgb(21,82,226)');
        }   
    }
    

})