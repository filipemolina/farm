import { combineReducers } from 'redux'
import { construcoesReducer } from './construcoesReducer'
import { deckReducer } from './deckReducer'
import { jogadorReducer } from './jogadorReducer'
import { jogador2Reducer } from './jogador2Reducer'
import { plantacoesReducer } from './plantacoesReducer'
import { produtosReducer } from './produtosReducer'
import { gameInfoReducer } from './gameInfoReducer'
import { descarteReducer } from './descarteReducer'
import { animaisReducer } from './animaisReducer'
import { objetivosReducer } from './objetivosReducer'

export default combineReducers({
	jogador1: jogadorReducer('jogador1'),
	jogador2: jogador2Reducer('jogador2'),
	deck: deckReducer,
	construcoes: construcoesReducer,
	plantacoes: plantacoesReducer,
	animais: animaisReducer,
	produtos: produtosReducer,
	gameInfo: gameInfoReducer,
	descarte: descarteReducer,
	objetivos: objetivosReducer,
})