import './Sobre.scss';
import bgPrincipal from '../assets/images/bkjjk1.png'
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/perfil.png'
import jjkFigures from '../assets/images/Picsart_23-09-27_00-01-53-068 1.png'
import bgInstagram from '../assets/images/rectangle.png'
import iconInsta from '../assets/icons/instagram.png'
import imgChain from '../assets/images/chain.jpg'
import homi from '../assets/images/pexels-justin-l-u-c-k-5707180.jpg'
import muieInsta from '../assets/images/pexels-th-team-7516447.jpg'
import modeloRosa from '../assets/images/modelo rosa 2.webp'
import imgFooter from '../assets/images/bgfooter.jpg'
import { Link } from 'react-router-dom';


export default function Sobre() {


  return (
    <div className='pagina-sobre'>
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

    <img className='bg__principal' src={bgPrincipal} alt='imagem de jujutsu'/>
    <section class="banner__principal">
        <div class="text__principal">
            <h1 class="texto1">Sobre Nós</h1> 
        </div>

        <div class="texto__geral">
            <div class="tx1">
                <h3>Animix: sua loja de produtos da cultura pop japonesa de qualidade!</h3>
                <p>Se você é um fã de verdade de animes e mangás, nossa loja é perfeita pra você! Em nosso catálogo, você encontra os melhores produtos dos seus animes e mangás favoritos. Além de poder colocionar bonecos funko dos seus personagens favoritos. E, temos que admitir, eles são tão fofinhos!</p>
                <p>A Animix é uma loja feita de fãs para fãs, na qual podemos expressar nosso amor pela cultura pop japonesa através de muita criatividade, trazendo produtos originais, exclusivos, com qaulidade e para todos os bolsos.</p>
            </div>
            <div class="tx2">
                <h3>Confiabilidade</h3>
                <p>Gostou dos nossos produtos, mas não tem certeza se a nossa loja é confiável? Não tenha mais dúvidas! Todos os seus dados são criptografados e mantidos em sigilo de acordo com o regulamento dos órgãos de segurança digital. Além disso, seu pagamento é administrado pelas melhores plataformas de cartão de crédito. Portanto, não se preocupe, nossa loja é completamente segura!</p>
            </div>
            <div class="tx3">
                <h3>Qualidade</h3>
                <p>Qualidade? Sim ou com certeza?!</p>
                <p>Nosso trabalho é oferecer o melhor para você, sendo assim, trabalhamos apenas com os melhores materiais e tecidos de roupas para que você se sinta bem e confortável. </p>
                <p>- Moletons 3 cabos protegem qualquer um do frio, com sua estrutura de três faces: frente e meio com meia malha e a felpa (forro) com fios mais grossos, proporcionando alta estabilidade dimensional e durabilidade.</p>
                <p>- Camisetas fio 30, tecido macio e confortável para roupas casuais. 100% algodão puro de alta qualidade, resistente e durável, com textura suave e agradável ao toque.</p>
            </div>
        </div>    
    </section>

    <div class="img__jjk">
        <img src={jjkFigures} alt="jujutsu kaizen"/>
    </div>

    
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
