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

	state = {
		qtd: 0
	}

	aumentar = () => {
		this.setState(state => ({
			qtd: state.qtd + 1
		}))
	}

	diminuir = () => {
		this.setState(state => ({
			qtd: state.qtd - 1
		}))
	}

	render() {

		const { imagem } = this.props
		const { qtd } = this.state

		return (
			<StyledProduto imagem={imagem}>
				<Controles>
					<button onClick={() => this.aumentar()}>+</button>
					<span>{ qtd }</span>
					<button onClick={() => this.diminuir()}>-</button>
				</Controles>
			</StyledProduto>
		)
	}
}

export default Produto