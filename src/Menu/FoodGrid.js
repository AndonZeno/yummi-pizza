import styled from "styled-components"
import { Title } from "../Styles/title"

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px;
`

export const Food = styled.div`
  height: 150px;
  padding: 10px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  font-size: 20px;
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 1px 1px 2px grey;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 5px 10px grey;
    filter: contrast(100%);
    margin-top: 0;
    margin-bottom: 5px;
  }
`
