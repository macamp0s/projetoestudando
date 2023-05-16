import logo from './logo.svg';
import './App.css';
import FuncoesInternas from './components/FuncoesInternas';
import Props from './components/Props';
import Funcao01 from './components/03Hierarquia/Funcao01';
import { Fruta,Legumes, Bebidas } from './components/04MultipleComponent/Multiplos';

import Mercado from './components/05Propschildren/Propschildren';

import Avo from './components/06Contexts/Avo';

import SaveData from './components/07LocalSessionStorage/LocalStorage';

import Pai2 from './components/08PaiFilho/Pai';

import FunctionEstados from './components/09States/Estados';

import PokemonAxios from './components/10ApiAxios/Axios';



function App() {
  return (
    <div >
      <FuncoesInternas></FuncoesInternas>

      <Props nome="mauricio" idade={22}></Props>
     
      <Funcao01></Funcao01>
      <Fruta nome="banana"></Fruta>

      <Mercado nome="SSA  ">
      <Fruta nome="maça"></Fruta>
      <Legumes nome="alface"></Legumes>
      </Mercado>

      <Avo></Avo>

      <SaveData></SaveData>
      
      <Pai2></Pai2>

      <FunctionEstados></FunctionEstados>

      <PokemonAxios></PokemonAxios>

    </div>
  );  
}

export default App; 
