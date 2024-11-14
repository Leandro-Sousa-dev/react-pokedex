export const getPokes = async (number)=> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${number}`)
    return await response.json()
}

export const getMorePokes = async (number)=> {
    let limit = 0
    number == 1020 ? limit = 5 : limit = 10  
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${number}&limit=${limit}`)
    return await response.json()
}

