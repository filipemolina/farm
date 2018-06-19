import React, { Component } from 'react'
import styled from 'styled-components'

import Objetivo from "../Objetivos/Objetivo"

const Box = styled.div`
	width: 21vw;
	height: 32vw;
	position: absolute;
	bottom: 0;
	left: -21vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`
class ObjetivosCompletos extends Component {
	render(){

		const { cartas } = this.props

		return(
			<Box>
				{cartas.map((carta, i) => (
					<Objetivo key={carta.tipo} objetivo={carta} margem={i!==0}/>
				))}
			</Box>
		)
	}
}

export default ObjetivosCompletos