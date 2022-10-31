import React, { useEffect } from 'react';
import faker from 'faker';
import { getAuthToken } from '../utils/authed';
import { BarChart } from '../components/chart/BarChart';
import BreadBanner from '../components/BreadBanner';
import img from '../config/images';
export default function Contact() {
    const options={
        layout: {
            padding: 50
        },
        plugins: {
          title: {
            align: 'start',
            display: false,
            font: {
                size: 20,
                lineHeight: '32px'
            },
            text: "Total Revenue",
          },
          legend: {
            display: true,
            position: "bottom"
         }
        }
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Premium 6 Bulan',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: '#3838B7',
        },
        {
            label: 'Premium 1 Bulan',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#91BBF3',
          },
        {
          label: 'Premium 1 Minggu',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: '#2F80ED',
        },
      ],
    };
    useEffect(() => {
        const items = getAuthToken();
        if (!items) {
        window.location.href = '/login';
        }
    }, []);
  return (
   <>
    <BreadBanner title="Beranda" />
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
    <div className="px-6">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <div className="px-4 py-2 bg-white rounded-lg shadow">
                <p className="text-lg text-gray-600 pt-1 pb-4">Report Campaign</p>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="w-full h-auto px-4 py-5 bg-gray-100 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full h-auto px-4 py-5 bg-gray-100 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl text-gray-900">
                            $ 450k
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow">
                <p className="text-lg text-gray-600 pt-1 pb-5">Latest Campaign</p>
                <div className="grid grid-cols-1 lg:grid-cols-1">
                    <ul className="w-full py-2">
                        <li className="grid grid-rows-3 justify-start grid-flow-col gap-3 mb-2">
                            <img className="row-span-3" src={img.t} alt="T Logo" />
                            <span className="col-span-3">Design Product for help Designer and Developer</span>
                            <span className="col-span-2 text-gray-600 text-sm">Design systems Platform</span>
                            <span className="col-span-2 text-xs text-gray-500">Just Now</span>
                        </li>
                        <li className="grid grid-rows-3 justify-start grid-flow-col gap-3 mb-2">
                            <img className="row-span-3" src={img.t} alt="T Logo" />
                            <span className="col-span-2">Design Product for help Designer and Developer</span>
                            <span className="col-span-2 text-gray-600 text-sm">Design systems Platform</span>
                            <span className="col-span-2 text-xs text-gray-500">Just Now</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="px-6">
        <div className="bg-white rounded-lg shadow">
            <BarChart options={options} chartData={data} />
        </div>
    </div>
   </>
  )
}
