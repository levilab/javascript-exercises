const findTheOldest = function(people) {
    for (person of people) {
        if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear()
    }

    const oldest = people.sort((personA, personB) => {

        const ageA = personA.yearOfDeath - personA.yearOfBirth
        const ageB = personB.yearOfDeath - personB.yearOfBirth
        return ageB - ageA
    })
    return oldest[0]
};

// const findTheOldest = function(people) {
//     function getAge(birthYear, deathYear) {
//         if (!deathYear) {
//             deathYear = new Date().getFullYear()
//         }
//         return deathYear - birthYear

//     }
//     return people.reduce((oldestPerson, currentPerson) => {
//         const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
//         const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//         return oldestAge < currentAge ? currentPerson : oldestPerson
//     })
// };

// Do not edit below this line
module.exports = findTheOldest;
