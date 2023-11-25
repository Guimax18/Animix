import './atack.scss';
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/perfil.png'
import bgPrincipal from '../assets/images/bk snk.jpg'
import logoAtack from '../assets/logo img/logo snk 3.png'


import bgInstagram from '../assets/images/rectangle.png'
import iconInsta from '../assets/icons/instagram.png'
import imgFooter from '../assets/images/bgfooter.jpg'
import imgChain from '../assets/images/chain.jpg'
import homi from '../assets/images/pexels-justin-l-u-c-k-5707180.jpg'
import muieInsta from '../assets/images/pexels-th-team-7516447.jpg'
import modeloRosa from '../assets/images/modelo rosa 2.webp'
import { Link } from 'react-router-dom';


export default function Atack() {


  return (
    <div className='pagina-atack'>
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

    <img className='bg__principal' src={bgPrincipal} alt='imagem de shingeki' />
    <section class="banner__principal">
        <div class="text__principal">
            <h1 class="texto1">Coleção Atack on Titans</h1> 
        </div>
    </section>

    <div class="logo__ilustration">
        <img src={logoAtack} alt="kny"/>
    </div>

    <section class="sessao__colecao">
        <div class="container__colecao">
        <div>
            <a href=""><img src="/Assets/roupas img/snk/camiseta preta.jpg" alt="camisa_sukuna2" class="camisa_sukuna2"/></a>
            <p>Camiseta Tropa de exploração</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/camiseta eren.jpg" alt="usui" class="usui"/></a>
            <p>Camiseta Eren</p>
            <p>R$45</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/jaqueta modelox.webp" alt="docinho" class="docinho"/></a>
            <p>jaqueta Tropa de Exploração</p>
            <p>R$220</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/moletom.jpg" alt="cyber"/></a>
            <p>Moletom Tropa de Exploração</p>
            <p>R$120</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/camiseta levi.jpg" alt="snk"/></a>
            <p>Camiseta Levi</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/capa.jpg" alt="capa" class="capa"/></a>
            <p>Capa Tropa de Exploração</p>
            <p>R$75</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/moletom 1.jpg" alt="moletom_1" class="moletom_1"/></a>
            <p>Moletom Atack on Titans</p>
            <p>R$110</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/camiseta_all_snk.png" alt="jjk"/></a>
            <p>Camiseta Eren, Mikasa e Levi</p>
            <p>R$60</p>
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
  );
  
}
