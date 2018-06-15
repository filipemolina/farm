/////////////////////////////////// Actions

export const COMPRAR_CARTAS        = 'COMPRAR_CARTAS'
export const JOGAR_CARTA           = 'JOGAR_CARTA'
export const CONSTRUIR             = 'CONSTRUIR'
export const VIRAR_CONSTRUCAO      = 'VIRAR_CONSTRUCAO'
export const PLANTAR               = 'PLANTAR'
export const ATIVAR                = 'ATIVAR'
export const VENDER                = 'VENDER'
export const GANHAR_FELICIDADE     = 'GANHAR_FELICIDADE'
export const PONTUAR               = 'PONTUAR'
export const EMBARALHAR            = 'EMBARALHAR'
export const VIRAR_CARTA           = 'VIRAR_CARTA'
export const COLOCAR_CARTA_NO_DECK = 'COLOCAR_CARTA_NO_DECK'
export const TOGGLE_MENU_COMPRA     = 'TOGGLE_MENU_COMPRA'

/////////////////////////////////// Action Dispatchers

export const comprarCartas = (jogador, cartas) => ({
	type: COMPRAR_CARTAS,
	jogador,
	cartas
})

export const embaralhar = () => ({
	type: EMBARALHAR,
})

export const virarCarta = (jogador, id) => ({
	type: VIRAR_CARTA,
	jogador,
	id
})

export const jogarCarta = (jogador, carta) => ({
	type: JOGAR_CARTA,
	jogador,
	carta
})

export const virarConstrucao = (jogador, campo_id) => ({
	type: VIRAR_CONSTRUCAO,
	jogador,
	campo_id
})

export const ganharFelicidade = (jogador, qtd) => ({
	type: GANHAR_FELICIDADE,
	jogador,
	qtd
})

export const toggleMenuCompra = campo_id => ({
	type: TOGGLE_MENU_COMPRA,
	campo_id
})

export const plantar = (jogador, campo_id, tipo, nome) => ({
	type: PLANTAR,
	jogador,
	campo_id,
	nome,
	tipo,
})

export const construir = (jogador, campo_id, nome) => ({
	type: CONSTRUIR,
	jogador,
	campo_id,
	nome
})