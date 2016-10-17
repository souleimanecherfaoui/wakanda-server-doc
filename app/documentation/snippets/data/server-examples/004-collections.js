/**
 * The collection we will be using 
 */
var veryYoungHeroes = ds.Employee.query('dob > :1', new Date("01/01/1997"));

/**
 * Iterating over a collection
 * to obtain an array of heroes' names
 * [{firstName: "xxx", lastName: "xxxx"},{firstName: "xxx", lastName: "xxxx"}]
 */
var veryYoungHeroesNames  = [];

veryYoungHeroes.forEach(function(hero){
	veryYoungHeroesNames.push({
		firstName : hero.firstName,
		lastName  : hero.lastName
	});
});

/**
 * Obtaining the same result with a single call
 */
 
var veryYoungHeroesNames2 = veryYoungHeroes.toArray('firstName,lastName');

/**
 * Construct a collection by hand
 */
var myFavoriteHeroes = ds.Employee.createEntityCollection();

var saitama  = ds.Employee.find('firstName==:1', 'saitama');

myFavoriteHeroes.add(saitama);
myFavoriteHeroes.add(veryYoungHeroes);


/**
 * Final result
 */
var result = {
	veryYoungHeroesNames  : veryYoungHeroesNames,
	veryYoungHeroesNames2 : veryYoungHeroesNames2,
	myFavoriteHeroes      : myFavoriteHeroes
};

result;
