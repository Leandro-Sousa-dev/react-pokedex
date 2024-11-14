import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PokeList } from './pokeList'
import { Poke } from './poke'

const AppRoutes = () => (
    <>
        <BrowserRouter basename="/react-pokedex/">
            <Routes>
                <Route exact path='/' element={<Navigate to="/home" />} />  
                <Route exact path='/home' element={<PokeList />} />
                <Route exact path='/poke/:name' element={<Poke />} />
            </Routes>
        </BrowserRouter>
    </>
)


export { AppRoutes }