// 6. Необходимо написать функцию seq, которая бы принимала множество Iterable объектов
// и возвращала итератор по их элементам
//
//     ```js
//    console.log(...seq([1, 2], new Set([3, 4]), 'bla')); // 1, 2, 3, 4, 'b', 'l', 'a'
//    ```


export const seq = (...iterable: Iterable<unknown>[]) => {
    const iterator = iterable[Symbol.iterator]()
    const iteratorByChildren = (iterableObject: any) => {
        const childrenIterator = iterableObject[Symbol.iterator]()
        return {
            [Symbol.iterator]() {
                return this
            },
            next() {
                return childrenIterator.next()
            }
        }
    }
    return {
        [Symbol.iterator]() {
            return this
        },
        next(): any {
            const { done, value: val} = iterator.next()
            if (!done) {
                const {done, value} = iteratorByChildren(val).next()
                while (!done) {
                    return {done,value}
                }
            }
             return {done, val}


        }
    }
}

console.log(...seq([1, 2], new Set([3, 4]), 'bla'))