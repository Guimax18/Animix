import { useEffect, useState } from 'react';
import './cadastro.scss';
import axios from 'axios'
import logo from '../assets/logo img/logo.animix.png'
import perfil from '../assets/icons/perfil.png'
import { Link, useParams } from 'react-router-dom';



export default function Cadastro() {
  const [nome, setNome] = useState ('');
  const [categoria, setCategoria] = useState ('');
  const [tamanho, setTamanho] = useState ('');
  const [valor, setValor] = useState ('');
  const [cor, setCor] = useState ('');
  const [anime, setAnime] = useState ('');
  const [imagem, setImagem] = useState ('');

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      buscaProduto();
    }
  }, [])

  async function buscaProduto(){
    let r = await axios.get('http://localhost:8400/roupa/' + id);
    setNome(r.data.nome);
    setCategoria(r.data.categoria);
    setTamanho(r.data.tamanho);
    setValor(r.data.valor);
    setCor(r.data.cor);
    setAnime(r.data.anime);
    setImagem(r.data.imagem)
  }

  async function salvarRoupa() {
    let body = {
        nome: nome,
        categoria: categoria,
        tamanho: tamanho,
        valor: valor,
        cor: cor,
        anime: anime
    }

    if (id) {
      let r = await axios.put('http://localhost:8400/roupa/'+id, body);
      alert('Roupa alterada');
    }
    else {
      let r = await axios.post('http://localhost:8400/roupa/', body);
      let id = r.data.id;
      alert('Roupa cadastrada. id' + id);
    }
  }

  async function excluirProduto(Id) {
    try {
        const response = await axios.delete(`http://localhost:8400/roupa/${Id}`);

        if (response.status === 200) {
            alert('Roupa excluído com sucesso.');
            ListaRoupas();
        } else {
            alert('Falha ao excluir a roupa.');
        }
    } catch (error) {
        alert('Ocorreu um erro ao tentar excluir a roupa:', error);
    }
}


  return (
    <div className='pagina-cadastro'>

      <div className='header'>
      <a href="/"><img src={logo} alt="logo_principal" class="logo"/></a>
      <h1>Cadastro de Roupas</h1>
      <a href="/Login Page - ANIMIX/Login Page - ANIMIX/login.html"><img class="perfil" src={perfil} alt="icone de perfil"/></a>
      </div>

    <section className='form'>
        <div className='form__imagem'>
          <label for="imagem">Imagem:</label>
          <input className="imagem" type="file" name="imagem" onChange={e => setImagem(e.target.files[0])}/>
        </div>

      <div className='form__box'>
        <div className='form__div'>
          <label className='form__name'>Nome: </label>
          <input className='form__input' type='text' value={nome} onChange={e => setNome(e.target.value)}/>
        </div>

        <div className='form__div'>
          <label className='form__name'>Categoria: </label>
          <input className='form__input' type='text' value={categoria} onChange={e => setCategoria(e.target.value)}/>
        </div>

        <div className='form__div'>
          <label className='form__name'>Tamanho: </label>
          <input className='form__input' type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}/>
        </div>

        <div className='form__div'>
          <label className='form__name'>Valor: </label>
          <input className='form__input' type='text' value={valor} onChange={e => setValor(e.target.value)}/>
        </div>

        <div className='form__div'>
          <label className='form__name'>Cor: </label>
          <input className='form__input' type='text' value={cor} onChange={e => setCor(e.target.value)}/>
        </div>

        <div className='form__div'>
          <label className='form__name'>Anime: </label>
          <input className='form__input' type='text' value={anime} onChange={e => setAnime(e.target.value)}/>
        </div>

        <div className='form__button'>
          <button onClick={salvarRoupa}> Cadastrar </button>
        </div>
      </div>
      </section>
    </div>
  )
  
}
