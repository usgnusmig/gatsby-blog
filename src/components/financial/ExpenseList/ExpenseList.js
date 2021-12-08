import React from "react";
import styled from "styled-components";

import ExpenseItem from "./ExpenseItem";

const ExpenseListUi = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpenseFallback = styled.h2`
  color: white;
  text-align: center;
`;

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <ExpenseFallback>자료 없어요</ExpenseFallback>;
  }
  return (
    <ExpenseListUi>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ExpenseListUi>
  );
};

export default ExpenseList;
