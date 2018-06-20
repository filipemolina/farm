import {
	CONSTRUIR
} from '../actions'

const initialState = [
	{ nome: "armazem",    qtd: 6, preco: 20, pasta: 'construcoes' },
	{ nome: "torre",      qtd: 6, preco: 10, pasta: 'construcoes' },
	{ nome: "escritorio", qtd: 2, preco: 15, pasta: 'construcoes' },
	{ nome: "estufa",     qtd: 2, preco: 20, pasta: 'construcoes' },
	{ nome: "laticinios", qtd: 2, preco: 15, pasta: 'construcoes' },
	{ nome: "moinho",     qtd: 2, preco: 15, pasta: 'construcoes' },
	{ nome: "padaria",    qtd: 2, preco: 30, pasta: 'construcoes' },
	{ nome: "silo",       qtd: 2, preco: 20, pasta: 'construcoes' },
	{ nome: "solar",      qtd: 2, preco: 20, pasta: 'construcoes' },
]

export const construcoesReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}