// 5. Необходимо написать класс Range, который бы позволял создавать диапазоны чисел или символов, а также позволял обходить элементы Range с любого конца
//
//     ```js
//    const symbolRange = new Range('a', 'f');
//
//    console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']
//
//    const numberRange = new Range(-5, 1);
//
//    console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]
//    ```


class RangeClass {
    value: (number | string)[];
    constructor(from: number | string, to: number | string) {

        this.value = this.createRange(from, to)
    }

    createRange(from: number | string, to: number | string): (number | string)[] {
        const arr: (number | string)[] = []
        if (typeof from === 'number' && typeof to === 'number') {
            let currentNumber = from
            while (currentNumber < to) {
                arr.push(currentNumber)
                currentNumber++
            }
            arr.push(to)
            return arr
        }
        if (typeof from === 'string' && typeof to === 'string') {

            let currentLetter = from.charCodeAt(0)
            while (currentLetter < to.charCodeAt(0)) {
                arr.push(String.fromCharCode(currentLetter))
                currentLetter++
            }
            arr.push(to)
            return arr
        }
        return arr

    }
    [Symbol.iterator]() {
        const iterator = this.value[Symbol.iterator]()
        return {
                [Symbol.iterator]():any {
                    return this
                },
                next: () =>  {
                    return iterator.next()
                }
        }
    }


}

const symbolRange = new RangeClass(-5,10)
console.log(Array.from(symbolRange))