/**
 * saitama is an entity of type Employee
 */
var saitama = ds.Employee.find('firstName == :1', 'saita*');

/**
 * heroes is a collection of Employee entities
 */
var heroes  = ds.Employee.query('(firstName == :1 OR dob > :2) AND company.name == :3', '*r*', new Date("01/01/1995"), 'Hero Association');

var result = {
	saitama : saitama,
	heroes  : heroes
};

result;