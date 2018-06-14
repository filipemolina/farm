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

		const { jogador, campos, virarConstrucao } = this.props

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
							): ""}
						</Campo>
					))}
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