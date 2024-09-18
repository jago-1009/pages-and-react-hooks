'use client'
import { useEffect, useState } from 'react'
import pokeStyles from './pokemon.module.css'
//Pokemon Data
const pokeApiURL = 'https://pokeapi.co/api/v2/pokemon/'
/**
 * @typedef {Object} pokemonApiObject This is the object for the pokemon api response
 * @prop {String} name name of Pokemon
 * @prop {Object} sprites Object with sprite references
 * @prop {String} sprites.front_default front default sprite
 * @prop {Object} cries Object with cry references
 * @prop {string} cries.latest latest cry sound effect
 * @prop {Number} height height of Pokemon. Multiply by 10 to make it in cms
 * @prop {Number} weight weight of Pokemon. Divide by 10 to make it in kgs.
 * 
 * 
 * @returns {pokemonApiObject}
 */

export default function Pokemon() {
    /**
     * @type {[pokemonApiObject, Function]}
     */
const [pokemon, setPokemon] = useState({})
/**
 * @type {[String, Function]}
 */
const [searchTerm, setSearchTerm] = useState('')

function changeSearchTerm(event) {
    setSearchTerm(event.currentTarget.value)
   
}
useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]); 
return (
<main className={pokeStyles.main}>
<h1 className={pokeStyles.title}>Pokemon Page</h1>
<div className={pokeStyles.search}>
    <input type="search" id="search" name="search" placeholder='search for pokemon...' value={searchTerm} onChange={changeSearchTerm}/>
    <input type="button" value="Search" name="searchButton" />
</div>
<div className='pokemonResult'>

</div>
</main>


)

}