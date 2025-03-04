import { makeAutoObservable } from 'mobx';

class SalesStore {
  data = [];

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  dealsData = {
    'January': [
      {
        productName: 'Apple Watch',
        imgSrc: 'https://via.placeholder.com/150',
        location: '6096 Marjolaine Landing',
        datetime: '12.09.2019 - 12.53 PM',
        piece: 423,
        amount: '$34,295',
        status: 'Delivered'
      },
      {
        productName: 'New Product',
        imgSrc: 'https://via.placeholder.com/150',
        location: '1234 New Location',
        datetime: '15.10.2020 - 2.30 PM',
        piece: 150,
        amount: '$29,999',
        status: 'Delivered'
      }
    ],
    'February': [
      {
        productName: 'Samsung Galaxy',
        imgSrc: 'https://via.placeholder.com/150',
        location: '8910 Galaxy Road',
        datetime: '01.02.2021 - 10.00 AM',
        piece: 300,
        amount: '$25,000',
        status: 'Delivered'
      }
    ]
  };

  constructor() {
    makeAutoObservable(this);
    this.generateData();
  }

  generateData(days = 30) {
    this.data = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      sales: Math.floor(Math.random() * 1000) + 500,
    }));
  }

  getMonths() {
    return this.months;
  }

  updateData(days) {
    this.generateData(days);
  }

  updateDealsData(days, month = 'Octaber') {
    const newDeals = [];
    for (let i = 0; i < 2; i++) {
      newDeals.push({
        productName: i === 0 ? 'Apple Watch' : 'New Product',
        imgSrc: 'https://via.placeholder.com/150',
        location: i === 0 ? '6096 Marjolaine Landing' : '1234 New Location',
        datetime: i === 0 ? '12.09.2019 - 12.53 PM' : '15.10.2020 - 2.30 PM',
        piece: Math.floor(Math.random() * 500) + 100,
        amount: '$' + (Math.floor(Math.random() * 50000) + 10000),
        status: Math.random() > 0.5 ? 'Delivered' : 'Canceled'
      });
    }
    this.dealsData = { ...this.dealsData, [month]: newDeals };
  }
}

export const salesStore = new SalesStore(); 