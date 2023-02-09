import GenSelector from "./GenSelector"
import SearchBar from "./SearchBar"

const Filter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <SearchBar></SearchBar>
      <GenSelector></GenSelector>
    </div>
  )
}

export default Filter
