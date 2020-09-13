
export function createAction<T>(type: T): () => ({ type: T }) {
    return () => ({ type })
}


export function createActionWithPayload<T, P>(type: T): (payload: P) => ({ type: T, payload: P }) {
    return (payload) => ({ type, payload })
}



// export function createAction<T extends string, C extends creator>(
//     type: T,
//     config?: { _as: 'props' } | C,
// ): ActionCreator<T> {
//     if (typeof config === 'function') {
//         return defineType(type, (...args: any[]) => ({
//             ...config(...args),
//             type,
//         }))
//     }
//     const as = config ? config._as : 'empty'
//     switch (as) {
//         case 'empty':
//             return defineType(type, () => ({ type }))
//         case 'props':
//             return defineType(type, (props: object) => ({
//                 ...props,
//                 type,
//             }))
//         default:
//             throw new Error('Unexpected config.')
//     }
// }

// function defineType<T extends string>(
//     type: T,
//     creator: creator,
// ): ActionCreator<T> {
//     return Object.defineProperty(creator, 'type', {
//         value: type,
//         writable: false,
//     })
// }

