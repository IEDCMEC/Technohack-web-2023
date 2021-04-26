import { Component } from 'react';
import './EventBackgroundAnimation.css';
import anime from 'animejs';
export default class BackgroundAnimation extends Component {

    componentDidMount(){
        anime({
            targets: '#esvg-1>path', 
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
            targets: '#esvg-2>path', 
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
            targets: '#esvg-3>path', 
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
            targets: '#esvg-4>path', 
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
            targets: '#esvg-5>path', 
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
          anime({
            targets: '#esvg-6>path',  
            rotateZ:'5deg',
            scale:'1',
            easing: 'easeInOutQuad', 
            duration: 5000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-7>path',  
            rotateZ:'5deg',
            scale:1.1,
            easing: 'easeInOutQuad', 
            duration: 5000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-8>path',  
            rotateZ:'5deg',
            scale:1.1,
            easing: 'easeInOutQuad', 
            duration: 5000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-9>path',  
            rotateZ:'10deg',
            easing: 'easeInOutQuad', 
            duration: 5000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-11>path',  
            rotateZ:'10deg',
            easing: 'easeInOutQuad', 
            duration: 7000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-12>path',  
            rotateZ:'10deg',
            easing: 'easeInOutQuad', 
            duration: 7000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-13>path',  
            rotateZ:'10deg',
            easing: 'easeInOutQuad', 
            duration: 7000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-14>path',  
            rotateZ:'10deg',
            easing: 'easeInOutQuad', 
            duration: 7000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
          anime({
            targets: '#esvg-15>path',  
            rotateZ:'10deg',
            easing: 'easeInOutQuad', 
            duration: 7000, 
            loop: true,
            elasticity:500,
            direction:'alternate'
          });
    }

    render() {
        return (
            <div className="event-background-animation">
                <svg id="esvg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="esvg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="esvg-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="esvg-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>
                <svg id="esvg-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M133,446s-18-101,58-112,19-121,141-74,128,109,96,142,4,119-60,134-144,18-204-21C164,515,132,469,133,446Z"/></svg>

                <svg id="esvg-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>
                <svg id="esvg-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.83 738.7"><path className="cls-1" d="M266,584c48-97,54-143,132-153s103,97,95,111-39.9,107.16-69,125c-31,19-48,52-118,19S266,584,266,584Z"/></svg>

            </div>
        )
    }  
}