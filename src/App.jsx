import {useState} from 'react';
import logo from './assets/logo.png';
import './App.css';

export default function App(){
  const [precoAlcool, setPrecoAlcool] = useState("", "");
  const [precoGasolina, setPrecoGasolina] = useState("", "");


  function calcular(){
    if(precoAlcool && precoGasolina){
      if (precoAlcool / precoGasolina < 0.7){
        alert('vale mais a pena abastecer com gasolina')
      }else{
        alert('vale mais a pena abastecer com alcool')
      }

    }else{
      alert('informe o preço do alcool e da gasolina')
    }
  }

  return(
    <div className= "container">
       <header>
        <img className="logo" src={logo} alt ="bomba de combustivel" />
        <h1>Qual a melhor opção?</h1>
       </header>

      <main>
        <label htmlFor="alcool">Alcool (preco por litro)</label>
        <input 
        type="number" 
        name="" 
        id="" 
        value={precoAlcool}
        onChange={(event) => setPrecoAlcool(event.target.value)}
        />

        <label htmlFor="Gasolina">Gasolina (preco por litro)</label>
        <input 
        type="number" 
        name="" 
        id="" 
        value={precoGasolina}
        onChange={(event) => setPrecoGasolina(event.target.value)}
        />

        <button onClick = {calcular}>Calcular</button>
      
      </main>

    <div/>
  )
}
