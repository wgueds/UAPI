export function addAddress(item) {
    return { type: 'ADD_ADDRESS', item } 
}

export function removeAddress() {
    return { type: 'REMOVE_ADDRESS' }
}
