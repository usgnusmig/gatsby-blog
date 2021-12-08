import React, { useState } from "react";

import styled from "styled-components";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./Chart/ExpenseChart";

const StyledLi = styled.li`
  list-style: none;
`;
const ExpenseUi = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState("2021");

  const FilterYearHandler = (selected) => {
    setFilterYear(selected);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <StyledLi>
      <ExpenseUi>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={FilterYearHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </ExpenseUi>
    </StyledLi>
  );
};

export default Expense;
