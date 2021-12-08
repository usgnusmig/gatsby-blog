import React, { useState } from "react";

import AddExpenseForm from "./AddExpenseForm";
import styled from "styled-components";

const StyledAddExpense = styled.div`
  background-color: #90acf4;
  color: white;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const AddExpenseButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #0027b5;
  background-color: #0027b5;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;
  &:hover,
  :active {
    background-color: #1242ba;
    border-color: #1242ba;
  }
`;

const AddExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <StyledAddExpense>
      {!isEditing && (
        <AddExpenseButton onClick={startEditingHandler}>
          새 항목 추가
        </AddExpenseButton>
      )}
      {isEditing && (
        <AddExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCansle={stopEditingHandler}
        />
      )}
    </StyledAddExpense>
  );
};

export default AddExpense;
