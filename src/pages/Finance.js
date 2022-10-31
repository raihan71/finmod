import React, { useEffect } from 'react';
import { getAuthToken } from '../utils/authed';
import faker from 'faker';
import BreadBanner from '../components/BreadBanner';
import { BarChart } from '../components/chart/BarChart';
import { LineChart } from '../components/chart/LineChart';
import Table from '../components/Table';
export default function Finance() {
    const options={
        layout: {
            padding: 70
        },
        plugins: {
          title: {
            align: 'start',
            display: false,
            font: {
                size: 20,
                lineHeight: '32px'
            },
            text: "Sales Trend",
          },
          legend: {
            display: false,
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
          borderColor: '#2F80ED',
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
      <BreadBanner title="Modul Finance" />
        <div className="my-6 px-6">
            <div className="bg-white rounded-lg shadow">
                <div className="flex pt-2">
                    <span className="text-xl absolute ml-16 text-gray-800 mt-4">Sales Trend</span>
                </div>
                <LineChart options={options} chartData={data} />
            </div>
        </div>
        <div className="mb-6 px-6">
            <div className="bg-white rounded-lg shadow">
                <div className="flex pt-2">
                    <span className="text-xl absolute ml-16 text-gray-800 mt-4">Total Revenue</span>
                </div>
                <BarChart options={options} chartData={data} />
            </div>
        </div>
        <div className="px-6 mb-6">
            <Table />
        </div>
    </>
  )
}
