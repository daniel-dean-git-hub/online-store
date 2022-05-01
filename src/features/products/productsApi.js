export const fetchProducts = async () => {
    const requestUrl = 'https://fakestoreapi.com/products'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })

    return await response.json()
}

export const fetchCategories = async () => {
    const requestUrl = 'https://fakestoreapi.com/products/categories'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })
    return await response.json()    
}

export const fetchBasket = async () => {
    const requestUrl = 'https://fakestoreapi.com/carts'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })
    return await response.json()    
}

export const fetchAccounts = async () => {
    const requestUrl = 'https://fakestoreapi.com/users'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })
    return await response.json()    
}