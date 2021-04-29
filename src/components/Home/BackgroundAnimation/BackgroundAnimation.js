import { Component } from 'react';
import './BackgroundAnimation.css';
import anime from 'animejs';
export default class BackgroundAnimation extends Component {

    componentDidMount(){
        anime({
            targets: '#svg-1>path', 
            d: [
              { value: 'M146,447s-10-98,66-109-1-111,121-64,98,116,66,149,19,90-45,105-117,42-177,3C177,531,145,470,146,447Z' },
              { vlaue: 'M141,470s-26-122,50-133,31-120,153-73,97,124,65,157,5,83-59,98-92,80-152,41C198,560,140,493,141,470Z'}
            ], 
            rotateZ:'40deg',
            scale:'0.9',
            easing: 'easeInOutQuad', 
            duration: 3000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#svg-2>path', 
            d: [
              { value: 'M146,447s-10-98,66-109-1-111,121-64,98,116,66,149,19,90-45,105-117,42-177,3C177,531,145,470,146,447Z' },
              { vlaue: 'M141,470s-26-122,50-133,31-120,153-73,97,124,65,157,5,83-59,98-92,80-152,41C198,560,140,493,141,470Z'}
            ], 
            rotateZ:'-10deg',
            scale:'0.9',
            easing: 'easeInOutQuad', 
            duration: 3000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#svg-3>path', 
            d: [
              { value: 'M146,447s-10-98,66-109-1-111,121-64,98,116,66,149,19,90-45,105-117,42-177,3C177,531,145,470,146,447Z' },
              { vlaue: 'M141,470s-26-122,50-133,31-120,153-73,97,124,65,157,5,83-59,98-92,80-152,41C198,560,140,493,141,470Z'}
            ], 
            rotateZ:'-10deg',
            scale:'0.9',
            easing: 'easeInOutQuad', 
            duration: 3000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#svg-4>path', 
            d: [
              { value: 'M146,447s-10-98,66-109-1-111,121-64,98,116,66,149,19,90-45,105-117,42-177,3C177,531,145,470,146,447Z' },
              { vlaue: 'M141,470s-26-122,50-133,31-120,153-73,97,124,65,157,5,83-59,98-92,80-152,41C198,560,140,493,141,470Z'}
            ], 
            rotateZ:'-10deg',
            scale:'0.9',
            easing: 'easeInOutQuad', 
            duration: 3000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#svg-5>path', 
            d: [
              { value: 'M146,447s-10-98,66-109-1-111,121-64,98,116,66,149,19,90-45,105-117,42-177,3C177,531,145,470,146,447Z' },
              { vlaue: 'M141,470s-26-122,50-133,31-120,153-73,97,124,65,157,5,83-59,98-92,80-152,41C198,560,140,493,141,470Z'}
            ], 
            rotateZ:'5deg',
            scale:'0.8',
            easing: 'easeInOutQuad', 
            duration: 5000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
    }

    render() {
        return (
            <div className="background-animation">
                <svg id="svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-2" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-2" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="svg-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-2" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="svg-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-2" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="svg-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-2" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>

                

            </div>
        )
    }  
}