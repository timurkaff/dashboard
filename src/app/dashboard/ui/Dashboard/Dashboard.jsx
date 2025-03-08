'use client';
import { useState, useEffect } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { observer } from 'mobx-react-lite';
import { salesStore } from '../../../../lib/store/SalesStore';

const months = salesStore.getMonths();

/**
 * @typedef {Object} DashboardProps
 * @property {boolean} [isDrawerOpen] - Флаг, указывающий, открыто ли боковое меню
 */

/**
 * Компонент Dashboard
 * @param {DashboardProps} props - Свойства компонента
 * @returns {JSX.Element}
 */

export const Dashboard = observer(({ isDrawerOpen }) => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [dealsSelectedMonth, setDealsSelectedMonth] = useState('January');
  const [isMobile, setIsMobile] = useState(false);
  const data = salesStore.data;
  const dealsData = salesStore.dealsData ? (salesStore.dealsData[dealsSelectedMonth] || []) : [];

  // Определяем, является ли устройство мобильным
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Проверяем при загрузке
    checkIfMobile();
    
    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', checkIfMobile);
    
    // Очищаем слушатель при размонтировании
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
    salesStore.updateDealsData && salesStore.updateDealsData(days, selectedValue);
  };

  const getStatusClass = (status) => {
    return status === 'Delivered' ? 'text-white bg-green-500' : 'text-white bg-red-500';
  };

  // Добавляем класс к chart-container в зависимости от состояния isDrawerOpen
  const chartContainerClass = `chart-container ${isDrawerOpen ? 'drawer-active' : ''}`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      
      {/* Статистические карточки - адаптивная сетка */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-7">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-2 md:mb-4 text-sm md:text-base">Total User</h2>
          <p className="text-xl md:text-3xl font-bold mb-3 md:mb-7">40,689</p>
          <div className="flex gap-2 md:gap-4 items-center text-xs md:text-sm">
            <p>ФОТО</p>
            <p>8.5% Up from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-2 md:mb-4 text-sm md:text-base">Total Order</h2>
          <p className="text-xl md:text-3xl font-bold mb-3 md:mb-7">40,689</p>
          <div className="flex gap-2 md:gap-4 items-center text-xs md:text-sm">
            <p>ФОТО</p>
            <p>1.3% Up from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-2 md:mb-4 text-sm md:text-base">Total Sales</h2>
          <p className="text-xl md:text-3xl font-bold mb-3 md:mb-7">40,689</p>
          <div className="flex gap-2 md:gap-4 items-center text-xs md:text-sm">
            <p>ФОТО</p>
            <p>4.3% Up from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-2 md:mb-4 text-sm md:text-base">Total Pending</h2>
          <p className="text-xl md:text-3xl font-bold mb-3 md:mb-7">40,689</p>
          <div className="flex gap-2 md:gap-4 items-center text-xs md:text-sm">
            <p>ФОТО</p>
            <p>1.8% Down from yesterday</p>
          </div>
        </div>
      </div>

      {/* График продаж - адаптивный */}
      <div className="mt-4 md:mt-8 bg-white pt-3 md:pt-5 pb-3 md:pb-5 rounded-lg shadow">
        <div className="mb-2 md:mb-4 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between px-4 md:px-8 mt-2 md:mt-9 mb-2 md:mb-9 gap-2 sm:gap-0 sm:items-center">
            <h2 className="text-lg md:text-2xl font-bold">Sales Details</h2>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border rounded p-1 md:p-2 text-sm md:text-base w-full sm:w-auto"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center px-4 md:px-8">
            <div className={chartContainerClass} style={{ width: '100%', height: isMobile ? '250px' : '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={1200} height={isMobile ? 250 : 400} data={data} margin={{ 
                  top: 10, 
                  right: isMobile ? 10 : 30, 
                  left: isMobile ? 0 : 20, 
                  bottom: isMobile ? 0 : 30 
                }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="day"
                    label={isMobile ? null : { position: 'insideBottom', offset: -5 }}
                    tickFormatter={(value) => `${value * 5}кк`}
                    tick={{ fontSize: isMobile ? 10 : 12 }}
                  />
                  <YAxis 
                    label={isMobile ? null : { angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fontSize: isMobile ? 10 : 12 }}
                    width={isMobile ? 30 : 40}
                  />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Таблица сделок - адаптивная */}
      <div className="mt-4 md:mt-8 bg-white pt-3 md:pt-5 pb-3 md:pb-5 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between px-4 md:px-8 items-center mt-2 md:mt-9 mb-2 md:mb-4 gap-2 sm:gap-0">
          <h2 className="text-lg md:text-2xl font-bold">Deals Details</h2>
          <select
            id="deals-month-select"
            value={dealsSelectedMonth}
            onChange={handleDealsMonthChange}
            className="border rounded p-1 md:p-2 text-sm md:text-base w-full sm:w-auto"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto px-2 md:px-8">
          <table className="table w-full text-xs md:text-base">
            <thead>
              <tr className="text-left">
                <th className="py-2">Product Name</th>
                {!isMobile && <th className="py-2">Location</th>}
                {!isMobile && <th className="py-2">Date - Time</th>}
                <th className="py-2">Piece</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {dealsData.map((deal, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-8 h-8 md:w-12 md:h-12">
                          <img src={deal.imgSrc} alt={deal.productName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs md:text-sm">{deal.productName}</div>
                        {isMobile && (
                          <div className="text-xs text-gray-500 mt-1">
                            {deal.datetime}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  {!isMobile && <td className="py-2">{deal.location}</td>}
                  {!isMobile && <td className="py-2">{deal.datetime}</td>}
                  <td className="py-2">{deal.piece}</td>
                  <td className="py-2">{deal.amount}</td>
                  <td className="py-2">
                    <span className={`${getStatusClass(deal.status)} px-1 md:px-2 py-1 rounded-md font-bold text-xs md:text-sm`}>{deal.status}</span>
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