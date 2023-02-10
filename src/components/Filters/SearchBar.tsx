import styled from "styled-components"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setSearchTextFilter } from "../../redux/filterSlice"
import { CrossButton } from "../Shared/CrossButton"

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`

const SearchBar = () => {
  const searchTextFilter = useAppSelector(
    (state) => state.filter.searchTextFilter
  )
  const dispatch = useAppDispatch()

  return (
    <SearchBarContainer id="search-bar-container">
      <input
        id="search-bar"
        style={{
          border: "none",
          backgroundColor: "rgb(230, 230, 230)",
          padding: "10px",
          borderRadius: 15,
          fontSize: "1.2rem",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          width: "100%",
        }}
        type="text"
        value={searchTextFilter}
        placeholder="Search for a Pokemon ..."
        onChange={(e) => {
          dispatch(setSearchTextFilter(e.target.value))
        }}
      />

      <CrossButton
        right
        onClick={() => {
          dispatch(setSearchTextFilter(""))
        }}
      ></CrossButton>
    </SearchBarContainer>
  )
}

export default SearchBar
