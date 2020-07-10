import React from 'react';
import './Footer.css';
import twitchIcon from '../../assets/twitchIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import igIcon from '../../assets/instagramIcon.png';

class Footer extends React.Component{

    render() {


        
        return(
           

            
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        
                    <h4>Visite também</h4>
                        <div className="ccl">
                            
                                <a href="/" id="link"><h4>Nossa Loja</h4></a>
                                <a href="/" id="link"><h4>Ouro</h4></a>
                                <a href="/" id="link"><h4>Platina</h4></a>
                                <a href="/" id="link"><h4>Diamante</h4></a>
                                <a href="/" id="link"><h4>Geral</h4></a>
    
                            
                        </div>

                        <h4>Nossas redes sociais </h4>
                        <div className="col">
                            
                                <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">< img src={twitchIcon} alt="Twitch"/></a>
                                    
                                
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">< img src={facebookIcon} alt="Facebook"/></a>
                                   
                                
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">< img src={igIcon} alt="Instagram"/></a>
                                    
    
                            
                        </div>  
                        <hr/>
                        <div className="row">
                            <p className="col-sm">
                            Underdog Gaming - CNPJ: 22.214.318/0001-08
                                <br></br> 
                                &copy;2020
                            </p>
                        </div>
                    </div>  
                </div>
            </footer>
        )

    }
    
}export default Footer;
