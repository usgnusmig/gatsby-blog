import React from "react"
import styled from "styled-components"

const ExpenseDateUi = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`

const DateMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const DateDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const DateYear = styled.div`
  font-size: 0.75rem;
`

const ExpenseDate = props => {
  const month = props.date.getMonth().toString() + "월"
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" })
  const year = props.date.getFullYear()

  return (
    <ExpenseDateUi>
      <DateMonth>{month}</DateMonth>
      <DateDay>{day}</DateDay>
      <DateYear>{year}</DateYear>
    </ExpenseDateUi>
  )
}

export default ExpenseDate
