import './style.css';
import React/*, {useState}*/ from 'react';
//import { Icon } from "@iconify/react";
import twitchIcon from '../../assets/twitchIconHeader.png';
import twitterIcon from '../../assets/twitterIconHeader.png';
import facebookIcon from '../../assets/fbIconHeader.png';
import udgEdited from '../../assets/UDGedited.png';
import ComponentMenu from '../Drawer';
import HamburgerMenu from 'react-hamburger-menu';
//import { Grid, Cell } from 'baseui/layout-grid';

var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;
var scroll    = Scroll.animateScroll;



class Initial extends React.Component  {

        state = {
            index: 0,
            visible: false,
        };

        

        scrollToTop = () => {
            scroll.scrollToTop();
        }
        scrollTo = (e, offset) => {
            scroller.scrollTo(e, {
                
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: offset,
                });
        };

        

        handleClick() {
            this.setState({
                open: !this.state.open
            });
        }

        
        render() {

            

            return (
                        /**/
                            
                            <div className="header-container">
                                

                                        
                                <header>
                                

                                <ComponentMenu open={this.state.open} handler={this.handleClick.bind(this)} />
                                <div style={{cursor:"pointer"}}>
                                <HamburgerMenu
                                    isOpen={this.state.open}
                                    menuClicked={this.handleClick.bind(this)}
                                    width={25}
                                    height={22}
                                    strokeWidth={3}
                                    rotate={0}
                                    color='white'
                                    borderRadius={3}
                                    animationDuration={0.5}
                                    className="hamburguer-icon"
                                    />
                                </div>
                                

                                

                                    <div className="btn-logo-container">
                                        <button type="submit" className="header-button" onClick={ () => this.scrollTo("form_element", 35)}>Inscreva-se</button>

                                    </div>

                                    
                                    


                                    <div className="under-dog-container" onClick={this.scrollToTop} >
                                            <img alt="Logo" src={udgEdited}/>
                                            <p>Underdog Gaming </p>
                                            
                                    </div>
                                    <div className="icons-container"> 
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        < img   src = {facebookIcon} alt="Facebook" />
                                        </a>
                                        <a href="https://www.twitter.com/"  target="_blank" rel="noopener noreferrer">
                                        < img   src = {twitterIcon} alt="Twitter" />
                                        </a>
                                        <a href="https://www.twitch.tv/"  target="_blank" rel="noopener noreferrer">
                                        < img   src = {twitchIcon} alt="Twitch" />
                                        </a>
                                    </div>
                                        
                                    
                        
                                    
                                    
                                </header> 

                                
                                
                            </div>
            );
        };
        
        
}
export default Initial;
