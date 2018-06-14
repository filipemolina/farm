import React, { Component } from 'react'
import styled from 'styled-components'

const bgColor = "#f1f1f1"
const altura = 16
const largura = 12
const profundidade = 1

const Cubo = styled.div`
	width: ${largura}vw;
	height: ${altura}vw;
	position: absolute;
	top: 50%;
	left: 5vw;
	margin-top: -8vw;
	box-shadow: 5px 5px 40px;
	cursor: pointer;

	perspective: 600px;
	transform-style: preserve-3d
`

const Face = styled.div`
	position: absolute;

	&.top {
		transform: translate3d(0, 0, ${profundidade}vw);
		background-size: cover;
		width: inherit;
		height: inherit;
	}

	&.bottom {
		transform: rotateY(180deg);
		background-size: cover;
		width: inherit;
		height: inherit;
	}

	&.front {
		transform: rotateX(-90deg);
    background-color: ${bgColor};
    transform-origin: 100% 100%;
    width: inherit;
    height: ${profundidade}vw
    bottom: 0;
    left: 0;
	}

	&.back {
		transform: rotateX(90deg);
    background-color: ${bgColor};
    transform-origin: 0% 0%;	
    width: inherit;
    height: ${profundidade}vw
	}

	&.right {
		transform: rotateY(90deg);
    background-color: ${bgColor};
    transform-origin: 100% 100%;
    height: inherit;
    width: ${profundidade}vw
    right: 0;
    bottom: 0;
	}

	&.left {
		transform: rotateY(-90deg);
    background-color: ${bgColor};
    transform-origin: 0% 0%;
    height: inherit;
    width: ${profundidade}vw
	}
`

class Deck extends Component {
	render(){

		const { comprar } = this.props

		return(
			<Cubo onClick={comprar}>
				<Face className="top" style={{ backgroundImage: 'url(/bg/back.jpg)' }}></Face>
				<Face className="bottom"></Face>
				<Face className="front"></Face>
				<Face className="back"></Face>
				<Face className="right"></Face>
				<Face className="left"></Face>
			</Cubo>
		)
	}
}

export default Deck