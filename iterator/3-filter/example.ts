import { take } from "../2-take/take";
import { random } from "../1-random/random";
import { filter } from "./filter";

const randomInt = random(0,100);
console.log([...take(filter(randomInt, (el) => el > 30), 15)]);
console.log([...take(filter([100,7,100,8,99], (el) => el > 30), 10)]);