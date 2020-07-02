import './style.css';
import React/*, {useState}*/ from 'react';
import { Tab, Tabs}from '@material-ui/core';
import Header from '../../Components/Header';
//import { Grid, Cell } from 'baseui/layout-grid';




import SwipeableViews from 'react-swipeable-views';


var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;



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

        /*const menu = (
            <Menu onSelect={onSelect}>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem key="1">one</MenuItem>
            <Divider />
            <MenuItem key="2">two</MenuItem>
            </Menu>
        );

        function onSelect({ key }) {
            console.log(`${key} selected`);
        }
        function onVisibleChange(visible) {
            console.log(visible);
        }*/
        


class Initial extends React.Component  {

        state = {
            index: 0,
            visible: false,
        };

        /*show() {
            this.setState({ visible: true });
        };
    
        hide() {
            this.setState({ visible: false });
        };*/
        
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

        scrollTo = (e, offset) => {
            scroller.scrollTo(e, {
                
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: offset,
                });
        };

        


        
        render() {

            const { index } = this.state; 

            return (
                        /**/
                    
                        <div className="initial-container" >
                            
                            <Header/>

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
                                    
                                        <button type="submit"  className="btnTeste" onClick={ () => this.scrollTo("how_element", -50)}> Como funciona? </button>              
                                </div>
                            
                            <div className="white-container">
                                <Element name="how_element"> </Element>
                                    <p className="gray-top-text">
                                    O campeonato acontecerá entre os dias 00/00 e 00/00 seguindo às seguintes etapas:
                                    </p>
                                    
                                    <section className="anchor-container">

                                        <Tabs value={index} centered onChange={this.handleChange}  style={styles.tabs} TabIndicatorProps={{style: {background:'#FFFFFF'}}}>
                                            <Tab label="1ª Etapa" style={{width:'100%', fontSize: 30, color: '#FFFFFF'}}/>
                                            <Tab label="2ª Etapa" style={{width:'100%', fontSize: 30, color: '#FFFFFF'}}/>
                                            <Tab label="3ª Etapa" style={{width:'100%', fontSize: 30, color: '#FFFFFF'}}/>
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
                                        <Element name="form_element"> </Element>
                                </section>

                            </div>
                            

                            
                            <div className="white-container"> 
                            
                            
                                <p className="form-title-container">Você pode se inscrever em qualquer modalidade!!</p>
                                <div className="form-container">
                                    
                                        <div className="time-container"> 
                                        <p>Se você tem um time, queremos te conhecer. Preencha nosso formulário. </p>

                                        <button className="btnTeste" type="button" onClick={(e) => {e.preventDefault(); window.open('https://forms.gle/XK8p9zs6Awe1w87K6', "_blank");}}>Inscrever Time </button>
                                                                                
                                        
                                        </div>
                                        
                                    <div className="caster-container">
                                        <p> Se você é narrador, comentarista ou analista de jogo, queremos saber mais sobre você. Preencha nosso formulário.</p>
                                        
                                        <button className="btnTeste" type="button"   onClick={(e) => {e.preventDefault(); window.open('https://forms.gle/5m7iXiQzz5BPpzzA9', "_blank");}}>Inscrever Caster</button>
                                        
                                        
                                    </div>
                                </div>
                                

                            </div>


                        


                            
                                <footer className="footer-contacts-container">
                                        
                                        
                                            asdasdasd
                                        

                                </footer>
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
        };
        
        
}
export default Initial;
