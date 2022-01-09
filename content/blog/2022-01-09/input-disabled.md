---
title: React Input disabled handl
date: "2022-01-09"
description: React Input Handl
categories: React
---

## Disabled 설정 on/off 하기

인풋 박스를 사용하다 보면 조건부로 `disabled`처리를 하고 싶을 때가 있다.
그럴 땐 `useState`를 통해 관리하면 된다.

#### source code

```js
import React, { useState } from "react"

const Input = () => {
  const [flip, setFlip] = useState(true)

  const flipHandler = () => {
    setFlip(current => !current)
  }

  return (
    <div>
      <h1>Input Boxs</h1>
      <div>
        <label>Email</label>
        <input
          type="string"
          id="email"
          placeholder="email"
          disabled={flip === false}
        />
      </div>
      <div></div>

      <label>Password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        disabled={flip === true}
      />

      <button onClick={flipHandler}>Change disabled</button>
    </div>
  )
}

export default Input
```
