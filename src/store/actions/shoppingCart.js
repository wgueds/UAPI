export function add(item) {
    return { type: 'ADD_SHOPPING_CART', item }
}

export function remove() {
    return { type: 'REMOVE_SHOPPING_CART_ITEM' }
}

export function clear() {
    return { type: 'REMOVE_SHOPPING_CART_ALL' }
}
