export const random = (min: number, max: number): IterableIterator<number> => {
    return {
        next(): IteratorResult<number> {
            return { done: false, value: Math.floor(Math.random() * (max - min) + min) };
        },
        [Symbol.iterator](): IterableIterator<number> {
            return this;
        }
    };
}


