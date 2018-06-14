import { combineReducers } from 'redux'
import { construcoesReducer } from './construcoesReducer'
import { deckReducer } from './deckReducer'
import { jogador1Reducer } from './jogador1Reducer'
import { jogador2Reducer } from './jogador2Reducer'
import { plantacoesReducer } from './plantacoesReducer'
import { produtosReducer } from './produtosReducer'
import { gameInfoReducer } from './gameInfoReducer'
import { descarteReducer } from './descarteReducer'

export default combineReducers({
	jogador1: jogador1Reducer,
	jogador2: jogador2Reducer,
	deck: deckReducer,
	construcoes: construcoesReducer,
	plantacoes: plantacoesReducer,
	produtos: produtosReducer,
	gameInfo: gameInfoReducer,
	descarte: descarteReducer,
})