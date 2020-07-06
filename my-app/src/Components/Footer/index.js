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
                        
    
                        <div className="ccl">
                            <h4>Visite também</h4>
                            <ul className="list-unstyled">
                                <li>Ouro</li>
                                <li>Platina</li>
                                <li>Diamante</li>
                                <li>Geral</li>
    
                            </ul>
                        </div>
    
                        <div className="col">
                            <h4>Nossas redes sociais </h4>
                            <ul className="list-unstyled">
                            
                            <li><button className="btn-pages">
                                <a href="">< Icon  icon = {twitchIcon} color="#000" width="5vh" height="3.9vh" className="icons"/></a>
                                    </button></li>
                                <li><button className="btn-pages">
                                <a href="">< Icon  icon = {facebookIcon} color="#000" width="5vh" height="3.9vh" className="icons"/></a>
                                    </button></li>
                                <li><button className="btn-pages" >
                                <a href="">< Icon  icon = {instagramIcon} color="#000" width="5vh" height="3.9vh" className="icons"/></a>
                                    </button></li>
    
                            </ul>
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
