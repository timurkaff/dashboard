import { makeAutoObservable } from 'mobx';

// Проверка, выполняется ли код на клиенте
const isClient = typeof window !== 'undefined';

// Предопределенные данные для начального рендеринга на сервере
const initialDealsData = {
  'January': [
    {
      productName: 'Apple Watch Series 7',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO_GEO_RU?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171068000%2C1631661629000',
      location: '6096 Marjolaine Landing',
      datetime: '12.01.2023 - 12.30 PM',
      piece: 423,
      amount: '$34,295',
      status: 'Delivered'
    },
    {
      productName: 'MacBook Pro 16"',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000',
      location: '8901 Laptop Road',
      datetime: '15.01.2023 - 2.30 PM',
      piece: 150,
      amount: '$29,999',
      status: 'Delivered'
    }
  ]
};

// Предопределенные данные для графика
const initialChartData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  sales: 500 + (i * 20),
}));

class SalesStore {
  data = initialChartData;

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  // Массив продуктов с реальными данными и изображениями
  products = [
    {
      name: 'Apple Watch Series 7',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO_GEO_RU?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171068000%2C1631661629000',
      locations: ['6096 Marjolaine Landing', '1234 Apple Street', '5678 Tech Avenue'],
      price: { min: 399, max: 799 }
    },
    {
      name: 'MacBook Pro 16"',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000',
      locations: ['8901 Laptop Road', '2345 Computer Blvd', '6789 Mac Street'],
      price: { min: 1999, max: 3499 }
    },
    {
      name: 'iPhone 13 Pro',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
      locations: ['1122 Phone Lane', '3344 Mobile Road', '5566 Smartphone Ave'],
      price: { min: 999, max: 1299 }
    },
    {
      name: 'iPad Air',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000',
      locations: ['7788 Tablet Street', '9900 iPad Road', '1122 Touch Avenue'],
      price: { min: 599, max: 899 }
    },
    {
      name: 'AirPods Pro',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000',
      locations: ['3344 Audio Lane', '5566 Sound Street', '7788 Music Road'],
      price: { min: 249, max: 249 }
    },
    {
      name: 'HomePod Mini',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1632925511000',
      locations: ['9900 Smart Home Ave', '1122 Speaker Road', '3344 Voice Lane'],
      price: { min: 99, max: 99 }
    },
    {
      name: 'Apple TV 4K',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1619139498000',
      locations: ['5566 Entertainment Blvd', '7788 Streaming Road', '9900 Media Lane'],
      price: { min: 179, max: 199 }
    },
    {
      name: 'iMac 24"',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000',
      locations: ['1122 Desktop Street', '3344 All-in-One Road', '5566 Computer Lane'],
      price: { min: 1299, max: 1699 }
    },
    {
      name: 'Mac Mini',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603403462000',
      locations: ['7788 Compact Drive', '9900 Small Lane', '1122 Mini Road'],
      price: { min: 699, max: 899 }
    },
    {
      name: 'Apple Pencil',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1540596407165',
      locations: ['3344 Drawing Street', '5566 Stylus Road', '7788 Art Lane'],
      price: { min: 129, max: 129 }
    }
  ];

  dealsData = { ...initialDealsData };

  constructor() {
    makeAutoObservable(this);
    
    // Генерируем случайные данные только на клиенте
    if (isClient) {
      // Используем setTimeout, чтобы избежать ошибок гидратации
      setTimeout(() => {
        this.generateData();
        this.initializeDealsData();
      }, 0);
    }
  }

  generateData(days = 30) {
    // Не генерируем данные на сервере
    if (!isClient) return;
    
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

  // Инициализация данных для всех месяцев
  initializeDealsData() {
    // Не инициализируем данные на сервере
    if (!isClient) return;
    
    this.months.forEach(month => {
      if (month !== 'January' || !this.dealsData['January']) {
        this.updateDealsData(30, month);
      }
    });
  }

  // Обновление данных сделок с использованием массива продуктов
  updateDealsData(days, month) {
    // Не обновляем данные на сервере
    if (!isClient) return;
    
    // Если это January и у нас уже есть данные, не обновляем их
    if (month === 'January' && this.dealsData['January'] && this.dealsData['January'].length > 0) {
      return;
    }
    
    const newDeals = [];
    // Генерируем от 5 до 10 сделок
    const dealsCount = Math.floor(Math.random() * 6) + 5;
    
    // Используем seed для генерации предсказуемых данных для каждого месяца
    const seed = month.charCodeAt(0) + month.length;
    
    for (let i = 0; i < dealsCount; i++) {
      // Выбираем продукт на основе индекса и seed
      const productIndex = (seed + i) % this.products.length;
      const product = this.products[productIndex];
      
      // Выбираем местоположение на основе индекса и seed
      const locationIndex = (seed + i) % product.locations.length;
      
      // Генерируем дату и время на основе seed
      const day = ((seed + i) % 28) + 1;
      const hour = ((seed + i) % 12) + 1;
      const minute = ((seed + i * 7) % 60);
      const ampm = ((seed + i) % 2) === 0 ? 'AM' : 'PM';
      const year = 2023;
      
      // Генерируем количество и сумму на основе seed
      const piece = ((seed + i * 13) % 400) + 100;
      const pricePerUnit = product.price.min + ((seed + i) % (product.price.max - product.price.min + 1));
      const amount = '$' + (pricePerUnit * piece).toLocaleString();
      
      newDeals.push({
        productName: product.name,
        imgSrc: product.imgSrc,
        location: product.locations[locationIndex],
        datetime: `${day < 10 ? '0' + day : day}.${month === 'January' ? '01' : month === 'February' ? '02' : '03'}.${year} - ${hour < 10 ? '0' + hour : hour}.${minute < 10 ? '0' + minute : minute} ${ampm}`,
        piece: piece,
        amount: amount,
        status: ((seed + i) % 3) === 0 ? 'Canceled' : 'Delivered'
      });
    }
    
    this.dealsData = { ...this.dealsData, [month]: newDeals };
  }
}

export const salesStore = new SalesStore(); 