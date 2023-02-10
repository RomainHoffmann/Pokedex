import styled from "styled-components"
import pokeball from "/pokeball.png"

const PokeballContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  display: flex;
  z-index: -1;

  img {
    width: clamp(300px, 60vw, 500px);
  }

  div {
    height: 100%;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
  }
`

const PokeballBackground = () => {
  return (
    <PokeballContainer id="pokeball-background-container">
      <img
        id="pokeball-background-image"
        src={pokeball}
        alt="Pokeball Background"
      />
      <div id="pokeball-background-opacity" />
    </PokeballContainer>
  )
}

export default PokeballBackground
