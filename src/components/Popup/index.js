import React, { Component } from 'react'
import styled from 'styled-components'

import Conteudo from './Conteudo'

const StldPopup = styled.div`
	position: absolute;
	width: 60vw;
	height: 60vh;
	background-color: rgba(255,255,255,0.5);
	border-radius: 5px;
	box-shadow: 5px 5px 20px;
	z-index: 10;
	top: 5vh;
	overflow: hidden;
`
const Cabecalho = styled.div`
  width: 100%;
  height: 7vh;
  padding: 1vw 1vw;
  display: flex;
  align-items: center;
`
const Aba = styled.a`
	background-color: white;
	padding: 1vw 2vw;
	margin: 0 1vw;
	text-decoration: none;
	display: flex;
	border-radius: 1vw;
	border: 1px solid #ccc;
	color: #000;

	&:hover {
		background-color: #ccc;
		color: white;
	}
`
const BotaoFechar = styled.a`
	display: block;
	position: absolute;
	top: 0.5vw;
	right: 0.5vw;
	background-image: url(/bg/close.ico);
	width: 2vw;
	height: 2vw;
	background-size: 2vw;
	cursor: pointer;
`
class Popup extends Component {

	state = {
		painel: 'plantacoes'
	}

	mudarPainel = novo => {
		this.setState({
			painel: novo
		})
	}

	render(){

		const { objetos, toggleMenu, campoSelecionado, actions } = this.props
		const { painel } = this.state

		return(
			<StldPopup>
				<Cabecalho>
					<Aba href="javascript:void(0)" onClick={() => this.mudarPainel('plantacoes')}>Plantações</Aba>
					<Aba href="javascript:void(0)" onClick={() => this.mudarPainel('animais')}>Animais</Aba>
					<Aba href="javascript:void(0)" onClick={() => this.mudarPainel('construcoes')}>Construções</Aba>
					<BotaoFechar onClick={() => toggleMenu("")} />
				</Cabecalho>
				<Conteudo objetos={objetos} actions={actions} painel={painel} />
			</StldPopup>
		)
	}
}

export default Popup