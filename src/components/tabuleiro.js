import React from 'react'
import styled from 'styled-components'

import Bloco from './Bloco'

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
const Felicidade = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 19%;
	padding-top: 4%;
`
const Campo = styled.div`
	width: 25%;
  height: 25%;
  position: relative;
`
const Nivel = styled.div`
	width: 44%;
  height: 10.5%;
  opacity: 0.5;
  margin-left: 9%;
  margin-bottom: 5%;
`
const tabuleiro1 = {
	position: 'absolute',
	bottom: '5vh',
	left: '50%',
	marginLeft: '-27.5vw',
}

class Tabuleiro extends React.Component{
	render(){

		const { jogador } = this.props

		return(
			<Tab style={jogador === 1 ? tabuleiro1 : ""}>
				<Campos>
					<Campo className="campo1">
						
					</Campo>
					<Campo className="campo2">
						
					</Campo>
					<Campo className="campo3">
						
					</Campo>
					<Campo className="campo4"></Campo>
					<Campo className="campo5"></Campo>
					<Campo className="campo6"></Campo>
					<Campo className="campo7"></Campo>
					<Campo className="campo8"></Campo>
					<Campo className="campo9"></Campo>
					<Campo className="campo10"></Campo>
					<Campo className="campo11"></Campo>
					<Campo className="campo12"></Campo>
					<Campo className="campo13">
						<Bloco tipo="construcao" nome="armazem" />
					</Campo>
					<Campo className="campo14">
						<Bloco tipo="plantacao" nome="trigo" />
					</Campo>
					<Campo className="campo15">
						<Bloco tipo="construcao" nome="torre" />
					</Campo>
					<Campo className="campo16"></Campo>
				</Campos>
				<Felicidade>
					<Nivel className="nivel8"></Nivel>
					<Nivel className="nivel7"></Nivel>
					<Nivel className="nivel6"></Nivel>
					<Nivel className="nivel5"></Nivel>
					<Nivel className="nivel4"></Nivel>
					<Nivel className="nivel3"></Nivel>
					<Nivel className="nivel2"></Nivel>
					<Nivel className="nivel1"></Nivel>
				</Felicidade>
			</Tab>
		)
	}
}

export default Tabuleiro