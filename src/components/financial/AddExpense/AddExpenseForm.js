import React, { useState } from "react";
import styled from "styled-components";

const AddExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const AddExpenseLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const AddExpenseInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const AddExpenseActions = styled.div`
  text-align: right;
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
  :hover,
  :active {
    background-color: #1242ba;
    border-color: #1242ba;
  }
`;

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <AddExpenseControls>
        <div className="new-expense__control">
          <AddExpenseLabel>이름</AddExpenseLabel>
          <AddExpenseInput
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <AddExpenseLabel>가격</AddExpenseLabel>
          <AddExpenseInput
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <AddExpenseLabel>날짜</AddExpenseLabel>
          <AddExpenseInput
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </AddExpenseControls>
      <AddExpenseActions>
        <AddExpenseButton type="button" onClick={props.onCansle}>
          취소
        </AddExpenseButton>
        <AddExpenseButton type="submit">항목 추가</AddExpenseButton>
      </AddExpenseActions>
    </form>
  );
};

export default ExpenseForm;
