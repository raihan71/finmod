import React from 'react';

export default function Table({table,header,rows,columns}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="border-b bg-blue-200">
          <tr>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              #
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              First
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Last
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mark
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Otto
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @mdo
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jacob
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Thornton
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @fat
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td colSpan="2" className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
              Larry the Bird
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @twitter
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
