import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((respostaDoServer)=>{
            if(respostaDoServer.ok){
                return respostaDoServer.json()
            }
        }).then((respostaEmObjeto)=>{
            return respostaEmObjeto.pokemon_entries;
        })
    return {
      props: {
          pokemons
      }, // will be passed to the page component as props
    }
  }

export default function Home(props) {

    const {pokemons} = props;

    return(
    <div>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/sobre'>Sobre</Link></li>
        </ul>
        Pokedex - da um like
        <ul>
            {pokemons.map((pokemon)=>(
                <li key={pokemon.entry_numbers}>
                    <Link href={`/pokemon/${pokemon.entry_number}`}>
                        <a>
                            {pokemon.pokemon_species.name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>)
}
