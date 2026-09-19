const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    const currentYear = new Date().getFullYear();
    let currentAge;
    
    if (currentPerson.yearOfDeath) {
      currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    } else {
      currentAge = currentYear - currentPerson.yearOfBirth;
    }

    let oldestAge;

    if (oldest.yearOfDeath) {
      oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    } else {
      oldestAge = currentYear - oldest.yearOfBirth;
    }

    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldest;
    }
}, people[0]);

};

// Do not edit below this line
module.exports = findTheOldest;
