import React, { Component } from 'react'
import styled from 'styled-components'
import Carta from './Carta'

const StldDescarte = styled.div`
	width: 12vw;
	height: 16vw;
	position: absolute;
	top: 97vh;
	left: 18vw;
	border: 0.8vw dashed rgba(255,255,255,0.7);
`
class Descarte extends Component {
	render(){

		const { cartas } = this.props

		return(
			<StldDescarte>
				{cartas.length ? (
					<Carta 
						imagem={`/cartas/${cartas[cartas.length-1].tipo}.png`} 
						virada={cartas[cartas.length-1].virada}
					/>
				):""}
			</StldDescarte>
		)
	}
}

export default Descarte