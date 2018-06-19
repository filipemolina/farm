/////////////////////////////////// Actions

export const COMPRAR_CARTAS        = 'COMPRAR_CARTAS'
export const JOGAR_CARTA           = 'JOGAR_CARTA'
export const CONSTRUIR             = 'CONSTRUIR'
export const VIRAR_CONSTRUCAO      = 'VIRAR_CONSTRUCAO'
export const PLANTAR               = 'PLANTAR'
export const PRODUZIR              = 'PRODUZIR'
export const VENDER                = 'VENDER'
export const GANHAR_FELICIDADE     = 'GANHAR_FELICIDADE'
export const PONTUAR               = 'PONTUAR'
export const GANHAR_DINHEIRO       = 'GANHAR_DINHEIRO'
export const EMBARALHAR            = 'EMBARALHAR'
export const VIRAR_CARTA           = 'VIRAR_CARTA'
export const COLOCAR_CARTA_NO_DECK = 'COLOCAR_CARTA_NO_DECK'
export const TOGGLE_MENU_COMPRA    = 'TOGGLE_MENU_COMPRA'
export const EMBARALHAR_OBJETIVOS  = 'EMBARALHAR_OBJETIVOS'
export const SACAR_OBJETIVOS       = 'SACAR_OBJETIVOS'
export const COMPLETAR_OBJETIVO    = 'COMPLETAR_OBJETIVO'
export const VIRAR_MESA            = 'VIRAR_MESA'

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

export const embaralharObjetivos = () => ({
	type: EMBARALHAR_OBJETIVOS,
})

export const sacarObjetivos = (cartas) => ({
	type: SACAR_OBJETIVOS,
	cartas,
})

export const completarObjetivo = (jogador, carta) => ({
	type: COMPLETAR_OBJETIVO,
	jogador,
	carta,
})

export const pontuar = (jogador, pontos) => ({
	type: PONTUAR,
	jogador,
	pontos
})

export const ganharDinheiro = (jogador, qtd) => ({
	type: GANHAR_DINHEIRO,
	jogador,
	qtd
})

export const virarMesa = () => ({
	type: VIRAR_MESA,
})

export const produzir = (jogador, produto, qtd) => ({
	type: PRODUZIR,
	jogador,
	produto,
	qtd
})