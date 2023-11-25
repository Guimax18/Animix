import '../landing/landing.scss';
import bgPrincipal from '../assets/images/background_anime3.png'
import mulherBanner from '../assets/images/moça do banner.png'
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/perfil.png'
import caminhao from '../assets/icons/caminhao-de-entrega.png'
import pix from '../assets/icons/pix.png'
import cartao from '../assets/icons/cartoes-de-credito.png'
import jujutsuLogo from '../assets/logo img/logo jjk.jpg'
import atackLogo from '../assets/logo img/logo-atack2.png'
import demonLogo from '../assets/logo img/logo kny.jpg'
import imgJaqeAtack from '../assets/roupas img/snk/jaqueta modelox.webp'
import imgMoletKukoshibo from '../assets/roupas img/demon/moletom kukoshibo.webp'
import imgCamGojoModel from '../assets/roupas img/jjk/camiseta gojo modelo.png'
import imgChaveiroGojo from '../assets/roupas img/jjk/chaveiro gojo e geto.jfif'
import hokage from '../assets/images/hokage.jpg'
import blusa from '../assets/images/blusa.webp'
import otaku from '../assets/images/banner otaku.webp'
import purple from '../assets/images/purple.png'
import ftAKi from '../assets/roupas img/animes/camiseta aki 3.jpg'
import imgUsui2 from '../assets/roupas img/demon/camiseta usui 2.jpg'
import imgCamDocinhomodel from '../assets/roupas img/feminina/camiseta/camiseta modelo docinho.jpg'
import imgCamPretaEren from '../assets/roupas img/snk/camiseta preta.jpg'
import imgSaiacCorrente from '../assets/roupas img/feminina/saia/saia preta com corrente.jpg'
import imgCamMeninaVer from '../assets/roupas img/feminina/camiseta/camiseta menina verde.jpg'
import imgCamSukuna2  from '../assets/roupas img/jjk/camiseta sukuna 2.jpg'
import imgCamDavid from '../assets/roupas img/animes/camiseta david.jpg'
import bgInstagram from '../assets/images/rectangle.png'
import iconInsta from '../assets/icons/instagram.png'
import imgChain from '../assets/images/chain.jpg'
import homi from '../assets/images/pexels-justin-l-u-c-k-5707180.jpg'
import muieInsta from '../assets/images/pexels-th-team-7516447.jpg'
import modeloRosa from '../assets/images/modelo rosa 2.webp'
import imgFooter from '../assets/images/bgfooter.jpg'
import React from 'react';

import { Link } from 'react-router-dom';


export default function landing() {


  return (
    <section className='landing__page'>
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

    <img src={bgPrincipal} className="bg__principal"/>
    <section class="banner__principal">
        <div class="text__principal">
        <h1 class="texto1">Estamos abrindo</h1> 
        <h1 class="texto2">caminho para uma</h1>  
        <h1 class="texto3">nova era da  
        <span>moda</span></h1>
        </div>
       <img src={mulherBanner} alt="moça do banner" class="mulher__banner"/>
    </section>

    <section class="icons_principais">
        <img src={caminhao} alt="caminhao-de-entrega" class="icon__frete"/>
        <div class="text__icons">
        <h2 class="frete">Frete Grátis</h2>
        <p>em todo o brasil</p>
        </div>
        <img src={pix} alt="pix" class="icon__pix"/>
        <div class="text__icons">
        <h2 class="pix">5% de Desconto</h2>
        <p>para pagamentos com Pix</p>
        </div>
        <img src={cartao} alt="cartao" class="icon__cartao"/>
        <div class="text__icons">
        <h2 class="cartao">Até 10X sem juros</h2>
        <p>Acima de R$299</p>
        </div>
    </section>

    <section class="animes__card">
        <div class="container__animes">
        <div class="figures">
        <a href="/jujutsu"><img src={jujutsuLogo} alt="jujustu" class="jujutsu"/></a>
        </div>  
        <div class="figures">
        <a href="/atack"><img src={atackLogo} alt="atackontitans" class="atackontitans"/></a>
        </div>
        <div class="figures">
        <a href="/demon"><img src={demonLogo} alt="ds" class="demon"/></a>
        </div>
        </div>
    </section>

    <h2 className="titulo__categoria">Categorias</h2>
    <section class="sessao__categorias" id="Categoria">
        <div class="container__images">
        <div class="img">
            <a href=""><img src={imgJaqeAtack} alt="jaqueta" class="jaquetas"/></a>
            <h3>jaquetas</h3>
        </div>  
        <div class="img">
            <a href=""><img src={imgMoletKukoshibo} alt="moletom" class="moletons"/></a>
            <h3>Moletons</h3>
        </div>
        <div class="img">
            <a href=""><img src={imgCamGojoModel} alt="masculino" class="masculino"/></a>
            <h3>Masculino</h3>
        </div>
        <div class="img">     
            <a href=""><img src={imgCamDocinhomodel} alt="feminino" class="feminino"/></a>
            <h3>feminino</h3>
        </div>
        <div class="img">     
            <a href=""><img src={imgChaveiroGojo} alt="acessorios" class="acessorios"/></a>
            <h3>Acessórios</h3>
        </div>
        <div class="img">     
            <a href=""><img src={imgSaiacCorrente} alt="saia" class="saias"/></a>
            <h3>Saias</h3>
        </div>   
        </div> 
    </section>
    
    <h2 className='ilustration__titulo'>Revolucionando a moda com nossos personagens favoritos</h2>
    <img className='roxo' src={purple}  alt='fundo roxo'/>
    <section class="images__ilustration">
            <div class="hokage">
                <img src={hokage} alt="hokage" class="hokage"/>
            </div>
            <div class="jiraya">
                <img src={blusa} alt="blusa__jiraya" class="blusa__jiraya"/>
            </div>
            <div class="otaku">
                <img src={otaku} alt="imagem_otaku" class="otaku"/>
            </div>
    </section>


        <h2 className='titulo__colecao'>Coleções</h2>
    <section class="sessao__colecao" id="colecao">
        <div class="container__colecao">
        <div>
            <a href=""><img src={ftAKi} alt="chainsaw" class="chainsaw"/></a>
            <p>Chainsaw-Man</p>
        </div>
        <div>
            <a href=""><img src={imgUsui2} alt="usui" class="usui"/></a>
            <p>Demon Slayer</p>
        </div>
        <div>
            <a href=""><img src={imgCamDocinhomodel} alt="docinho" class="docinho"/></a>
            <p>Meninas Super-Poderosas</p>
        </div>
        <div>
            <a href=""><img src={imgCamDavid} alt="cyber"/></a>
            <p>Cyberpunk Edge Runners</p>
        </div>
        <div>
            <a href=""><img src={imgCamPretaEren} alt="snk"/></a>
            <p>Atack on Titans</p>
        </div>
        <div>
            <a href=""><img src={imgSaiacCorrente} alt="saia"/></a>
            <p>Korean</p>
        </div>
        <div>
            <a href=""><img src={imgCamMeninaVer} alt="feminina"/></a>
            <p>Feminino</p>
        </div>
        <div>
            <a href=""><img src={imgCamSukuna2} alt="jjk"/></a>
            <p>Jujutsu Kaizen</p>
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
</section>
  );
}
