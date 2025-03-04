'use client';
import { useState } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { observer } from 'mobx-react-lite';
import { salesStore } from '../../../lib/store/SalesStore';

const months = salesStore.getMonths();

export const Dashboard = observer(() => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [dealsSelectedMonth, setDealsSelectedMonth] = useState('January');
  const data = salesStore.data;
  const dealsData = salesStore.dealsData ? (salesStore.dealsData[dealsSelectedMonth] || []) : [];

  const handleMonthChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedMonth(selectedValue);
    const days = selectedValue === 'January' ? 31 : 30;
    salesStore.updateData(days);
  };

  const handleDealsMonthChange = (e) => {
    const selectedValue = e.target.value;
    setDealsSelectedMonth(selectedValue);
    const days = selectedValue === 'January' ? 31 : 30;
    salesStore.updateDealsData && salesStore.updateDealsData(days);
  };

  const getStatusClass = (status) => {
    return status === 'Delivered' ? 'text-white bg-green-500' : 'text-white bg-red-500';
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-7">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-4">Total User</h2>
          <p className="text-3xl font-bold mb-7">40,689</p>
          <div className="flex gap-4">
            <p>ФОТО</p>
            <p>8.5% Up from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-4">Total Order</h2>
          <p className="text-3xl font-bold mb-7">40,689</p>
          <div className="flex gap-4">
            <p>ФОТО</p>
            <p>1.3% Up from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-4">Total Sales</h2>
          <p className="text-3xl font-bold mb-7">40,689</p>
          <div className="flex gap-4">
            <p>ФОТО</p>
            <p>4.3% Up from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-4">Total Pending</h2>
          <p className="text-3xl font-bold mb-7">40,689</p>
          <div className="flex gap-4">
            <p>ФОТО</p>
            <p>1.8% Down from yesterday</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white pt-5 pb-5 rounded-lg shadow">
        <div className="mb-4 flex flex-col">
          <div className="flex justify-between px-8 mt-9 mb-9">
            <h2 className="text-2xl font-bold">Sales Details</h2>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border rounded p-2"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center px-8">
            <div style={{ width: '100%', height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={1200} height={400} data={data} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="day"
                    label={{ position: 'insideBottom', offset: -5 }}
                    tickFormatter={(value) => `${value * 5}кк`}
                  />
                  <YAxis 
                    label={{ angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white pt-5 pb-5 rounded-lg shadow">
        <div className="flex justify-between px-8 items-center mt-9 mb-4">
          <h2 className="text-2xl font-bold">Deals Details</h2>
          <select
            id="deals-month-select"
            value={dealsSelectedMonth}
            onChange={handleDealsMonthChange}
            className="border rounded p-2"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto px-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Location</th>
                <th>Date - Time</th>
                <th>Piece</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dealsData.map((deal, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={deal.imgSrc} alt={deal.productName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{deal.productName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{deal.location}</td>
                  <td>{deal.datetime}</td>
                  <td>{deal.piece}</td>
                  <td>{deal.amount}</td>
                  <td>
                    <span className={`${getStatusClass(deal.status)} px-2 py-1 rounded-md font-bold`}>{deal.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});