export default function createEnum(...enums) {
    let o = {}

    for(let i = 0; enums.length > i; i++){
        o[enums[i]] = enums[i]
    }

    return Object.freeze(o)
}
