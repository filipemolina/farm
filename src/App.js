import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import Tabuleiro from './components/tabuleiro'
import Mao from './components/Mao'

import { connect } from 'react-redux'

//Actions

import { 
  comprarCartas,
  embaralhar,
  virarCarta
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

    const { mao, jogadorAtual, virarCarta } = this.props

    return (
      <Game>
        <Mao cartas={mao} jogador={jogadorAtual} virarCarta={(id) => virarCarta(jogadorAtual, id)}/>
        <Tabuleiro />
      </Game>
    );
  }
}

const mapStateToProps = (state, props) => ({
  jogadorAtual: state.gameInfo.jogadorAtual,
  mao: state[state.gameInfo.jogadorAtual].mao,
  deck: state.deck
})

const mapDispatchToProps = dispatch => ({
  comprarCartas: (jogador, cartas) => dispatch(comprarCartas(jogador, cartas)),
  embaralhar: () => dispatch(embaralhar()),
  virarCarta: (jogador, id) => dispatch(virarCarta(jogador, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
