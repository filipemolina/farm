import React, { Component } from 'react'
import styled from 'styled-components'

const StldSinais = styled.div`
	width: 10vw;
	height: 100%;
	position: absolute;
	right: -10vw;
	top: 0;
`
const Plus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 7vw;
  height: 7vw;
  background-image: url(/bg/plus-minus.svg);
  background-size: 15vw;
  background-position: -4vw -3vw;
`
const Minus = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 4vw;
  height: 4vw;
  background-image: url(/bg/plus-minus.svg);
  background-size: 10vw;
  background-position: -3vw -8vw;
`
class Sinais extends Component {
	render(){
		return(
			<StldSinais>
				<Plus />
				<Minus />
			</StldSinais>
		)
	}
}

export default Sinais