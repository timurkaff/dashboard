'use client';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Функция для генерации случайных данных
const generateRandomData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    sales: Math.floor(Math.random() * 1000) + 500,
  }));
};

// Список месяцев
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const data = generateRandomData(30); // Данные для 30 дней

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
              onChange={(e) => setSelectedMonth(e.target.value)}
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
              <LineChart width={1200} height={400} data={data}>
                <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="day"
                  label={{position: 'insideBottom', offset: -5 }}
                />
                <YAxis label={{ angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Продажи" />
              </LineChart>
            </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}