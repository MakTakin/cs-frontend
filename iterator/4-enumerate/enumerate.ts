
export const enumerate = <T>(iterable:Iterable<T>): IterableIterator<[number, T]> => {
    const iterator = iterable[Symbol.iterator]()
    let currentIndex = 0
    return {
        next(): IteratorResult<[number, T]> {
            const result = iterator.next()
            while (!result.done) {
                return {done: false, value: [currentIndex++, result.value]}
            }
            return { done: true, value: undefined }
        },
        [Symbol.iterator](): IterableIterator<[number, T]> {
            return this
        }
    }
}
