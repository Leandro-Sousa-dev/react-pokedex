import { useQuery } from "react-query";
import { getPokes } from "../../services/getPokes";

const fetchData = async (number) => {

    const pokes = await getPokes(number)

    return pokes.results
}

export const usePokeData = (number) => {
    const query = useQuery({
        queryFn: () => fetchData(number),
        queryKey: ['poke-data'],
        refetchOnWindowFocus: false
    })
    return query
}