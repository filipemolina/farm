import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import Tabuleiro from './components/Tabuleiro'
import Mao from './components/Mao'
import Mesa from './components/Mesa'
import Descarte from './components/Descarte'
import Deck from './components/Deck'
import Popup from './components/Popup'
import Objetivos from './components/Objetivos'
import Produtos from './components/Produtos'
import Placar from './components/Placar'

//////////////////////////////////////////////////////////////
// Consertar a altura do cubo de felicidade do jogador 2
// Consertar a orientação da carta no descarte quando é jogada pelo jogador 2
// Quando o deck acabar, embaralhar o descarte no deck
// Descontar o preço das construções e plantações quando forem feitas

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
  embaralharObjetivos,
  sacarObjetivos,
  completarObjetivo,
  pontuar,
  ganharDinheiro,
  virarMesa,
  produzir,
}  from './actions'

// Styled Component

const Game = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;  
  justify-content: center;
  align-items: center;
  background-image: url(/bg/bg.jpg);
  background-size: contain;
  background-repeat: repeat-x;
`
class App extends Component {
  
  componentDidMount = () => {
    
    const { 
      comprarCartas, 
      jogadorAtual,
      oponente,
      embaralhar, 
      embaralharObjetivos, 
      sacarObjetivos, 
      deck,
      deckObjetivos,
    } = this.props

    // Embaralhar o deck principal
    embaralhar()

    // Comprar as 5 pimeiras cartas do deck
    // (array.slice() cria um novo array e não modifica o original)
    comprarCartas(jogadorAtual, deck.slice(0, 5))
    comprarCartas(oponente, deck.slice(5, 10))

    sacarObjetivos(deckObjetivos.slice(0,3))
  }

  render() {

    const { 
      mao,              jogadorAtual,     jogador1, 
      jogador2,         virarCarta,       jogarCarta, 
      descarte,         virarConstrucao,  comprarCartas,
      deck,             mostrarPopup,     ganharFelicidade,
      toggleMenuCompra, animais,          construcoes,
      plantacoes,       campoSelecionado, plantar,
      construir,        objetivosAbertos, completarObjetivo,
      deckObjetivos,    sacarObjetivos,   pontuar,
      ganharDinheiro,   virarMesa,        produzir,
    } = this.props

    return (
      <Game>
        <Produtos produtos={this.props[jogadorAtual].produtos} produzir={(produto, qtd) => produzir(jogadorAtual, produto, qtd)} />

        <Placar 
          dinheiro={this.props[jogadorAtual].dinheiro} 
          pontos={this.props[jogadorAtual].pontos} 
          pontuar={(pontos) => pontuar(jogadorAtual, pontos)}
          ganharDinheiro={(qtd) => ganharDinheiro(jogadorAtual, qtd)}
          virarMesa={virarMesa}
        />

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
        <Mesa virada={jogadorAtual === 'jogador2'} >

          {/* Tabuleiro do Primeiro Jogador */}
          <Tabuleiro 
            jogador={jogador1}
            virarConstrucao={(campo_id => virarConstrucao('jogador1', campo_id))}
            ganharFelicidade={(qtd) => ganharFelicidade('jogador1', qtd)}
            toggleMenu={toggleMenuCompra}
          />

          {/* Tabuleiro do Segundo Jogador */}
          <Tabuleiro 
            jogador={jogador2}
            virarConstrucao={(campo_id => virarConstrucao('jogador2', campo_id))}
            ganharFelicidade={(qtd) => ganharFelicidade('jogador2', qtd)}
            toggleMenu={toggleMenuCompra}
          />

          <Descarte cartas={descarte} />
          
          {/* Deck de Compra */}
          <Deck comprar={() => comprarCartas(jogadorAtual, [deck[0]])} imagem={"/bg/back.jpg"} />
          
          {/* Deck de Objetivos */}
          <Deck comprar={() => sacarObjetivos([deckObjetivos[0]])} imagem={"/bg/backobjetivo.jpg"} virado/>

          {/* Linha de Objetivos no centro do tabuleiro */}
          <Objetivos cartas={objetivosAbertos} completar={(carta) => completarObjetivo(jogadorAtual, carta)} />
        </Mesa>
      </Game>
    );
  }
}

const mapStateToProps = (state, props) => ({
  jogadorAtual:     state.gameInfo.jogadorAtual,
  oponente:         state.gameInfo.oponente,
  jogador1:         state.jogador1,
  jogador2:         state.jogador2,
  descarte:         state.descarte,
  deck:             state.deck,
  deckObjetivos:    state.objetivos.deck,
  objetivosAbertos: state.gameInfo.objetivos,
  mao:              state[state.gameInfo.jogadorAtual].mao,
  mostrarPopup:     state.gameInfo.mostrar_popup,
  plantacoes:       state.plantacoes,
  construcoes:      state.construcoes,
  animais:          state.animais,
  campoSelecionado: state.gameInfo.campo_selecionado,
})

const mapDispatchToProps = dispatch => ({
  comprarCartas:       (jogador, cartas)               => dispatch(comprarCartas(jogador, cartas)),
  embaralhar:          ()                              => dispatch(embaralhar()),
  virarCarta:          (jogador, id)                   => dispatch(virarCarta(jogador, id)),
  jogarCarta:          (jogador, carta)                => dispatch(jogarCarta(jogador, carta)),
  virarConstrucao:     (jogador, campo_id)             => dispatch(virarConstrucao(jogador, campo_id)),
  ganharFelicidade:    (jogador, qtd)                  => dispatch(ganharFelicidade(jogador, qtd)),
  toggleMenuCompra:    (campo_id)                      => dispatch(toggleMenuCompra(campo_id)),
  plantar:             (jogador, campo_id, tipo, nome) => dispatch(plantar(jogador, campo_id, tipo, nome)),
  construir:           (jogador, campo_id, nome)       => dispatch(construir(jogador, campo_id, nome)),
  embaralharObjetivos: ()                              => dispatch(embaralharObjetivos()),
  sacarObjetivos:      (cartas)                        => dispatch(sacarObjetivos(cartas)),
  completarObjetivo:   (jogador, carta)                => dispatch(completarObjetivo(jogador, carta)),
  pontuar:             (jogador, pontos)               => dispatch(pontuar(jogador, pontos)),
  ganharDinheiro:      (jogador, qtd)                  => dispatch(ganharDinheiro(jogador, qtd)),
  virarMesa:           ()                              => dispatch(virarMesa()),
  produzir:            (jogador, produto, qtd)         => dispatch(produzir(jogador, produto, qtd)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
