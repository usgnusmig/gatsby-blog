import React from "react"

const Categories = ({ data, onChangeCat }) => {
  const { group } = data.allMarkdownRemark
  const clickHandler = event => {
    onChangeCat(event.target.innerText)
  }

  return (
    <ol className="category-box">
      <li
        key={"All"}
        onClick={clickHandler}
        onKeyPress={clickHandler}
        role="presentation"
      >
        All
      </li>
      {group.map(prop => {
        const { fieldValue } = prop
        return (
          <li
            key={fieldValue}
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="presentation"
          >
            {fieldValue}
          </li>
        )
      })}
    </ol>
  )
}
export default Categories
