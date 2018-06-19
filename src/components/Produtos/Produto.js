import React, { Component } from 'react'
import styled from 'styled-components'

const StyledProduto = styled.div`
	width: 9vw;
	height: 9vh;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: ${props => props.imagem};
	position: relative;
`
const Controles = styled.div`
	position: absolute;
	top: 1.5vw;
	right: 0;
`
class Produto extends Component {
	render() {

		const { imagem, qtd, produzir } = this.props

		return (
			<StyledProduto imagem={imagem}>
				<Controles>
					<button onClick={() => produzir(1)}>+</button>
					<span>{ qtd }</span>
					<button onClick={() => produzir(-1)}>-</button>
				</Controles>
			</StyledProduto>
		)
	}
}

export default Produto