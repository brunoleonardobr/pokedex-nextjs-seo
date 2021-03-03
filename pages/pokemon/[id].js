import React, { Component } from 'react';
export default function Pokemon({pokemon})
{
    console.log(pokemon.sprites.front_default);
    return(
        <div>
            <img src={pokemon.sprites.front_default} alt="Imagem"/>
        </div>
    )
}

export async function getStaticProps({params}) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((respostaDoServer)=>{
            if(respostaDoServer.ok){
                return respostaDoServer.json()
            }
        }).then((respostaEmObjeto)=>{
            return respostaEmObjeto;
        })
    return {
      props: {
          pokemon
      }, // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }, 
      ],
      fallback: false // See the "fallback" section below
    };
  }