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
const Pontos = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	color: black;
	font-size: 35px;
	width: 4vw;
	height: 4vw;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Dinheiro = styled.div`
	position: absolute;
  bottom: 0;
  right: 0;
  width: 6vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  text-shadow: 5px 4px 11px black;
  font-weight: bold;
`
class Objetivo extends Component {
	render(){
		const { objetivo, completar, margem } = this.props
		return(
			<Carta 
				key={objetivo.tipo} 
				style={{ 
					backgroundImage: `url(/objetivos/${objetivo.tipo}.png)`, 
					marginTop: margem ? "-8vw" : "",
				}}>
				
				<Pontos>{objetivo.pontos}</Pontos>
				
				<BtnCompletar src="/bg/check.png" alt="" onClick={completar}/>

				<Dinheiro>{objetivo.dinheiro}</Dinheiro>

			</Carta>
		)
	}
}

export default Objetivo