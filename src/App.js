import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import Tabuleiro from './components/tabuleiro'
import { connect } from 'react-redux'

//Actions

import { comprarCartas }  from './actions'

const Game = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  
  componentDidMount = () => {
    const { comprarUmaCarta, jogadorAtual } = this.props

    comprarUmaCarta(jogadorAtual)
  }

  render() {
    return (
      <Game>
        <Tabuleiro />
      </Game>
    );
  }
}

const mapStateToProps = (state, props) => ({
  jogadorAtual: state.gameInfo.jogadorAtual
})

const mapDispatchToProps = dispatch => ({
  comprarUmaCarta: (jogador) => dispatch(comprarCartas(jogador, 1))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
