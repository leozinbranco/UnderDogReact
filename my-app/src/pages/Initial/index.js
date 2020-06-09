import './style.css';
import React/*, {useState}*/ from 'react';
import { Icon } from "@iconify/react";
import twitchIcon from '@iconify/icons-mdi/twitch';
import twitterIcon from '@iconify/icons-mdi/twitter';
import facebookIcon from '@iconify/icons-cib/facebook';
//import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
//import { Link, useHistory } from 'react-router-dom'
//import api from '../../services/api'; //api
/*
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })
    
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }*/

    /*class Card extends React.Component {

        constructor() {
        super();
        this.mediaQuery = {
            desktop: 1200,
            tablet: 768,
            phone: 576,
        };
        this.state = {
            windowWidth: null
        };
        }

        componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({windowWidth: document.body.clientWidth})
        });
        }
        
        render() {
            return (
                <div style={{
                    width: this.state.windowWidth > this.mediaQuery.phone
                    ? '50%'
                    : '100%',
                    //more styling :)
                }}>
        </div>
            );
        }
    }*/


export default function Initial() {

        
        
        return (
            /**/

               
            <div className="initial-container" >
            <div className="header-container">
                <header>
                    <div className="btn-logo-container">
                        <button type="submit" className="header-button">Inscreva-se</button>
                    </div>
                    <div className="icons-container"> 
                        <a href="https://www.facebook.com/" target="_blank" >
                        < Icon  icon = {facebookIcon} color="#000" width="9vh" height="3.9vh" className="testeIcon"/>
                        </a>
                        <a href="https://www.twitter.com/"  target="_blank">
                        < Icon  icon = {twitterIcon} color="#000" width="9vh" height="3.9vh"/>
                        </a>
                        <a href="https://www.twitch.tv/"  target="_blank">
                        < Icon  icon = {twitchIcon} color="#000" width="9vh" height="3.9vh"/>
                        </a>
                    </div>
                        
                    
        
                    
                    
                </header> 
            </div>  
            
    

            
                <div className="white-container">
                    <div className="text-container">
                        <p className="title-p">
                            Campeonato Underdog Gaming
                            <br></br> League of Legends 
                        </p>
                        <p className="text-p">
                        A Underdog Gaming (UDG) é uma organização de e-sports que valoriza o cenário brasileiro e seu futuro, 
                        sabemos que em um momento atual não é tão simples conseguir visibilidade e oportunidades, porém também
                        sabemos que existem vários potenciais latentes dentro do cenário, desde jogadores que precisam ser 
                        lapidados até coaches, analistas e casters que vagam pelo anonimato.
                        
                        <br>
                        
                        </br><br>
                        
                        </br> Como consequência desses fatos e
                        buscando um método para poder aproveitar todo esse potencial, nós, da Underdog Gaming, estaremos patrocinando
                        a “Primeira Edição do Campeonato UDG de League of Legends”. Nosso propósito será de prover um campeonato 
                        competitivo para dar visibilidade aos mais diversos jogadores e coaches que se encontram pelo cenário.
                        </p>
                    </div>
                        
                        <button type="submit"  className="btnTeste"> Como funciona? </button>              
                </div>

                <div className="white-container">
                    <div className="grey-container">
                        lalalalalal
                    </div>
                    <div className="grey-container">
                    lalalalalal
                    </div>
                    <div className="grey-container">
                    lalalalalal
                    </div>

                </div>

                
                <div className="white-container">


                </div>

                
                <div className="white-container">


                </div>
            
            

        
        </div>

 
                
                    /*
            constructor(props) {
                super(props);
                this.state = {
                value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
                };

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }


            <form onSubmit={this.handleSubmit}>
                <label>
                Dissertação:
                <textarea value={this.state.value} onChange={this.handleChange} />    <-- Deixar o testo state.value até o usuário mudar(onChange)
                </label>                                                                  quando o Usuário mudar, ira disparar a função handleChange, 
                <input type="submit" value="Enviar" />                                    que é Esconder, dar BIND para o usuário escrever a Dissertação,  
            </form>                                                                       no caso.
      */ 



        );
        
}