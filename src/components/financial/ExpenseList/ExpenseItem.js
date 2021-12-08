import React from "react";
import styled from "styled-components";

import ExpenseDate from "./ExpenseDate";

const ExpenseItemUi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const ExpenseItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

const ExpenseItemTitle = styled.h2`
  color: #3a3a3a;
  font-size: 1.25rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
`;

const ExpenseItemPrice = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  background-color: #90acf4;
  border: 1px solid white;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
`;

const ExpenseItem = (props) => {
  return (
    <ExpenseItemUi>
      <ExpenseDate date={props.date} />
      <ExpenseItemDescription>
        <ExpenseItemTitle>{props.title}</ExpenseItemTitle>
        <ExpenseItemPrice>{props.amount}원</ExpenseItemPrice>
      </ExpenseItemDescription>
    </ExpenseItemUi>
  );
};

export default ExpenseItem;
