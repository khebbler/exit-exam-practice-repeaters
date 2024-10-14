//////////////////// PART ONE //////////////////////////
/*
Problem #1: Create an array called favoriteTvShows and populate it with your 5 
favorite TV Shows.
 */

let favoriteTVShows = ['Community', 'Mr. Robot', 'Utopia', 'The Leftovers', 'The Boys'];

/*
Problem #2: Create a function called printValuesInReverse. This function should 
accept an array as a a parameter and print each value in reverse IF the value has a 
length that is odd.

- example: printValuesInReverse(["The Leftovers", "
Succession", "It's Always Sunny in Philadelphia"]) => LOGS
"It's Always Sunny in Philadelpha"
"The Leftovers";
 */


let printValuesInReverse = function(array) {
  // Looping through input array in reverse
  for (let i = array.length - 1; i >= 0; i--) {
    // if length of array is odd
    if (array[i].length % 2 !== 0) {
      // printing new values
      console.log(array[i]);
    }
  }
};

/*
Problem #3: Declare a variable using the let keyword called favoriteShow that is 
an object that contains 3 key value pairs - title, genre, stillRunning. Title should 
be a string of the show's title; genre should be a string of the show's genre, 
and stillRunning should be assigned a boolean based on whether the show is "still 
running" or has ended.
 */

let favoriteShow = {
  title: 'Utopia',
  genre: 'drama',
  stillRunning: false
};

/*
Problem #4: Create a function called getObjectKeys that takes in an 
object as a parameter and returns an array of that object's keys only IF the 
value at that key is a boolean.
 */

let getObjectKeys = function(object) {
  // storage array for result
  var result = [];

  // Looping through input object's keys
  for (let key in object) {
    // if object's key is a boolean
    if (typeof object[key] === 'boolean') {
      // adding key to result array
      result.push(key);
    }
  }
  // returning result
  return result;
};

/*
Problem #5: Create a function called getObjectValues that takes in an object 
as a parameter and returns an array of that object's values only IF the values 
are strings.
 */

const getObjectValues = function(object) {
  // storage array for result
  var result = [];
  // Looping through input object's values
  for (let value in object) {
    // if values are string
    if (typeof object[value] === 'string') {
      // adding value to result array
      result.push(object[value]);
    }
  }
  // returning result
  return result;
};


/*
Problem #6: Create a function called returnNewObject that takes in three 
parameters - object, key, value. This function should return a new object with 
all of the input object's previous keys and values AND the input key added as a
key and the input value added as a value to that key.
 */

const returnNewObj = function(object, key, value) {
  // creating copy of input object using spread syntax
  var newObject = {... object};

  // assigning object's keys and values to newObject
  newObject[key] = value;

  // returning newObject
  return newObject;
};


/*
Problem #7: Create a function called addProperty that takes in 3 parameters - 
object, key, value. This function should add the input key to the object and
assign it the value of the input value.
 */

const addProperty = function(object, key, value) {
  // adding input key to object & assigning input value
  object[key] = value;
  // returning object;
  return object;
  
};

/////////////////////// DATA SET ///////////////////////
const shows = [
  {
    title: "It's Always Sunny in Philadelphia",
    genre: "Comedy",
    seasons: 15,
    stillRunning: true
  },
  {
    title: "The Leftovers",
    genre: "Drama",
    seasons: 3,
    stillRunning: false
  },
  {
    title: "Succession",
    genre: "Drama",
    seasons: 3,
    stillRunning: true
  },
  {
    title: "Star Trek: Voyager",
    genre: "Science Fiction",
    seasons: 7,
    stillRunning: false
  },
  {
    title: "Curb Your Enthusiasm",
    genre: "Comedy",
    seasons: 11,
    stillRunning: true
  }
];

/*
Problem #8: Create a function called findByTitle that takes in two parameters -
array, title. The parameter array represents an array of tvShow objects (see data 
above) and title represents a string of a show's title. This function should 
search through the input array and return the first object whose title property
matches the input title. If no title exists, the function should return
undefined.
 */

const findByTitle = function(array, title) {
  // Looping through input array of objects
  for (let i = 0; i < array.length; i++) {
    // if object's title matches input title
    if (array[i].title === title) {
      // return object
      return array[i];
    }
  } 
  // if no title exists
  return undefined;
};


////////////////////// PART TWO ////////////////////////
/*
Problem #9: Create a function called getComedies that takes in a parameter 
of an array of tv show objects (see data above). This function should use the 
native filter method to return a new array of only the tv show objects whose genre 
property is "Comedy".
 */

var getComedies = function(array) {
  // filtering through array of shows
  return array.filter(function(show) {
    // returning only tv show objects with Comedy genre
    return show.genre === "Comedy";
  });
};


/*
Problem #10: Create a function called getAverageOfSeasons that takes in one parameter
- array. The parameter array represents an array of tv show objects (see data above).
This function should use the native reduce method to iterate through the input array 
and return the average number of seasons for all of the tv shows.
 */

const getAverageOfSeasons = function(array) {
  // Looping through input array using reduce
  let totalSeasons = array.reduce(function(acc, show) {
    // adding number of seasons to accumulator
    return acc + show.seasons;
  }, 0);
  // finding average
  // total seasons divided by number of shows (length of array)
  return totalSeasons / array.length;
};


///////////////////// PART THREE ///////////////////////

const object = {
  value: 10,
  node: {
    value: 20,
    node: {
      value: 30,
      node: null
    }
  }
}


/*
Problem #11: Create a function called recursivelyGetNodeSum that takes in one 
parameter - obj. The parameter obj represents a nested object like the one above. 
This function should use recursion to return the sum of all of the values of this 
nested object.
=> 60
 */

var recursivelyGetNodeSum = function(object, sum=0) {
  // base
  if (object === null) {
    return sum;
  }
  // adding current value to sum
  sum += object.value;
  // recursion
  return recursivelyGetNodeSum(object.node, sum);
};