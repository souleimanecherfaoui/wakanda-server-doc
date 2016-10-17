var comp = new ds.Company();
comp.name = 'Hero Association';
comp.save();

var emp  = new ds.Employee();
emp.firstName = 'Saitama';
emp.lastName  = 'Caped Baldy';
emp.dob       = new Date("01/01/1991");
/**
 * /PROJECT/ will automatically be understood by Wakanda Server as the path of the project
 */
emp.photo     = loadImage('/PROJECT/backend/images/saitama.jpg');
emp.company   = comp;
emp.save();