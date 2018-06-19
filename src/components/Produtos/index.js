import React, { Component } from 'react'
import styled from 'styled-components'

import Produto from './Produto'

const Painel = styled.div`
  position: absolute;
  width: 10vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.7);
`
class Produtos extends Component {
	render() {

		const { produtos } = this.props

		return(
			<Painel>
				<Produto imagem={'url(/caixas/caixa-farinha.png)'       } />
				<Produto imagem={'url(/caixas/caixa-farinha-milho.png)' } />
				<Produto imagem={'url(/caixas/caixa-geleia.png)'        } />
				<Produto imagem={'url(/caixas/caixa-queijo.png)'        } />
				<Produto imagem={'url(/caixas/caixa-pao.png)'           } />
				<Produto imagem={'url(/caixas/caixa-pao-milho.png)'     } />
				<Produto imagem={'url(/caixas/caixa-bolo.png)'          } />
				<Produto imagem={'url(/caixas/caixa-bolo-milho.png)'    } />
			</Painel>
		)
	}
}

export default Produtos