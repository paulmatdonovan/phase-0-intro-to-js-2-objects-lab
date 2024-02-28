// Write your solution in this file!
const employee = {
    name: "Jolly Roger",
    streetAddress: "100 Franklin Street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newList = { ...obj };

    newList[key] = value;

    return newList;

}
const newEmployees = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;

}
const employees = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
const employeesNext = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...employee }
    const newObj = Object.assign({}, employee);

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}
// const destructivelyDeleteFromEmployeeByKey




