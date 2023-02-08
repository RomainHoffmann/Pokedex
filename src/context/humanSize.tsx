import React from "react"

interface HumanSizeContextProps {
  humanSize: number
  setHumanSize: React.Dispatch<React.SetStateAction<number>>
}

export const HumanSizeContext = React.createContext<HumanSizeContextProps>({
  humanSize: 175,
  setHumanSize: () => {},
})

type Props = {
  humanSize: number
  setHumanSize: React.Dispatch<React.SetStateAction<number>>
  children: React.ReactNode
}

export const HumanSizeProvider = ({
  humanSize,
  children,
  setHumanSize,
}: Props) => {
  return (
    <HumanSizeContext.Provider
      value={{
        humanSize,
        setHumanSize,
      }}
    >
      {children}
    </HumanSizeContext.Provider>
  )
}

export const useHumanSize = () => React.useContext(HumanSizeContext)
