import { useQuery } from 'react-query'
import { getPoke } from '../../services/getPoke'

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

const fetchData = async (name) => {
    const poke = await getPoke(name)

    const addColorType = (types)=> {
        const typeColor = types.map((t)=>{
            t.type.name
            const color = colours[`${t.type.name}`]
            return {
                color: color,
                name: t.type.name
            }
        })
        return typeColor
    }
    
    const pokeData = {
        img: poke.sprites.other["official-artwork"].front_default,
        name: poke.name,
        moves: poke.moves,
        abilities: poke.abilities,
        types: addColorType(poke.types)
    }
    return pokeData
}

export const useDetails = (name) => {

    const query = useQuery({
        queryFn: () => fetchData(name),
        queryKey: [`detais-${name}`],
        refetchOnWindowFocus: false,
    })
    return query
}