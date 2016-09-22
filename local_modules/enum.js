export default function createEnum(...enums) {
    let o = {}

    for(var i = 0; enums.length > i; i++){
        o[enums[i]] = enums[i]
    }

    return Object.freeze(o)
}
