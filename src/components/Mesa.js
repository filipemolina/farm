import React, { Component } from 'react'
import styled from 'styled-components'

// Styled Components

const StldMesa = styled.div`
	width: 100vw;
	height: 230vh;
	background-color: blue;
	transform: perspective(980px) rotateX(50deg) translateZ(-70px) translateY(-110vh);
  perspective: 10000px;
  position: relative;
  background-image: url(/bg/madeira.jpg);
  transform-style: preserve-3d;
  perspective-origin: 50%;

  &:before{
  	content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    height: 100px;
    width: 100vw;
    transition: all 0.5s linear;
    transform: rotateX(-70deg);
    transform-style: preserve-3d;
    transform-origin: 0 0;
    background-image: url(/bg/madeira.jpg);
    background-color: red;
  }
`
class Mesa extends Component {
	render(){
		return(
			<StldMesa>
				{this.props.children}
			</StldMesa>
		)
	}
}

export default Mesa