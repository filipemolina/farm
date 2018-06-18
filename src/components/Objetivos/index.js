import React, { Component } from 'react'
import styled from 'styled-components'

import Objetivo from './Objetivo'

const StyledObjetivos = styled.div`
	position: absolute;
	top: 97vh;
	left: 32vw;
	width: 68vw;
	height: 17vw;
	display: flex;
	align-items: center;
`
class Objetivos extends Component {
	render(){

		const { cartas, completar } = this.props

		return(
			<StyledObjetivos>
				{cartas.map(carta => (
					<Objetivo key={carta.id} tipo={carta.tipo} completar={() => completar(carta)}/>
				))}
			</StyledObjetivos>
		)
	}
}

export default Objetivos