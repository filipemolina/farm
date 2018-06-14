import React, { Component } from 'react'
import styled from 'styled-components'
import Carta from './Carta'

const StldDescarte = styled.div`
	width: 12vw;
	height: 16vw;
	position: absolute;
	top: 50%;
	margin-top: -6vw;
	left: 50%;
	margin-left: -8vw;
	border: 0.8vw dashed rgba(255,255,255,0.7);
`
class Descarte extends Component {
	render(){

		const { cartas } = this.props

		return(
			<StldDescarte>
				{cartas.length ? (
					<Carta carta={cartas[cartas.length-1]} />
				):""}
			</StldDescarte>
		)
	}
}

export default Descarte