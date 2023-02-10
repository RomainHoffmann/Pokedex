import GenSelector from "./GenSelector"
import SearchBar from "./SearchBar"

const Filter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem 0px",
        gap: "1rem",
        alignItems: "center",
      }}
      id="filter-container"
    >
      <>
        <SearchBar></SearchBar>
        <GenSelector></GenSelector>
      </>
    </div>
  )
}

export default Filter
