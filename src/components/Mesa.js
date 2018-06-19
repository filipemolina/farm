import React, { Component } from 'react'
import styled from 'styled-components'

// Styled Components

const StldMesa = styled.div`
	width: 100vw;
	height: 230vh;
	background-color: blue;
	transform: perspective(980px) rotateX(50deg) translateZ(-70px) translateY(-110vh) ${props => props.virada ? "rotateZ(180deg)" : ""};
  perspective: 10000px;
  position: relative;
  background-image: url(/bg/madeira.jpg);
  transform-style: preserve-3d;
  perspective-origin: 50%;
  transition: all 1.5s ease-in-out;

  &:before{
  	content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    height: 100px;
    width: 100vw;
    transform: rotateX(-90deg);
    transform-style: preserve-3d;
    transform-origin: 0 0;
    background-image: url(/bg/madeira.jpg);
    background-color: red;
    z-index: -2;
  }

  &:after{
    content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    top: 0;
    height: 100px;
    width: 100vw;
    transform: rotateX(-90deg);
    transform-style: preserve-3d;
    transform-origin: 0 0;
    background-image: url(/bg/madeira.jpg);
    background-color: red;
    z-index: -2;
  }
`
const classAbaEsquerda = {
  height: 'inherit',
  width: '100px',
  position: 'absolute',
  top: '0',
  left: '-100px',
  transformOrigin: '100% 100%',
  transformStyle: 'preserve-3d',
  transform: 'rotateY(-90deg)',
  zIndex: '-1',
  backgroundImage: 'url(/bg/madeira.jpg)',
}

const classAbaDireita = {
  height: 'inherit',
  width: '100px',
  position: 'absolute',
  top: '0',
  right: '-100px',
  transformOrigin: '0% 0%',
  transformStyle: 'preserve-3d',
  transform: 'rotateY(90deg)',
  zIndex: '-1',
  backgroundImage: 'url(/bg/madeira.jpg)',
}

const classVirada = {
  transform: 'rotateZ(180deg)'
}

class Mesa extends Component {
	render(){

    const { virada } = this.props

		return(
			<StldMesa virada={virada}>
				{this.props.children}
        <div style={classAbaEsquerda}></div>
        <div style={classAbaDireita}></div>
			</StldMesa>
		)
	}
}

export default Mesa