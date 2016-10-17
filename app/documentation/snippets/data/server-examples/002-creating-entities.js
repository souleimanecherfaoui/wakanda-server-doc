var strHeroes       = File('/PROJECT/backend/heroes/list.json').toString('utf-8');
var heroes          = JSON.parse(strHeroes);
var photosFolder    = Folder('/PROJECT/backend/heroes/images/');
//Get the company with ID = 1
var heroAssociation = ds.Company(1);

heroes.forEach(function(hero){
	var h = new ds.Employee();
	h.firstName = hero.fName;
	h.lastName  = hero.lName;
	h.dob       = new Date(hero.dob);
	h.photo     = loadImage(File(photosFolder, hero.photo));
	h.company   = heroAssociation;
	h.save();
});