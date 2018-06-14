import React, { Component } from 'react';
import styled from 'styled-components'
import Tabuleiro from './components/tabuleiro'
import Mao from './components/Mao'
import Mesa from './components/Mesa'
import Descarte from './components/Descarte'

import { connect } from 'react-redux'

//Actions

import { 
  comprarCartas,
  embaralhar,
  virarCarta,
  jogarCarta,
}  from './actions'

// Styled Component

const Game = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;  
  justify-content: center;
  align-items: center;
`
class App extends Component {
  
  componentDidMount = () => {
    
    const { comprarCartas, jogadorAtual, embaralhar, deck } = this.props

    // Embaralhar o deck principal
    embaralhar()

    // Comprar as 5 pimeiras cartas do deck
    // (array.slice() cria um novo array e não modifica o original)
    comprarCartas(jogadorAtual, deck.slice(0, 5))
  }

  render() {

    const { mao, jogadorAtual, virarCarta, jogarCarta, descarte } = this.props

    return (
      <Game>
        <Mao 
          cartas={mao} 
          jogador={jogadorAtual} 
          virarCarta={id => virarCarta(jogadorAtual, id)}
          jogarCarta={carta => jogarCarta(jogadorAtual, carta)}
          mostrarBotoes={true}
        />
        <Mesa>
          <Tabuleiro jogador={1} />
          <Descarte cartas={descarte}/>
        </Mesa>
      </Game>
    );
  }
}

const mapStateToProps = (state, props) => ({
  jogadorAtual: state.gameInfo.jogadorAtual,
  descarte:     state.descarte,
  deck:         state.deck,
  mao:          state[state.gameInfo.jogadorAtual].mao,
})

const mapDispatchToProps = dispatch => ({
  comprarCartas: (jogador, cartas) => dispatch(comprarCartas(jogador, cartas)),
  embaralhar: () => dispatch(embaralhar()),
  virarCarta: (jogador, id) => dispatch(virarCarta(jogador, id)),
  jogarCarta: (jogador, carta) => dispatch(jogarCarta(jogador, carta)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
