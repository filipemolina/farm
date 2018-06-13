import {
	COMPRAR_CARTAS,
	JOGAR_CARTA,
	CONSTRUIR,
	PLANTAR,
	ATIVAR,
	VENDER,
	GANHAR_FELICIDADE,
	PONTUAR
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
	switch(action.type){
		default:
			return state
	}
}