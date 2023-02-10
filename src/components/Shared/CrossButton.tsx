import styled from "styled-components"

type Props = {
  onClick: () => void
  left?: boolean
  top?: boolean
  bottom?: boolean
  right?: boolean
  color?: string
}

const CrossButtonContainer = styled.div`
  position: absolute;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;

  ${(props: Props) => (props.left ? "left: 0;" : "")}
  ${(props: Props) => (props.right ? "right: 0;" : "")}
  ${(props: Props) => (props.top ? "top: 0;" : "")}
  ${(props: Props) => (props.bottom ? "bottom: 0;" : "")}


  span {
    position: absolute;
    height: 4px;
    width: 100%;
    ${(props: Props) => `background-color: ${props.color};`}
  }

  #cross-1 {
    transform: rotate(45deg);
  }

  #cross-2 {
    transform: rotate(-45deg);
  }
`

export const CrossButton = ({
  onClick,
  left,
  right,
  top,
  bottom,
  color = "gray",
}: Props) => {
  return (
    <CrossButtonContainer
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      onClick={onClick}
      color={color}
      id="cross-container"
    >
      <span id="cross-1"></span>
      <span id="cross-2"></span>
    </CrossButtonContainer>
  )
}
