import {
	PLANTAR
} from '../actions'

const initialState = [
	{ nome: "trigo" },
	{ nome: "milho" },
	{ nome: "morango" },
]

export const plantacoesReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}