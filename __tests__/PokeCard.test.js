import { prettyDOM, render } from '@testing-library/react'
import PokeCard from '../src/components/PokeCard'
import pokemons from './mocks/pokemons.mock.json'

describe('PokeCard Component', ()=>{
    it('should render name of pokemon', async() =>{
        const { container } = render(<PokeCard info={pokemons.results[0]} />)
        const pokeName = container.querySelector('#pokename')
        expect(pokeName).toBeInTheDocument()
    })
    it('should render type or types of pokemon', async() =>{
        const { container } = render(<PokeCard info={pokemons.results[1]} />)
        const pokeTypes = container.querySelector('#poketypes')
        expect(pokeTypes).toBeInTheDocument()
    })
    it('should render picture of pokemon', async() =>{
        const { container } = render(<PokeCard info={pokemons.results[2]} />)
        const pokePicture = container.querySelector('#pokepicture')
        expect(pokePicture).toHaveAttribute('src', pokemons.results[2].picture)
    })

})