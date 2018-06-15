import React, { Component } from 'react'
import styled from 'styled-components'

const altura = 3
const largura = 3
const profundidade = 3

const Container = styled.div`
	width: ${largura}vw;
	height: ${altura}vw;
	position: absolute;
	bottom: 2vw
	right: 6vw;
	margin-top: -8vw;
	box-shadow: 5px 5px 40px;
	cursor: pointer;
	z-index: 10;

	perspective: 1000px;
	perspective-origin: 50%;
	transition: all 0.2s linear;
	transform-style: preserve-3d
`

const Face = styled.div`
	position: absolute;
	width: inherit;
	height: inherit;
	border: 1px solid #555;
	z-index: 10;

	&.top {
		transform: translate3d(0, 0, ${profundidade}vw);
		background-size: cover;

	}

	&.bottom {
		transform: rotateY(180deg);
		background-size: cover;
	}

	&.front {
		transform: rotateX(-90deg);
    transform-origin: 100% 100%;
    bottom: 0;
    left: 0;
	}

	&.back {
		transform: rotateX(90deg);
    transform-origin: 0% 0%;	
	}

	&.right {
		transform: rotateY(90deg);
    transform-origin: 100% 100%;
    right: 0;
    bottom: 0;
	}

	&.left {
		transform: rotateY(-90deg);
    transform-origin: 0% 0%;
	}
`

class Felicidade extends Component {
	render(){

		const { bgColor, nivel } = this.props
		const translate = (nivel - 1) * -5

		return(
			<Container style={{ transform: `translateY(${translate}vw)` }}>
				<Face className="top" style={{ backgroundColor: bgColor }} />
				<Face className="bottom" style={{ backgroundColor: bgColor }} />
				<Face className="left" style={{ backgroundColor: bgColor }} />
				<Face className="right" style={{ backgroundColor: bgColor }} />
				<Face className="front" style={{ backgroundColor: bgColor }} />
				<Face className="back" style={{ backgroundColor: bgColor }} />
			</Container>
		)
	}
}

export default Felicidade