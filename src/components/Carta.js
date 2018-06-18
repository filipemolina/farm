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

const BotaoJogar = styled.a`
	display: none;
	position: absolute;
	cursor: pointer;
	width: 4vw;
	height: 3vw;
	z-index: 100;
	top: -1vw;
	left: 18vh;
	background-image: url(/icones/botoes.jpeg);
	background-size: 12vw;
	-webkit-transition: all 0.2s cubic-bezier(0,0,0.2,1);
	transition: all 0.2s cubic-bezier(0,0,0.2,1);
	background-position: -1.6vw -0.4vw;
	border-radius: 1vw;
`
const Imagem = styled.img`
	max-width: 100%;
	height: auto;
	box-shadow: #565656 5px 5px 10px;
	border-radius: 1vh;
	transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
`
const StldCartaHover = styled.div`
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

	&:hover ${BotaoJogar} {
		display: block;
	}
`
const StldCarta = styled.div`
	width: 11vw;
	height: 15vw;
	margin-left: 0.5vw;
	cursor: pointer;
	position: relative;
	transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

	&:hover ${BotaoVirar} {
		display: block;
	}

	&:hover ${BotaoJogar} {
		display: block;
	}
`
const classVirada = {
	transform: 'rotateZ(180deg)',
	boxShadow: '#565656 -5px -5px 10px'
}

const hover = {
	zIndex: '100',
	transform: 'scale(1.5) translateY(-5vh)'
}

class Carta extends Component {
	render(){

		const { virada, hover, imagem, virar, jogar, mostrarBotoes } = this.props

		return(
			<div>
				{hover ? (
					<StldCartaHover>
						{mostrarBotoes ? (
							<div>
								<BotaoJogar onClick={jogar} />
								<BotaoVirar 
									className="virar"
									onClick={virar}
								/>
							</div>
						): ""}
						<Imagem 
							src={imagem} 
							style={virada ? classVirada : {}}
						/>
					</StldCartaHover>
				) : (
					<StldCarta>
						{mostrarBotoes ? (
							<div>
								<BotaoJogar onClick={jogar} />
								<BotaoVirar 
									className="virar"
									onClick={virar}
								/>
							</div>
						): ""}
						<Imagem 
							src={imagem} 
							style={virada ? classVirada : {}}
						/>
					</StldCarta>
				)}
			</div>
		)
	}
}

export default Carta