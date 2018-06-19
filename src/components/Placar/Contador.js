import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 9vw;
  height: 9vw;
  background-image: url(${props => props.imagem});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Valor = styled.span`
	font-size: 30px;
	color: white;
	text-shadow: 5px 5px 10px black;
`
class Contador extends Component {
	render(){

		const { imagem, valor, click } = this.props

		return(
			<Wrapper imagem={imagem}>
				<button onClick={() => click(-1)}>-</button>
				<Valor>{valor}</Valor>
				<button onClick={() => click(1)}>+</button>
			</Wrapper>
		)
	}
}

export default Contador