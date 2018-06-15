import React, { Component } from 'react'
import styled from 'styled-components'

import Item from './Item'

const StyledConteudo = styled.div`
	width: 100%;
	height: 47vh;
	padding-top: 1vw;
	background-color: rgba(255,255,255,0.5);
`
const SectionAnimais = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
`
const SectionConstrucoes = styled.div`
	position: absolute;
	width: 100%;
	height: 47vh;
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
`
const SectionPlantacoes = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
`
class Conteudo extends Component {
	render(){

		const { animais, construcoes, plantacoes } = this.props.objetos
		const { plantar, construir } = this.props.actions
		const { painel } = this.props

		return(
			<StyledConteudo>
				{painel === 'plantacoes' && (
					<SectionPlantacoes>
						{plantacoes.map(plantacao => (
							<Item 
								key={plantacao.nome} 
								pasta="cercados" 
								nome={plantacao.nome} 
								click={() => plantar("plantacao", plantacao.nome)} 
							/>
						))}
					</SectionPlantacoes>
				)}
				{painel === 'animais' && (
					<SectionAnimais>
						{animais.map(animal => (
							<Item 
								key={animal.nome} 
								pasta="cercados" 
								nome={animal.nome} 
								click={() => plantar("animal", animal.nome)}
							/>
						))}
					</SectionAnimais>
				)}
				{painel === 'construcoes' && (
					<SectionConstrucoes>
						{construcoes.map(construcao => (
							<Item 
								key={construcao.nome} 
								pasta="construcoes" 
								nome={construcao.nome} 
								click={() => construir(construcao.nome)}
							/>
						))}
					</SectionConstrucoes>
				)}
			</StyledConteudo>
		)
	}
}

export default Conteudo