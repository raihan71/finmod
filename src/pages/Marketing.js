import React, { useEffect } from 'react';
import { getAuthToken } from '../utils/authed';
import BreadBanner from '../components/BreadBanner';
import Tab from '../components/Tab';
import Table from '../components/Table';
export default function Marketing() {
  const tabs = [
    {label: 'Email Marketing', action: () => {}},
    {label: 'Notifikasi', action: () => {}},
    {label: 'Draft', action: () => {}}
  ];
useEffect(() => {
    const items = getAuthToken();
    if (!items) {
    window.location.href = '/login';
    }
}, []);
  return (
    <>
        <BreadBanner title="Modul Marketing" />
        <div className="my-6 px-6">
            <div className="px-4 py-2 bg-white rounded-lg shadow">
                <h1 className="text-xl font-semibold pt-1 pb-4">Report Campaign</h1>
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
        <div className="px-6">
            <div className="px-4 py-4 bg-white rounded-lg shadow">
                <div className="grid grid-cols-1 text-center gap-6 mb-4 lg:grid-cols-3">
                    {tabs?.map((tab, i) =>
                        <Tab key={i} label={tab?.label} action={tab?.action}
                           styles="bg-gray-200 hover:bg-white hover:text-blue-500"
                        />
                    )}
                </div>
                <Table />
            </div>
        </div>
    </>
  )
}
