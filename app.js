import employees from "#db/employees"

function getEmployees() {
    return employees;
}
function getRandom() {
 const randomEmployee = Math.floor(Math.random() * employees.length)
    return employees[randomEmployee]  
}
function getId() {
    return employees.find((employee) => employee.id === id);
}

module.exports = { getEmployees, getRandom, getId }