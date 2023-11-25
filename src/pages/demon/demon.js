import './demon.scss';
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/picsart_23-09-24_00-48-40-099.png'
import bgPrincipal from '../assets/images/bgdemon.png'
import demonlogo from '../assets/logo img/logo kny.jpg'


import bgInstagram from '../assets/images/rectangle.png'
import iconInsta from '../assets/icons/instagram.png'
import imgFooter from '../assets/images/bgfooter.jpg'
import imgChain from '../assets/images/chain.jpg'
import homi from '../assets/images/pexels-justin-l-u-c-k-5707180.jpg'
import muieInsta from '../assets/images/pexels-th-team-7516447.jpg'
import modeloRosa from '../assets/images/modelo rosa 2.webp'
import { Link } from 'react-router-dom';


export default function Demon() {


  return (
    <div className='pagina-demon'>
    <header Class="cabecalho">
        <a href="/"><img src={logo} alt="logo_principal" class="logo"/></a>
            <nav>
                <ul class="navbar">
                    <li><a href="#Categoria">Categoria</a></li>
                    <li><a href="#colecao">Coleção</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <div class="search-container">
                        <input type="text" class="search-box"/>
                        <div class="search-icon"><img src={lupa} alt="lupa"/></div>
                      </div>
                </ul>
            </nav>
        <div class="menumb">
        <div class="icons__header">    
            <a href=""><img class="sacola" src={sacola} alt="sacola de compras"/></a>
            <a href="/login"><img class="perfil" src={perfil} alt="icone de perfil"/></a>
        </div>  
        <div class="bx bx-menu" id="menu-icon">
            <img src="/assets/icons/menu-aberto.png" alt="menumb" class="menu-icon"/>
        </div>  
        </div>
    </header>

    <img className='bg__principal' src={bgPrincipal} alt='imagem de demon'/>
    <section class="banner__principal">
        <div class="text__principal">
            <h1 class="texto1">Coleção Demon Slayer</h1> 
        </div>
    </section>

    <div class="logo__ilustration">
        <img src={demonlogo} alt="kny"/>
    </div>

    <section class="sessao__colecao">
        <div class="container__colecao">
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta modelo inosuke.webp" alt="camisa_inosuke" class="camisa_inosuke"/></a>
            <p>Camiseta Inosuke</p>
            <p>R$45</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta rengoku.jpg" alt="rengoku" class="rengoku"/></a>
            <p>Camiseta Rengoku</p>
            <p>R$70</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta usui.jpg" alt="usui" class="usui"/></a>
            <p>Camiseta Uzui</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/moletom zenitsu.jpg" alt="zenitsu" class="zenitsu"/></a>
            <p>Moletom Zenitsu</p>
            <p>R$80</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta mitsuri.jpg" alt="mitsuri" class="mitsuri"/></a>
            <p>Camiseta Mitsuri</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta usui 2.jpg" alt="usui2" class="usui2"/></a>
            <p>Camiseta Uzui styler</p>
            <p>R$60</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/moletom kukoshibo.webp" alt="kukoshibo" class="kukoshibo"/></a>
            <p>Jaqueta Kukoshibo</p>
            <p>R$220</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta_tanjiro.png" alt="tanjiro" class="tanjiro"/></a>
            <p>Camiseta Tanjiro</p>
            <p>R$45</p>
        </div>
    </div>
    </section>


    <img className='bg__insta' src={bgInstagram} alt='fundo laranja' />
    <section class="sessao__instagram">
        <div class="container__instagram">
        <div class="insta_all">
            <a href="https://www.instagram.com/animix.set/"><img src={iconInsta} alt="icon insta"/></a>
        <div class="insta">
            <h3>Siga nosso</h3>
            <h4>Instagram</h4>
        </div>
        </div>
        <div class="img__insta">
            <img src={imgChain} alt="chain" class="chain"/>
            <img src={homi} alt="homi" class="modelo1"/>
            <img src={muieInsta} alt="muie" class="muie"/>
            <img src={modeloRosa} alt="rosa" class="rosa"/>
        </div>
        </div>
    </section>

    <img className="img__footer" src={imgFooter}  alt='imagem de fundo do rodape' />
    <footer class="sessao__footer">
        <div class="footer__content">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>Institucional</h4>
                 <ul>
                    <li><a href="">Sobre a Empresa</a></li>
                 </ul>      
                </div>
                <div class="footer-col">
                    <h4>Duvidas</h4>
                 <ul>
                    <li><a href="">Ajuda</a></li>
                    <li><a href="">Política e Privacidade</a></li>
                    <li><a href="">Política de troca e devolução</a></li>
                    <li><a href="">Pagamento e envio</a></li>
                 </ul>      
                </div>
                <div class="footer-col">
                    <h4>Institucional</h4>
                 <ul>
                    <li><a href="">Atendimento</a></li>
                    <li><a href="">Dúvidas?</a></li>
                    <li><a href="">Fale Conosco</a></li>
                 </ul>      
                </div>
                <div class="footer-col">
                    <h4>Quer ficar por dentro das novidades?</h4>
                 <div class="form-sub">
                    <form>
                        <input type="email" placeholder="Digite o seu e-mail" required class="email"/>
                        <button>Inscreva-se</button>
                    </form>
                 </div>    
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
  
}

