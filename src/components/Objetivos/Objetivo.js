import React, { Component } from 'react'
import styled from 'styled-components'

const BtnCompletar = styled.img`
	width: 6vw;
	position: absolute;
	bottom: 0;
	left: 0;
	cursor: pointer;
	display: none;
`
const Carta = styled.div`
	width: 16vw;
	height: 12vw;
	margin-left: 2vw;
	border-radius: 1vw;
	background-size: contain;
	position: relative;

	&:hover ${BtnCompletar} {
		display: block;
	}
`
class Objetivo extends Component {
	render(){
		const { tipo, completar, margem } = this.props
		return(
			<Carta key={tipo} style={{ backgroundImage: `url(/objetivos/${tipo}.png)`, marginTop: margem ? "-8vw" : "" }}>
				<BtnCompletar src="/bg/check.png" alt="" onClick={completar}/>
			</Carta>
		)
	}
}

export default Objetivo