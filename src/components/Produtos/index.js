import React, { Component } from 'react'
import styled from 'styled-components'

import Produto from './Produto'

const Painel = styled.div`
  position: absolute;
  width: 10vw;
  height: 100vh;
  top: 0;
  left: ${props => props.margem};
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease-in;
  z-index: 100;
`
const Botao = styled.div`
  position: absolute;
  top: 0;
  left: 10vw;
  cursor: pointer;
  width: 3vw;
  height: 3vw;
  background-image: url(/bg/menu.png);
  background-size: cover;
`
class Produtos extends Component {

	state = {
		mostraMenu: false
	}

	mostrarMenu = () => this.setState(state => ({ mostraMenu: !state.mostraMenu }))

	render() {

		const { produtos, produzir } = this.props
		const { mostraMenu } = this.state

		return(
			<Painel margem={mostraMenu ? '0vw' : "-10vw"} >
				<Botao onClick={this.mostrarMenu}/>
				<Produto 
					imagem={'url(/caixas/caixa-farinha.png)'} 
					qtd={produtos.farinha} 
					produzir={(qtd) => produzir('farinha', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-farinha-milho.png)'}
					qtd={produtos.far_milho} 
					produzir={(qtd) => produzir('far_milho', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-geleia.png)'} 
					qtd={produtos.geleia} 
					produzir={(qtd) => produzir('geleia', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-queijo.png)'} 
					qtd={produtos.queijo} 
					produzir={(qtd) => produzir('queijo', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-pao.png)'} 
					qtd={produtos.pao} 
					produzir={(qtd) => produzir('pao', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-pao-milho.png)'} 
					qtd={produtos.pao_milho} 
					produzir={(qtd) => produzir('pao_milho', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-bolo.png)'} 
					qtd={produtos.bolo_morango} 
					produzir={(qtd) => produzir('bolo_morango', qtd)}
				/>
				<Produto 
					imagem={'url(/caixas/caixa-bolo-milho.png)'} 
					qtd={produtos.bolo_milho} 
					produzir={(qtd) => produzir('bolo_milho', qtd)}
				/>
			</Painel>
		)
	}
}

export default Produtos