import {
	JOGAR_CARTA
} from '../actions'

export const descarteReducer = (state=[], action) =>{
	switch(action.type){
		case JOGAR_CARTA:
			return [
				...state,
				action.carta
			]
		default:
			return state
	}
}