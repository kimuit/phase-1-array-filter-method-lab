// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = function (drivers, name) {
  return drivers.filter((str) => str.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = function (drivers,name){
    return drivers.filter(i => i.startsWith(name))
}

let matchName = function(drivers,name){
    return drivers.filter(i => i.name.match(name))
}