import {
	COMPRAR_CARTAS,
	JOGAR_CARTA,
	CONSTRUIR,
	VIRAR_CONSTRUCAO,
	PLANTAR,
	PRODUZIR,
	VENDER,
	GANHAR_FELICIDADE,
	PONTUAR,
	VIRAR_CARTA,
	COMPLETAR_OBJETIVO,
	GANHAR_DINHEIRO,
} from '../actions'

const initialState = {
	mao: [],
	campos: [
		{ id:  1 },
		{ id:  2 },
		{ id:  3 },
		{ id:  4 },
		{ id:  5 },
		{ id:  6 },
		{ id:  7 },
		{ id:  8 },
		{ id:  9 },
		{ id: 10 },
		{ id: 11 },
		{ id: 12 },
		{ id: 13, construcao: { tipo: 'construcao', nome: 'torre', classe: "" }},
		{ id: 14 },
		{ id: 15 },
		{ id: 16 },
	],
	produtos: {
		pao:          0,
		queijo:       0,
		geleia:       0,
		farinha:      0,
		pao_milho:    0,
		far_milho:    0,
		bolo_milho:   0,
		bolo_morango: 0,
	},
	pontos: 0,
	dinheiro: 10,
	felicidade: 1,
	objetivos: []
}

export const jogadorReducer = (jogador) => (state = initialState, action) => {

	// Definir se é jogador1 ou jogador2 (como chamado no index.js dessa pasta)
	state.nome = jogador

	//Realizar modificações apenas caso o jogador atual seja o jogador 1
	if(action.jogador && action.jogador === state.nome){

		console.log("Reducer do " + state.nome + "pegou a ação do " + action.jogador)

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
			case VIRAR_CONSTRUCAO:
				return {
					...state,
					// Modificar apenas o array "campos" dentro do state
					campos: state.campos.map(campo => {
						// Modificar apenas o campo com o id fornecido pela action
						if(campo.id === action.campo_id){
							// Colocar a nova classe de acordo com a classe antiga
							if(campo.construcao.classe === "")
								campo.construcao.classe = "rodar_bloco"
							else if(campo.construcao.classe === "rodar_bloco")
								campo.construcao.classe = "voltar_bloco"
							else
								campo.construcao.classe = "rodar_bloco"
						}
						return campo
					})
				}
			case GANHAR_FELICIDADE:
				let novo_valor = state.felicidade + action.qtd
				if(novo_valor > 8)
					novo_valor = 8
				else if(novo_valor < 1)
					novo_valor = 1
				return {
					...state,
					felicidade: novo_valor
				}
			case PLANTAR:
				return {
					...state,
					campos: state.campos.map(campo => {
						if(campo.id === action.campo_id){
							campo.construcao = {
								tipo: action.tipo,
								nome: action.nome,
								classe: "",
							}
						}
						return campo
					})
				}
			case CONSTRUIR:
				return {
					...state,
					campos: state.campos.map(campo => {
						if(campo.id === action.campo_id){
							campo.construcao = {
								tipo: "construcao",
								nome: action.nome,
								classe: "",
							}
						}
						return campo
					})
				}
			case COMPLETAR_OBJETIVO:
				return {
					...state,
					objetivos: [
						...state.objetivos,
						action.carta
					],
					pontos: state.pontos + action.carta.pontos,
					dinheiro: state.dinheiro + action.carta.dinheiro
				}
			case PONTUAR:
				return {
					...state,
					pontos: state.pontos + action.pontos
				}
			case GANHAR_DINHEIRO:
				return {
					...state,
					dinheiro: state.dinheiro + action.qtd
				}
			case PRODUZIR:
				return {
					...state,
					produtos: {
						...state.produtos,
						[action.produto] : state.produtos[action.produto] + action.qtd
					}
				}
			default:
				return state
		}

	} else {

		return state
		
	}
}