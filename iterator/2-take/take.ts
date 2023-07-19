
export const take = <T>(iterable:Iterable<T>, elCount: number): IterableIterator<T> => {
    let currentIndex = 0
    const iterator = iterable[Symbol.iterator]()
    return {
        next(): IteratorResult<T> {
            while (currentIndex < elCount) {
                currentIndex++
                return iterator.next()
            }
            return { done: true, value: undefined }
        },
        [Symbol.iterator](): IterableIterator<T> {
            return this;
        }
    }
}


//
// 2. Необходимо написать функцию take, которая принимает любой Iterable объект и
// возвращает итератор по заданному количеству его элементов
//
//     ```js
//    const randomInt = random(0, 100);
//
//    console.log([...take(randomInt, 15)]);
//    ```