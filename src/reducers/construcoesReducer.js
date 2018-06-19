import {
	CONSTRUIR
} from '../actions'

const initialState = [
	{ nome: "armazem",    qtd: 6, preco: 20 },
	{ nome: "torre",      qtd: 6, preco: 10 },
	{ nome: "escritorio", qtd: 2, preco: 15 },
	{ nome: "estufa",     qtd: 2, preco: 20 },
	{ nome: "laticinios", qtd: 2, preco: 15 },
	{ nome: "moinho",     qtd: 2, preco: 15 },
	{ nome: "padaria",    qtd: 2, preco: 30 },
	{ nome: "silo",       qtd: 2, preco: 20 },
	{ nome: "solar",      qtd: 2, preco: 20 },
]

export const construcoesReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}