import '../login/Login.scss';
import bgLogin from '../assets/images/Group100.png'
import facebook from '../assets/icons/simbolo-de-aplicativo-do-facebook.png'
import google from '../assets/icons/google.png'
import { Link } from 'react-router-dom';


export default function Login() {


  return (
    <div className='pagina-login'>
    <main class="main">
        <div class="container">
            <section class="wrapper">
                <div class="heading">
                    <h1 class="text text-large">Login ADM</h1>
                </div>
                <form action="" name="login" class="form">
                    <div class="input-control">
                        <p class="email">E-mail</p>
                <input type="text"/>
            </div>
            <div class="input">
                <p class="senha">Senha</p>
                <input type="password" />
            </div>
                    <div class="input-control">
                        <a href="#" class="text text-links">Esqueceu a senha?</a>
                    </div>
                   <button type="submit"><a href="/adm">Entrar</a></button>   
                </form>
                <div class="striped">
                    <p>______________________</p>
                    <p>OU</p>
                    <p>______________________</p>
                    
                </div>
                <div class="method">
                    <div class="login-form-footer">
                        <a href="#">
                          <img src={facebook} alt="Facebook" class="face"/></a>
                        <a href="#">
                          <img src={google} alt="Google" class="google"/></a>
                      </div>
                </div>
            </section>
        </div>
    </main>
    <img src={bgLogin} alt='fundo de anime' className='bgPrincipal'/>
    </div>
  );
  
}
