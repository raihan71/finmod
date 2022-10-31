import React from 'react';

export default function Alert({message,bg,color,action, ...props}) {
  return (
  <div className={`alert ${bg} rounded-lg py-5 px-6 mb-6 text-base ${color} inline-flex items-center w-full alert-dismissible fade show`} role="alert" {...props}>
    {message}
    <button type="button" className={`btn-close box-content w-4 h-4 p-1 ml-auto ${color} border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:${color} hover:opacity-75 hover:no-underline`} data-bs-dismiss="alert" aria-label="Close" onClick={action}></button>
  </div>
  )
}
