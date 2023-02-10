import React, { Dispatch, SetStateAction, useState } from "react"

type TabProps = {
  children: React.ReactNode
  title: string
}

export const Tab = ({ children }: TabProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  )
}

type TabTitleProps = {
  title: string
  setSelectedTab: Dispatch<SetStateAction<number>>
  index: number
  active: boolean
  colorSchema?: {
    active: {
      backgroundColor: string
      outline: string
    }
  }
}

export const TabTitle = ({
  title,
  setSelectedTab,
  index,
  colorSchema,
  active,
}: TabTitleProps) => {
  return (
    <li
      onClick={() => setSelectedTab(index)}
      style={{
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: active ? colorSchema?.active.backgroundColor : "white",
        outline: active ? `2px solid ${colorSchema?.active.outline}` : "none",
        borderRadius: 25,
        color: active ? "white" : "",
        padding: "4px 8px",
      }}
    >
      {title}
    </li>
  )
}

type TabsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode
  colorSchema?: {
    titleSection: {
      active: {
        backgroundColor: string
        outline: string
      }
    }
  }
}

export const Tabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const { colorSchema, ...divProps } = props

  return (
    <div {...divProps}>
      <ul
        style={{
          margin: 0,
          listStyle: "none",
          display: "flex",
          gap: 5,
          padding: 5,
          height: "10%",
          alignItems: "center",
        }}
      >
        {React.Children.map(
          props.children as React.ReactElement[],
          (item: React.ReactElement, index) => {
            return (
              <TabTitle
                key={`tab-${item.props.title}}`}
                title={item.props.title}
                index={index}
                setSelectedTab={setSelectedTab}
                colorSchema={props.colorSchema?.titleSection}
                active={selectedTab === index}
              />
            )
          }
        )}
      </ul>
      <div style={{ padding: "0px 18px", overflow: "auto", height: "90%" }}>
        {React.Children.toArray(props.children)[selectedTab]}
      </div>
    </div>
  )
}
