/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
    let result = []
    if(data[0].firstName != data[1].firstName){
        result.push('firstName')
    }
    if(data[0].lastName != data[1].lastName){
        result.push('lastName')
    }
    if(data[0].age != data[1].age){
        result.push('age')
    }
    return result
}
console.log(result(data));