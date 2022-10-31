import React from 'react';

export default function Alert({message,type, action, ...props}) {
  return (
  <div className={`alert bg-${type}-100 rounded-lg py-5 px-6 mb-6 text-base text-${type}-700 inline-flex items-center w-full alert-dismissible fade show`} role="alert" {...props}>
    {message}
    <button type="button" className={`btn-close box-content w-4 h-4 p-1 ml-auto text-${type}-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-${type}-900 hover:opacity-75 hover:no-underline`} data-bs-dismiss="alert" aria-label="Close" onClick={action}></button>
  </div>
  )
}
