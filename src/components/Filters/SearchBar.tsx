import styled from "styled-components"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setSearchTextFilter } from "../../redux/filterSlice"

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EraseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: absolute;

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: gray;
  }

  .span-1 {
    transform: rotate(45deg);
  }

  .span-2 {
    transform: rotate(-45deg);
  }
`

const SearchBar = () => {
  const searchTextFilter = useAppSelector(
    (state) => state.filter.searchTextFilter
  )
  const dispatch = useAppDispatch()

  return (
    <SearchBarContainer>
      <input
        style={{
          width: "400px",
          border: "none",
          backgroundColor: "rgb(230, 230, 230)",
          padding: "10px",
          borderRadius: 15,
          fontSize: "1.2rem",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        }}
        type="text"
        value={searchTextFilter}
        placeholder="Search for a Pokemon ..."
        onChange={(e) => {
          dispatch(setSearchTextFilter(e.target.value))
        }}
      />
      <EraseButton
        style={{ position: "absolute" }}
        onClick={() => {
          dispatch(setSearchTextFilter(""))
        }}
      >
        <span className="span-1"></span>
        <span className="span-2"></span>
      </EraseButton>
    </SearchBarContainer>
  )
}

export default SearchBar
