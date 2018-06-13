import React, { Component } from 'react'
import styled from 'styled-components'

// Styled Components

const BotaoVirar = styled.a`
	display: none;
	position: absolute;
	cursor: pointer;
	width: 4vw;
	height: 4vw;
	z-index: 100;
	top: 11vh;
	left: 7vh;
	background-image: url(/icones/turn.png);
	background-size: 4vw;
	transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
`
const Imagem = styled.img`
	max-width: 100%;
	height: auto;
	box-shadow: #565656 5px 5px 10px;
	border-radius: 1vh;
	transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
`
const StldCarta = styled.div`
	width: 11vw;
	height: 15vw;
	margin-left: 0.5vw;
	cursor: pointer;
	position: relative;
	transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

	&:hover{
		z-index: 100;
		transform: scale(1.5) translateY(-5vh);
	}

	&:hover ${BotaoVirar} {
		display: block;
	}
`
const classVirada = {
	transform: 'rotateZ(180deg)',
	boxShadow: '#565656 -5px -5px 10px'
}

class Carta extends Component {
	render(){

		const { carta, virar } = this.props

		return(
			<StldCarta>
				<BotaoVirar 
					className="virar"
					onClick={virar}
				/>
				<Imagem 
					src={`/cartas/${carta.tipo}.png`} 
					style={carta.virada ? classVirada : {}}
				/>
			</StldCarta>
		)
	}
}

export default Carta