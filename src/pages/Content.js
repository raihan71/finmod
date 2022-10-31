import React, { useEffect } from 'react';
import { getAuthToken } from '../utils/authed';
import faker from 'faker';
import BreadBanner from '../components/BreadBanner';
import Tab from '../components/Tab';
import { LineChart } from '../components/chart/LineChart';
export default function Content() {
    const tabs = [
        {label: 'Home Page', action: () => {}},
        {label: 'About Us', action: () => {}},
        {label: 'Cara Kerja', action: () => {}},
        {label: 'Pricing', action: () => {}},
        {label: 'Bantuan', action: () => {}}
    ];
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
          fill: false,
          tension: 0.4
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
    <BreadBanner title="Modul Konten" />
    <div className="my-6 px-6">
        <div className="grid grid-cols-1 text-center gap-6 lg:grid-cols-5">
            {tabs?.map((tab, i) =>
                <Tab key={i} label={tab?.label} action={tab?.action}
                styles="bg-gray-200 hover:bg-white hover:text-blue-500"
                />
            )}
        </div>
    </div>
    <div className="px-6">
        <div className="bg-white rounded-lg shadow">
            <div className="flex pt-2">
                <span className="text-xl absolute ml-16 text-gray-800 mt-4">Sales Trend</span>
            </div>
            <LineChart options={options} chartData={data} />
        </div>
    </div>
   </>
  )
}
