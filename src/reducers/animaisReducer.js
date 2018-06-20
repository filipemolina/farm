const initialState = [
	{ nome: "galinhas", preco: 5, pasta: 'cercados' },
	{ nome: "vacas",    preco: 5, pasta: 'cercados' },
]

export const animaisReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}