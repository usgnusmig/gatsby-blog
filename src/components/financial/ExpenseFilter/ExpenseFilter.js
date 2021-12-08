import React from "react";
import styled from "styled-components";

const ExpenseFilterUi = styled.div`
  color: white;
  padding: 0 1rem;
`;

const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

const ExpenseFilter = (props) => {
  const DropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ExpenseFilterUi>
      <ExpenseFilterControl>
        <FilterLabel>연도별 정렬</FilterLabel>
        <FilterSelect value={props.selected} onChange={DropdownHandler}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </FilterSelect>
      </ExpenseFilterControl>
    </ExpenseFilterUi>
  );
};

export default ExpenseFilter;
