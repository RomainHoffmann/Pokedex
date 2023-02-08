const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        height: "80px",
      }}
    >
      <img src="/logo.svg" alt="" height={"60%"} />
    </header>
  )
}

export default Header
