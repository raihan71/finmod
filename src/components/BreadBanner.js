import React from 'react';
import Dropdown from './Dropdown';
export default function BreadBanner({title,auth}) {
  return (
  <div className="w-full inline-flex justify-between px-4 py-5 bg-blue-200 shadow">
      <div className="mt-1 text-3xl font-dm font-semibold text-blue-800">
        {title}
      </div>
      <Dropdown color="white" />
  </div>
  )
}
