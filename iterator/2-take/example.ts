import { random } from '../1-random/random'
import { take } from './take'
const randomInt = random(0,100);

console.log([...take(randomInt, 15)]);
console.log([...take([1,2,3,4,5], 3)]);           // [1,2,3]
console.log([...take(new Set([1,2,3,4,5]), 1)]);   // [1]
console.log([...take('hello', 6)]);               // ['h', 'e', 'l', 'l','o']
console.log([...take([], 3)]);                    // []