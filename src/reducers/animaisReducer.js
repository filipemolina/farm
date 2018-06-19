const initialState = [
	{ nome: "galinhas", preco: 5 },
	{ nome: "vacas",    preco: 5 },
]

export const animaisReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}