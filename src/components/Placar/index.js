import React, { Component } from 'react'
import styled from 'styled-components'

import Contador from './Contador'

const StyledPlacar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`
const BotaoVirar = styled.div`
	width: 9vw;
	height: 4vw;
	background-color: blue;
	border-radius: 5px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`
class Placar extends Component {
	render(){

		const { dinheiro, pontos, pontuar, ganharDinheiro, virarMesa } = this.props

		return(
			<StyledPlacar>
				<Contador imagem="/bg/coin.png" valor={dinheiro} click={ganharDinheiro}/>
				<Contador imagem="/bg/point.png" valor={pontos} click={pontuar} />
				<BotaoVirar onClick={virarMesa}>Virar Mesa</BotaoVirar>
			</StyledPlacar>
		)
	}
}

export default Placar