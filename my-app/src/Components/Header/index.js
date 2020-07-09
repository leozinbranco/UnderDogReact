import './style.css';
import React/*, {useState}*/ from 'react';
import { Icon } from "@iconify/react";
import twitchIcon from '@iconify/icons-mdi/twitch';
import twitterIcon from '@iconify/icons-mdi/twitter';
import facebookIcon from '@iconify/icons-cib/facebook';
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
                                        < Icon  icon = {facebookIcon} color="#FFFFFF" width="9vh" height="3.9vh" className="testeIcon"/>
                                        </a>
                                        <a href="https://www.twitter.com/"  target="_blank" rel="noopener noreferrer">
                                        < Icon  icon = {twitterIcon} color="#FFFFFF" width="9.5vh" height="4vh"/>
                                        </a>
                                        <a href="https://www.twitch.tv/"  target="_blank" rel="noopener noreferrer">
                                        < Icon  icon = {twitchIcon} color="#FFFFFF" width="9vh" height="3.9vh"/>
                                        </a>
                                    </div>
                                        
                                    
                        
                                    
                                    
                                </header> 

                                
                                
                            </div>
            );
        };
        
        
}
export default Initial;
