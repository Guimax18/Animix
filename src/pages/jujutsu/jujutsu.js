import '../jujutsu/jujutsu.scss';
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/perfil 1.png'
import bgprincipal from '../assets/images/JujutsuKaisenbanner.png'
import jujutsuLogo from '../assets/logo img/logo jjk.jpg'
import imgCamSukuna2  from '../assets/roupas img/jjk/camiseta sukuna 2.jpg'
import imgCamSukuna1 from '../assets/roupas img/jjk/camiseta sukuta.jpg'
import imgCamMegume from '../assets/roupas img/jjk/camiseta megume.jpg'
import imgCamYuta from '../assets/roupas img/jjk/camiseta yuta.jfif'
import imgCamSukuna3 from '../assets/roupas img/jjk/camiseta sukuna 3.jpg'
import imgMolSukuna from '../assets/roupas img/jjk/moletom sukuna.jpg'
import imgCamNobara from '../assets/roupas img/jjk/camiseta nobara.jpg'
import imgCamToji from '../assets/roupas img/jjk/camiseta pai do megume.jpg'
import bgInstagram from '../assets/images/rectangle.png'
import iconInsta from '../assets/icons/instagram.png'
import imgFooter from '../assets/images/bgfooter.jpg'
import imgChain from '../assets/images/chain.jpg'
import homi from '../assets/images/pexels-justin-l-u-c-k-5707180.jpg'
import muieInsta from '../assets/images/pexels-th-team-7516447.jpg'
import modeloRosa from '../assets/images/modelo rosa 2.webp'
import { Link } from 'react-router-dom';


export default function Jujutsu() {


  return (
    <div className='pagina-jujutsu'>
    <header Class="cabecalho">
        <a href="/"><img src={logo} alt="logo_principal" class="logo"/></a>
            <nav>
                <ul class="navbar">
                    <li><a href="#Categoria">Categoria</a></li>
                    <li><a href="#colecao">Coleção</a></li>
                    <li><a href="../pages/sobre/Sobre.js">Sobre</a></li>
                    <div class="search-container">
                        <input type="text" class="search-box"/>
                        <div class="search-icon"><img src={lupa} alt="lupa"/></div>
                      </div>
                </ul>
            </nav>
        <div class="menumb">
        <div class="icons__header">    
            <a href=""><img class="sacola" src={sacola} alt="sacola de compras"/></a>
            <a href="/Login Page - ANIMIX/Login Page - ANIMIX/login.html"><img class="perfil" src={perfil} alt="icone de perfil"/></a>
        </div>  
        <div class="bx bx-menu" id="menu-icon">
            <img src="/assets/icons/menu-aberto.png" alt="menumb" class="menu-icon"/>
        </div>  
        </div>
    </header>

    <img className='bg__principal' src={bgprincipal} alt='imagem de jujutsu' />
    <section class="banner__principal">
        <div class="text__principal">
            <h1 class="texto1">Coleção Jujutsu Kaizen</h1> 
        </div>
    </section>


    <div class="logo__ilustration">
        <img src={jujutsuLogo} alt="kny"/>
    </div>


    <section class="sessao__colecao">
        <div class="container__colecao">
        <div>
            <a href=""><img src={imgCamSukuna2} alt="camisa_sukuna2" class="camisa_sukuna2"/></a>
            <p>Camiseta Sukuna Santuário</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src={imgCamSukuna1} alt="camiseta_sukuna" class="camiseta_sukuna"/></a>
            <p>Camiseta Sukuna</p>
            <p>R$45</p>
        </div>
        <div>
            <a href=""><img src={imgCamMegume} alt="camiseta_megume" class="camiseta_megume"/></a>
            <p>Camiseta Megume Fushigurou</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src={imgCamYuta} alt="camiseta_sukuna3" class="camiseta_sukuna3"/></a>
            <p>Camiseta Yuta e Rika</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src={imgCamSukuna3} alt="moletom_sukuna" class="moletom_sukuna"/></a>
            <p>Camiseta Itadori e Sukuna</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src={imgMolSukuna} alt="saia"/></a>
            <p>Moletom Sukuna</p>
            <p>R$80</p>
        </div>
        <div>
            <a href=""><img src={imgCamNobara} alt="camiseta_nobara" class="camiseta_nobara"/></a>
            <p>Camiseta Nobara</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src={imgCamToji} alt="camiseta_toji" class="camiseta_toji"/></a>
            <p>Camiseta Toji</p>
            <p>R$50</p>
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
