import React from 'react';
import twitchIcon from '@iconify/icons-mdi/twitch';
import instagramIcon from '@iconify/icons-mdi/instagram';
import facebookIcon from '@iconify/icons-cib/facebook';
import { Icon } from "@iconify/react";
import './Footer.css';

class Footer extends React.Component{

    render() {


        
        return(
           


            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        
                    <h4>Visite também</h4>
                        <div className="ccl">
                            
                            
                                <a href="" id="link"><h4>Ouro</h4></a>
                                <a href="" id="link"><h4>Platina</h4></a>
                                <a href="" id="link"><h4>Diamante</h4></a>
                                <a href="" id="link"><h4>Geral</h4></a>
    
                            
                        </div>

                        <h4>Nossas redes sociais </h4>
                        <div className="col">
                            
                            
                            
                            <button className="btn-pages">
                                <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">< Icon  icon = {twitchIcon} color="#000" width="5vh" height="3.9vh" className="icons"/></a>
                                    </button>
                                <button className="btn-pages">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">< Icon  icon = {facebookIcon} color="#000" width="5vh" height="3.9vh" className="icons"/></a>
                                    </button>
                                <button className="btn-pages" >
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">< Icon  icon = {instagramIcon} color="#000" width="5vh" height="3.9vh" className="icons"/></a>
                                    </button>
    
                            
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
            </div>
        )

    }
    
}export default Footer;
