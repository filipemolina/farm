import {
	COMPRAR_CARTAS
} from '../actions'

const initialState = {
	jogadorAtual: 'jogador1',
	oponente: 'jogador2',
	mapa_cartas: { /* Mapeia o ID das cartas com o lugar onde elas se encontram */
		1 : 'deck',
		2 : 'deck',
	  3 : 'deck',
		4 : 'deck',
		5 : 'deck',
		6 : 'deck',
		7 : 'deck',
		8 : 'deck',
		9 : 'deck',
		10: 'deck',
		11: 'deck',
		12: 'deck',
		13: 'deck',
		14: 'deck',
		15: 'deck',
		16: 'deck',
		17: 'deck',
		18: 'deck',
		19: 'deck',
		20: 'deck',
		21: 'deck',
		22: 'deck',
		23: 'deck',
		24: 'deck',
		25: 'deck',
		26: 'deck',
		27: 'deck',
		28: 'deck',
		29: 'deck',
		30: 'deck',
		31: 'deck',
		32: 'deck',
		33: 'deck',
		34: 'deck',
		35: 'deck',
		36: 'deck',
		37: 'deck',
		38: 'deck',
		39: 'deck',
		40: 'deck',
	}
}

export const gameInfoReducer = (state=initialState, action) => {
	switch(action.type){
		case COMPRAR_CARTAS:
			// Essa action possui uma propriedade cartas e uma propriedade jogador.
			// A propriedade cartas contém um array com todas as cartas compradas e 
			// a propriedade jogador contém o nome do jogador que as comprou.
			
			// Iterar por todas as cartas compradas e mudar a posição delas
			// no mapa de cartas
			for(let i=0; i<action.cartas.length; i++){
				state.mapa_cartas[action.cartas[i].id] = action.jogador
			}
			return state
		default:
			return state
	}
}