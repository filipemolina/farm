import React from 'react'
import styled from 'styled-components'

import Felicidade from './Felicidade'
import Bloco from './Bloco'
import Sinais from './Sinais'

const Tab = styled.div`
	width: 55vw;
  height: 44vw;
  perspective-origin: 50%;
  transition: all 0.5s linear;
  background-image: url(/mapa/tabuleiro.png);
  background-size: 100%;
  background-color: #2f8136;
  border-radius: 2vw;
`
const Campos = styled.div`
	position: absolute;
  top: 0;
  left: 0;
  width: 81%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`
const BtnComprar = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(/bg/add.png);
	background-size: 5vw;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	display: none;
	cursor: pointer;
`
const Campo = styled.div`
	width: 25%;
  height: 25%;
  position: relative;

  &:hover ${BtnComprar} {
  	display: block;
  }
`
const tabuleiro1 = {
	position: 'absolute',
	bottom: '5vh',
	left: '50%',
	marginLeft: '-27.5vw',
}

class Tabuleiro extends React.Component{
	render(){

		const { 
			jogador, 
			campos, 
			virarConstrucao, 
			felicidade, 
			ganharFelicidade,
			toggleMenu,
		} = this.props

		return(
			<Tab style={jogador === 1 ? tabuleiro1 : ""}>
				<Campos>
					{campos.map(campo => (
						<Campo key={campo.id} className={`campo${campo.id}`}>
							{campo.construcao ? (
								<Bloco 
									key={campo.id} 
									construcao={campo.construcao}
									virar={() => virarConstrucao(campo.id)}
								/>
							): (
								<BtnComprar onClick={() => toggleMenu(campo.id)}/>
							)}
						</Campo>
					))}
				</Campos>
				<Felicidade bgColor="orange" nivel={felicidade}/>
				<Sinais mudarFelicidade={ganharFelicidade} />
			</Tab>
		)
	}
}

export default Tabuleiro