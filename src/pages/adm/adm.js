import './adm.scss';
import logo from '../assets/logo img/logo.animix.png'
import perfil from '../assets/icons/perfil.png'
import bgPrincipal from '../assets/images/roxy2.png'

import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Adm() {
    const [listaRoupas, setListaRoupas] = useState([]);

    async function buscarRoupas() {
        let r = await axios.get('http://localhost:8400/roupa');
        let roupas = r.data;

        setListaRoupas(roupas);
    }

    useEffect(() => {
        buscarRoupas();
    }, []);


  return (
    <div className='pagina-adm'>

    <div className='header'>
      <a href="/"><img src={logo} alt="logo_principal" class="logo"/></a>
      <a href="/login"><img class="perfil" src={perfil} alt="icone de perfil"/></a>
      </div>

    
    <section class="banner__principal">
        <img className='bg__principal' src={bgPrincipal} alt='imagem da roxy' />
        <h1 class="texto1">Bem Vindo a àrea do Administrador</h1> 
    </section>

    <section class="sessao__colecao" id="colecao">
        <div class="container__colecao">
        <div class="roupa">
            <a href="/cadastro"><img src="/Assets/roupas img/animes/camiseta aki 3.jpg" alt="chainsaw" class="chainsaw"/></a>
            <div class="text">
            <a href="/ca"><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
            <p>Editar</p>
            </div>
        </div>
        
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/demon/camiseta usui 2.jpg" alt="usui" class="usui"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
                </div>
        </div>
        
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/jjk/camiseta sukuna 3.jpg" alt="docinho" class="docinho"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
                </div>
        </div>
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/animes/camiseta david.jpg" alt="cyber"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
            </div>
        </div>
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/animes/camiseta lucy.jpg" alt="cyber"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
            </div>
        </div>
        </div>
    </section>

    <table>
            <thead>
            </thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Tamanho</th>
                    <th>Valor</th>
                    <th>Cor</th>
                    <th>Anime</th>
                </tr>
            <tbody>
                {listaRoupas.map(item =>        
            <tr>
                <th>{item.id_roupa}</th>
                <th>{item.nm_roupa}</th>
                <th>{item.categoria}</th>
                <th>{item.tamanho}</th>
                <th>{item.valor}</th>
                <th>{item.cor}</th>
                <th>{item.anime}</th>
                </tr>
                )}
            </tbody>
        </table>

    </div>
  );
  
}
