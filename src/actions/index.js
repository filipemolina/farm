/////////////////////////////////// Actions

export const COMPRAR_CARTAS        = 'COMPRAR_CARTAS'
export const JOGAR_CARTA           = 'JOGAR_CARTA'
export const CONSTRUIR             = 'CONSTRUIR'
export const PLANTAR               = 'PLANTAR'
export const ATIVAR                = 'ATIVAR'
export const VENDER                = 'VENDER'
export const GANHAR_FELICIDADE     = 'GANHAR_FELICIDADE'
export const PONTUAR               = 'PONTUAR'
export const EMBARALHAR            = 'EMBARALHAR'
export const VIRAR_CARTA           = 'VIRAR_CARTA'
export const COLOCAR_CARTA_NO_DECK = 'COLOCAR_CARTA_NO_DECK'

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