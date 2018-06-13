/////////////////////////////////// Actions

export const COMPRAR_CARTAS    = 'COMPRAR_CARTAS'
export const JOGAR_CARTA       = 'JOGAR_CARTA'
export const CONSTRUIR         = 'CONSTRUIR'
export const PLANTAR           = 'PLANTAR'
export const ATIVAR            = 'ATIVAR'
export const VENDER            = 'VENDER'
export const GANHAR_FELICIDADE = 'GANHAR_FELICIDADE'
export const PONTUAR           = 'PONTUAR'

/////////////////////////////////// Action Dispatchers

export const comprarCartas = (jogador, numero_cartas) => ({
	type: COMPRAR_CARTAS,
	jogador,
	numero_cartas
})