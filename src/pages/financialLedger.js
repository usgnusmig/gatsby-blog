import React, { useState } from "react"
import { Link } from "gatsby"
import Expense from "../components/financial/Expense"
import AddExpense from "../components/financial/AddExpense/AddExpense"
import styled from "styled-components"

const TitleStyle = styled.h2`
  text-align: center;
  color: #003193;
`

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "화장지",
    amount: 130000,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "맥북",
    amount: 1500000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "주유소",
    amount: 500000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "화분",
    amount: 230000,
    date: new Date(2021, 5, 12),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <TitleStyle>
        <Link to="/about">가계부</Link>
      </TitleStyle>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  )
}

export default App
