import React from 'react'

export default function Tab({label,action, styles,...props}) {
  return (
  <div onClick={action} className={`w-full cursor-pointer px-4 py-5 rounded-lg shadow ${styles}`} {...props}>
      <h1 className="text-xl">{label}</h1>
  </div>
  )
}