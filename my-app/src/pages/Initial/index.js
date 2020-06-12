import './style.css';
import React/*, {useState}*/ from 'react';
import { Icon } from "@iconify/react";
import twitchIcon from '@iconify/icons-mdi/twitch';
import twitterIcon from '@iconify/icons-mdi/twitter';
import facebookIcon from '@iconify/icons-cib/facebook';
import udgEdited from '../../assets/UDGedited.png';
import { Tab, Tabs }from '@material-ui/core';
/*import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';*/
import SwipeableViews from 'react-swipeable-views';
//import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
//import { Link, useHistory } from 'react-router-dom'
//import api from '../../services/api'; //api
/**/

        const styles = {
            tabs: {
            backgroundColor: 'transparent',
            
            },
            slide: {
            padding: 15,
            minHeight: 100,
            color: '#000',
            },
        };


class Initial extends React.Component  {

        state = {
            index: 0,
        };
        
        handleChange = (event, value) => {
        this.setState({
            index: value,
        });
        };
    
        handleChangeIndex = index => {
        this.setState({
            index,
        });
        };
        
        render() {

            const { index } = this.state; 

            return (
                        /**/

                        <div className="initial-container" >
                        <div className="header-container">
                            <header>
                                <div className="btn-logo-container">
                                    <button type="submit" className="header-button">Inscreva-se</button>
                                </div>
                                <div className="under-dog-container">
                                        
                                        
                                        <img alt="Logo" src={udgEdited}/>
                                        Underdog Gaming
                                        
                                </div>
                                <div className="icons-container"> 
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    < Icon  icon = {facebookIcon} color="#FFFFFF" width="9vh" height="3.9vh" className="testeIcon"/>
                                    </a>
                                    <a href="https://www.twitter.com/"  target="_blank" rel="noopener noreferrer">
                                    < Icon  icon = {twitterIcon} color="#FFFFFF" width="9vh" height="3.9vh"/>
                                    </a>
                                    <a href="https://www.twitch.tv/"  target="_blank" rel="noopener noreferrer">
                                    < Icon  icon = {twitchIcon} color="#FFFFFF" width="9vh" height="3.9vh"/>
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

                                <p className="gray-top-text">
                                O campeonato acontecerá entre os dias 00/00 e 00/00 seguindo às seguintes etapas:
                                </p>
                                
                                <section className="anchor-container">

                                    <Tabs value={index} centered onChange={this.handleChange}  style={styles.tabs} TabIndicatorProps={{style: {background:'#000'}}}>
                                        <Tab label="1ª Etapa" style={{width:'100%', fontSize: 30}}/>
                                        <Tab label="2ª Etapa" style={{width:'100%', fontSize: 30}}/>
                                        <Tab label="3ª Etapa" style={{width:'100%', fontSize: 30}}/>
                                    </Tabs>
                                        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>

                                        <div className="grey-container" style={Object.assign({}, styles.slide)} >
                                        A primeira etapa será composta de confrontos direto no formato de mata-mata e melhor de
                                        um jogo, até chegarmos nos 8 melhores times.
                    
                                        </div>




                                        <div className="grey-container" style={Object.assign({}, styles.slide)} >
                                        Os 8 times serão
                                        divididos entre grupo A e grupo B, onde terão jogos de ida e volta com os outros times da
                                        chave, totalizando um total de 6 jogos por time.
                                        </div>


                                        <div className="grey-container" style={Object.assign({}, styles.slide)} >
                                        lalalalalal
                                        </div>
            

                                    </SwipeableViews>         

                                </section>

                                
                                
                                
                                

                            </div>

                            <div className="white-container"> 
                            

                            </div>

                            
                            <div className="white-container">
                                    <p className="title-p">
                                        Campeonato UDG
                                        
                                    </p>

                                    <p className="text-p">
                                    A Underdog Gaming (UDG) é uma organização de e-sports que valoriza o cenário brasileiro e seu futuro,
                                    sabemos que em um momento atual não é tão simples conseguir visibilidade e oportunidades, porém também
                                    sabemos que existem vários potenciais latentes dentro do cenário, desde jogadores que precisam ser lapidados
                                    até coaches, analistas e casters que vagam pelo anonimato.<br></br>
                                    Como consequência desses fatos e buscando um método
                                    para poder aproveitar todo esse potencial, nós, da Underdog Gaming, estaremos patrocinando a “Primeira Edição
                                    do Campeonato UDG de League of Legends”. Nosso propósito será de prover um campeonato competitivo para dar
                                    visibilidade aos mais diversos jogadores e coaches que se encontram pelo cenário e também fermentar o 
                                    cenário com uma proposta inovadora para aqueles que almejam em ser casters ou criadores de conteúdo.<br></br>
                                    Se nossos
                                    ideais e propósitos compactuam com alguma de suas ideias deem uma checada no que temos a falar nos tópicos abaixo,
                                    onde explicaremos um pouco mais detalhadamente o que temos em mente e também como rolará o campeonato.
                                    </p>
                                    

                            </div>

                            
                            <div className="white-container">
                            Você pode se inscrever em qualquer modalidade!!

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
        
        
}
export default Initial;
