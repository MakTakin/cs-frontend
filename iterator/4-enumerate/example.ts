import {random} from "../1-random/random";
import {take} from "../2-take/take";
import {enumerate} from "./enumerate";

const randomInt = random(0, 100);

console.log([...take(enumerate(randomInt), 3)]); // [[0, ...], [1, ...], [2, ...]]