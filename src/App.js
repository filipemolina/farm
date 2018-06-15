import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import Tabuleiro from './components/Tabuleiro'
import Mao from './components/Mao'
import Mesa from './components/Mesa'
import Descarte from './components/Descarte'
import Deck from './components/Deck'
import Popup from './components/Popup'

//////////////////////////////////////////////////////////////
// Criar os contadores de dinheiro e pontos
// Criar o deck de objetivos
// Girar o tabuleiro

//Actions Dispatchers
import { 
  comprarCartas,
  embaralhar,
  virarCarta,
  jogarCarta,
  virarConstrucao,
  ganharFelicidade,
  toggleMenuCompra,
  plantar,
  construir,
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

    const { 
      mao,              jogadorAtual,     jogador1, 
      jogador2,         virarCarta,       jogarCarta, 
      descarte,         virarConstrucao,  comprarCartas,
      deck,             mostrarPopup,     ganharFelicidade,
      toggleMenuCompra, animais,          construcoes,
      plantacoes,       campoSelecionado, plantar,
      construir,
    } = this.props

    return (
      <Game>
        <Mao 
          cartas={mao} 
          jogador={jogadorAtual} 
          virarCarta={id => virarCarta(jogadorAtual, id)}
          jogarCarta={carta => jogarCarta(jogadorAtual, carta)}
          mostrarBotoes={true}
        />
        {mostrarPopup ? (
          <Popup 
            objetos={{
              animais,
              construcoes,
              plantacoes
            }} 
            toggleMenu={toggleMenuCompra}
            actions={{
              plantar: (tipo, nome) => {
                plantar(jogadorAtual, campoSelecionado, tipo, nome)
                toggleMenuCompra("")
              },
              construir: (nome) => {
                construir(jogadorAtual, campoSelecionado, nome)
                toggleMenuCompra("")
              }
            }}
          />
        ):""}
        <Mesa>
          <Tabuleiro 
            jogador={1} 
            campos={jogador1.campos} 
            felicidade={jogador1.felicidade}
            virarConstrucao={(campo_id => virarConstrucao('jogador1', campo_id))}
            ganharFelicidade={(qtd) => ganharFelicidade('jogador1', qtd)}
            toggleMenu={toggleMenuCompra}
          />
          <Descarte cartas={descarte} />
          <Deck comprar={() => comprarCartas(jogadorAtual, [deck[0]])} />
        </Mesa>
      </Game>
    );
  }
}

const mapStateToProps = (state, props) => ({
  jogadorAtual:     state.gameInfo.jogadorAtual,
  jogador1:         state.jogador1,
  jogador2:         state.jogador2,
  descarte:         state.descarte,
  deck:             state.deck,
  mao:              state[state.gameInfo.jogadorAtual].mao,
  mostrarPopup:     state.gameInfo.mostrar_popup,
  plantacoes:       state.plantacoes,
  construcoes:      state.construcoes,
  animais:          state.animais,
  campoSelecionado: state.gameInfo.campo_selecionado,
})

const mapDispatchToProps = dispatch => ({
  comprarCartas:    (jogador, cartas)               => dispatch(comprarCartas(jogador, cartas)),
  embaralhar:       ()                              => dispatch(embaralhar()),
  virarCarta:       (jogador, id)                   => dispatch(virarCarta(jogador, id)),
  jogarCarta:       (jogador, carta)                => dispatch(jogarCarta(jogador, carta)),
  virarConstrucao:  (jogador, campo_id)             => dispatch(virarConstrucao(jogador, campo_id)),
  ganharFelicidade: (jogador, qtd)                  => dispatch(ganharFelicidade(jogador, qtd)),
  toggleMenuCompra: (campo_id)                      => dispatch(toggleMenuCompra(campo_id)),
  plantar:          (jogador, campo_id, tipo, nome) => dispatch(plantar(jogador, campo_id, tipo, nome)),
  construir:        (jogador, campo_id, nome)       => dispatch(construir(jogador, campo_id, nome)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
