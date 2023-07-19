
export const filter = <T>(iterable:Iterable<T>, predicate: (el: T) => boolean): IterableIterator<T> =>  {
    const iterator = iterable[Symbol.iterator]()
    return {
        next(): IteratorResult<T> {
            let res = iterator.next();
            while (!predicate(res.value) && !res.done) {
                res = iterator.next()
            }
            return res
        },
        [Symbol.iterator](): IterableIterator<T> {
            return this;
        },

    }

}
