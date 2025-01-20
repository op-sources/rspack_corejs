import React from 'react'
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('aaaaaaa')
    }, 1000)
})
export default function App() {
    // 使用Promise
    console.log(p) // 希望对Promise做polyfill
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}
