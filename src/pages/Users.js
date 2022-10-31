import React from 'react';
import BreadBanner from '../components/BreadBanner';
export default function Users() {
  return (
    <>
        <BreadBanner title="Manajemen User" />
        <div className="my-6 px-6">
            <div className="px-4 py-2 bg-white rounded-lg shadow">
                <h1 className="text-xl font-semibold pt-1 pb-4">{`Today's Report`}</h1>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                    <div className="w-full px-4 py-5 bg-gray-100 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-gray-100 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-gray-100 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl text-gray-900">
                            20k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-gray-100 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
