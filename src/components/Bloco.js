import React, { Component } from 'react'
import styled from 'styled-components'
import '../animation.css'

const bgColor = "#7d543f"

const Cubo = styled.div`
	width: 10vw;
	height: 10vw;
	position: absolute;
	top: 0;
	left: 1vw;
	box-shadow: 5px 5px 40px;
	cursor: pointer;

	perspective: 600px;
	transform-style: preserve-3d
`

const Face = styled.div`
	width: inherit;
	height: inherit;
	position: absolute;

	&.top {
		transform: translate3d(0, 0, 1vw);
		background-size: cover;
	}

	&.bottom {
		transform: rotateY(180deg);
		background-size: cover;
	}

	&.front {
		transform: rotateX(-90deg) scaleY(0.1);
    background-color: ${bgColor};
    transform-origin: 100% 100%;
	}

	&.back {
		transform: rotateX(90deg) scaleY(0.1);
    background-color: ${bgColor};
    transform-origin: 0% 0%;	
	}

	&.right {
		transform: rotateY(90deg) scaleX(0.1);
    background-color: ${bgColor};
    transform-origin: 100% 100%;
	}

	&.left {
		transform: rotateY(-90deg) scaleX(0.1);
    background-color: ${bgColor};
    transform-origin: 0% 0%;
	}
`

class Bloco extends Component {

	state = {
		classe: "null"
	}

	calculaNome = (tipo, nome) => {

		let topo, fundo

		if(tipo === "construcao"){
			topo = `url(/construcoes/${nome}.png)`
			fundo = topo
		} else if(tipo === 'plantacao'){
			topo = `url(/sementes/${nome}.png)`
			fundo = `url(/cercados/${nome}.png)`
		} else {
			topo = `url(/cercados/${nome}.png)`
			fundo = `url(/sementes/${nome}.png)`
		}

		return { topo, fundo }
	}

	rodarBloco = () => {
		if(this.state.classe === ""){
			this.setState({
				classe: "rodar_bloco"
			})
		} else if(this.state.classe === "rodar_bloco") {
			this.setState({
				classe: "voltar_bloco"
			})
		} else {
			this.setState({
				classe: "rodar_bloco"
			})
		}
	}

	render(){

		const { tipo, nome } = this.props
		const { classe } = this.state

		const imagens = this.calculaNome(tipo, nome)

		return(
			<Cubo className={classe} onClick={this.rodarBloco}>
				<Face className="front"/>
				<Face className="back" />
				<Face className="left" />
				<Face className="right" />
				<Face className="top" style={{ backgroundImage: imagens.topo }}/>
				<Face className="bottom" style={{ backgroundImage: imagens.fundo }}/>
			</Cubo>
		)
	}
}

export default Bloco