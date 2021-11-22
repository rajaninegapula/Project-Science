//pokemon list in an array
let pokemonList = [{
    name: 'Squirtle',
    height: 1.08,
    types: ['water']
  },
  {
    name: 'Bulbasaur',
    height: 2.04,
    types: ['grass', 'poison']
  },
  {
    name: 'Charmander',
    height: 2.0,
    types: ['fire']
  },
  {
    name: 'Butterfree',
    height: 3.07,
    types: ['bug', 'flying']
  }
];
//creating a 'for' loop and 'if else' condition for checking top height pokemon object
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 3) {
    document.write("<ul><li>" + pokemonList[i].name  + " height: " + pokemonList[i].height +  " Wow, that’ s biggg! " + "</li></ul>");
    // console.log(pokemonList[i].name + "Wow, that’ s biggg!");
  } else {
    document.write("<ul><li>" + pokemonList[i].name + " height: " + pokemonList[i].height + "</li></ul>");
  }
}
