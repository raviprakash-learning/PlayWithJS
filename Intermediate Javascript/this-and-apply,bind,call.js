// What is 'this' ? - Basic JS

// How to switch context of this - using ABC of JS

/**
 * ABC of JS
 * 1. Apply
 * 2. Bind
 * 3. Call
 */

// 1.Call - The call() method calls a function with a given this value 
// and arguments provided individually

// 2. Apply - Same funtionality as call, but it differs in calling statment 
// and expects arguments in an array

// 3. Bind - It just binds the this with a different context and returns a new function.
// We will have to call it again after binding.

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'aash', 'throw electricity'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['aash', 'throw electricity']); // Pika Chu  loves sushi and algorithms

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
logPokemon('aash', 'throw electricity'); // Pika Chu  loves sushi and algorithms
