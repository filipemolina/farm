import {
	COMPRAR_CARTAS,
	JOGAR_CARTA,
	CONSTRUIR,
	PLANTAR,
	ATIVAR,
	VENDER,
	GANHAR_FELICIDADE,
	PONTUAR,
	VIRAR_CARTA
} from '../actions'

const initialState = {
	mao: [],
	campos: [
		{ id:  1, construcao: "" },
		{ id:  2, construcao: "" },
		{ id:  3, construcao: "" },
		{ id:  4, construcao: "" },
		{ id:  5, construcao: "" },
		{ id:  6, construcao: "" },
		{ id:  7, construcao: "" },
		{ id:  8, construcao: "" },
		{ id:  9, construcao: "" },
		{ id: 10, construcao: "" },
		{ id: 11, construcao: "" },
		{ id: 12, construcao: "" },
		{ id: 13, construcao: "" },
		{ id: 14, construcao: "" },
		{ id: 15, construcao: "" },
		{ id: 16, construcao: "" },
	],
	produtos: [],
	pontos: 0,
}

export const jogador1Reducer = (state = initialState, action) => {

	//Realizar modificações apenas caso o jogador atual seja o jogador 1
	if(action.jogador && action.jogador === 'jogador1'){

		switch(action.type){
			case COMPRAR_CARTAS:
				return {
					...state,
					mao: [
						...state.mao,
						...action.cartas
					]
				}
			case VIRAR_CARTA:
				return{
					...state,
					mao: state.mao.map(carta => {
						if(carta.id === action.id)
							carta.virada = !carta.virada
						return carta
					})
				}
			case JOGAR_CARTA:
				return {
					...state,
					mao: state.mao.filter(carta => carta.id !== action.carta.id)
				}
			default:
				return state
		}

	} else {

		return state
		
	}
}