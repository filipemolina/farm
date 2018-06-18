import React, { Component } from 'react'
import styled from 'styled-components'

import Carta from './Carta'

// Styled Components

const StldMao = styled.div`
	width: 100%;
	height: 30vh;
	position: absolute;
	bottom: 0;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: space-around;
`
class Mao extends Component {
	render(){

		const { cartas, virarCarta, jogarCarta, mostrarBotoes } = this.props

		return(
			<StldMao>
				{cartas.map(carta => (
					<Carta 
						imagem={`/cartas/${carta.tipo}.png`} 
						virada={carta.virada}
						key={carta.id} 
						virar={() => virarCarta(carta.id)} 
						jogar={() => jogarCarta(carta)}
						mostrarBotoes={mostrarBotoes}
						hover
					/>
				))}
			</StldMao>
		)
	}
}

export default Mao