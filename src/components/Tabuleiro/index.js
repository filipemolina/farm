import React from 'react'
import styled from 'styled-components'

import Felicidade from './Felicidade'
import Bloco from './Bloco'
import Sinais from './Sinais'
import ObjetivosCompletos from './ObjetivosCompletos'

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

const tabuleiro2 = {
	position: 'absolute',
	top: '5vh',
	left: '50%',
	marginLeft: '-27.5vw',
	transform: 'rotateZ(180deg)'
}

class Tabuleiro extends React.Component{
	render(){

		const { 
			jogador, 
			virarConstrucao, 
			ganharFelicidade,
			toggleMenu,
		} = this.props

		return(
			<Tab style={jogador.nome === 'jogador1' ? tabuleiro1 : tabuleiro2}>
				<ObjetivosCompletos cartas={jogador.objetivos}/>
				<Campos>
					{jogador.campos.map(campo => (
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
				<Felicidade bgColor="orange" nivel={jogador.felicidade}/>
				<Sinais mudarFelicidade={ganharFelicidade} />
			</Tab>
		)
	}
}

export default Tabuleiro