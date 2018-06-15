import {
	CONSTRUIR
} from '../actions'

const initialState = [
	{ nome: "armazem",    qtd: 6 },
	{ nome: "torre",      qtd: 6 },
	{ nome: "escritorio", qtd: 2 },
	{ nome: "estufa",     qtd: 2 },
	{ nome: "laticinios", qtd: 2 },
	{ nome: "moinho",     qtd: 2 },
	{ nome: "padaria",    qtd: 2 },
	{ nome: "silo",       qtd: 2 },
	{ nome: "solar",      qtd: 2 },
]

export const construcoesReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}