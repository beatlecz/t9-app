export function action(type, params) {
    if (params && params.type) throw "You can't use 'type' keyword as property name."
    
    return Object.assign({type}, params)
}
