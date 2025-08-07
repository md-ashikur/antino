export interface DealsDataType {
  key: React.Key;
  product: string;
  location: string;
  datetime: string;
  price: string;
  amount: number;
  status: string;
}

const demoData: Record<string, DealsDataType[]> = {
  January: [
    { key: 1, product: 'iPhone 15', location: 'New York', datetime: '2025-01-12 10:30', price: '$999', amount: 2, status: 'Completed' },
    { key: 2, product: 'MacBook Pro', location: 'London', datetime: '2025-01-15 14:20', price: '$2499', amount: 1, status: 'Pending' },
    { key: 3, product: 'AirPods Pro', location: 'Berlin', datetime: '2025-01-18 09:10', price: '$249', amount: 3, status: 'Completed' },
    { key: 4, product: 'iPad Air', location: 'Tokyo', datetime: '2025-01-22 16:45', price: '$599', amount: 1, status: 'Cancelled' },
  ],
  February: [
    { key: 1, product: 'Galaxy S24', location: 'Seoul', datetime: '2025-02-03 11:00', price: '$899', amount: 2, status: 'Completed' },
    { key: 2, product: 'Surface Pro', location: 'San Francisco', datetime: '2025-02-10 13:30', price: '$1299', amount: 1, status: 'Pending' },
    { key: 3, product: 'Pixel 8', location: 'Paris', datetime: '2025-02-14 15:00', price: '$799', amount: 2, status: 'Completed' },
    { key: 4, product: 'Apple Watch', location: 'Sydney', datetime: '2025-02-20 17:20', price: '$399', amount: 1, status: 'Completed' },
  ],
  March: [
    { key: 1, product: 'PlayStation 5', location: 'Los Angeles', datetime: '2025-03-05 12:00', price: '$499', amount: 1, status: 'Completed' },
    { key: 2, product: 'Xbox Series X', location: 'Toronto', datetime: '2025-03-12 14:40', price: '$499', amount: 1, status: 'Pending' },
    { key: 3, product: 'Nintendo Switch', location: 'Rome', datetime: '2025-03-18 10:15', price: '$299', amount: 2, status: 'Completed' },
    { key: 4, product: 'Kindle Paperwhite', location: 'Amsterdam', datetime: '2025-03-25 18:30', price: '$129', amount: 1, status: 'Cancelled' },
  ],
  April: [
    { key: 1, product: 'iMac', location: 'San Jose', datetime: '2025-04-02 09:00', price: '$1799', amount: 1, status: 'Completed' },
    { key: 2, product: 'Dell XPS', location: 'Chicago', datetime: '2025-04-10 11:30', price: '$1399', amount: 1, status: 'Pending' },
    { key: 3, product: 'GoPro Hero', location: 'Barcelona', datetime: '2025-04-15 13:45', price: '$399', amount: 2, status: 'Completed' },
    { key: 4, product: 'Canon EOS', location: 'Dubai', datetime: '2025-04-22 15:20', price: '$899', amount: 1, status: 'Cancelled' },
  ],
  May: [
    { key: 1, product: 'iPad Mini', location: 'Madrid', datetime: '2025-05-03 10:10', price: '$499', amount: 1, status: 'Completed' },
    { key: 2, product: 'HP Spectre', location: 'Boston', datetime: '2025-05-12 12:30', price: '$1249', amount: 1, status: 'Pending' },
    { key: 3, product: 'Bose QC45', location: 'Munich', datetime: '2025-05-18 14:00', price: '$329', amount: 2, status: 'Completed' },
    { key: 4, product: 'Sony WH-1000XM5', location: 'Singapore', datetime: '2025-05-25 16:20', price: '$399', amount: 1, status: 'Cancelled' },
  ],
  June: [
    { key: 1, product: 'Apple TV', location: 'Miami', datetime: '2025-06-04 09:30', price: '$179', amount: 1, status: 'Completed' },
    { key: 2, product: 'Fire TV Stick', location: 'Houston', datetime: '2025-06-11 11:50', price: '$49', amount: 2, status: 'Pending' },
    { key: 3, product: 'Roku Ultra', location: 'Vancouver', datetime: '2025-06-17 13:10', price: '$99', amount: 1, status: 'Completed' },
    { key: 4, product: 'Chromecast', location: 'Brussels', datetime: '2025-06-24 15:40', price: '$59', amount: 1, status: 'Cancelled' },
  ],
  July: [
    { key: 1, product: 'iPhone SE', location: 'Zurich', datetime: '2025-07-05 10:00', price: '$399', amount: 1, status: 'Completed' },
    { key: 2, product: 'Galaxy Tab', location: 'Stockholm', datetime: '2025-07-13 12:20', price: '$649', amount: 1, status: 'Pending' },
    { key: 3, product: 'Fitbit Versa', location: 'Lisbon', datetime: '2025-07-19 14:40', price: '$229', amount: 2, status: 'Completed' },
    { key: 4, product: 'Garmin Fenix', location: 'Vienna', datetime: '2025-07-27 16:00', price: '$599', amount: 1, status: 'Cancelled' },
  ],
  August: [
    { key: 1, product: 'Surface Laptop', location: 'Prague', datetime: '2025-08-06 09:20', price: '$999', amount: 1, status: 'Completed' },
    { key: 2, product: 'Lenovo Yoga', location: 'Budapest', datetime: '2025-08-14 11:40', price: '$1099', amount: 1, status: 'Pending' },
    { key: 3, product: 'Dell Inspiron', location: 'Warsaw', datetime: '2025-08-21 13:00', price: '$799', amount: 2, status: 'Completed' },
    { key: 4, product: 'Acer Swift', location: 'Oslo', datetime: '2025-08-29 15:20', price: '$699', amount: 1, status: 'Cancelled' },
  ],
  September: [
    { key: 1, product: 'iPhone 14', location: 'Copenhagen', datetime: '2025-09-03 10:30', price: '$799', amount: 1, status: 'Completed' },
    { key: 2, product: 'Pixel 7', location: 'Dublin', datetime: '2025-09-11 12:50', price: '$599', amount: 1, status: 'Pending' },
    { key: 3, product: 'OnePlus 11', location: 'Helsinki', datetime: '2025-09-19 14:10', price: '$699', amount: 2, status: 'Completed' },
    { key: 4, product: 'Realme GT', location: 'Tallinn', datetime: '2025-09-27 16:30', price: '$499', amount: 1, status: 'Cancelled' },
  ],
  October: [
    { key: 1, product: 'iPad Pro', location: 'Athens', datetime: '2025-10-02 09:40', price: '$1099', amount: 1, status: 'Completed' },
    { key: 2, product: 'Galaxy Buds', location: 'Riga', datetime: '2025-10-10 11:00', price: '$149', amount: 1, status: 'Pending' },
    { key: 3, product: 'Jabra Elite', location: 'Vilnius', datetime: '2025-10-18 13:20', price: '$199', amount: 2, status: 'Completed' },
    { key: 4, product: 'Beats Studio', location: 'Sofia', datetime: '2025-10-26 15:40', price: '$349', amount: 1, status: 'Cancelled' },
  ],
  November: [
    { key: 1, product: 'Mac Mini', location: 'Bratislava', datetime: '2025-11-04 10:50', price: '$699', amount: 1, status: 'Completed' },
    { key: 2, product: 'Chromebook', location: 'Ljubljana', datetime: '2025-11-12 12:10', price: '$399', amount: 1, status: 'Pending' },
    { key: 3, product: 'Surface Go', location: 'Zagreb', datetime: '2025-11-20 14:30', price: '$499', amount: 2, status: 'Completed' },
    { key: 4, product: 'Huawei MateBook', location: 'Sarajevo', datetime: '2025-11-28 16:50', price: '$899', amount: 1, status: 'Cancelled' },
  ],
  December: [
    { key: 1, product: 'iPhone 13', location: 'Belgrade', datetime: '2025-12-06 09:00', price: '$699', amount: 1, status: 'Completed' },
    { key: 2, product: 'Galaxy Note', location: 'Skopje', datetime: '2025-12-14 11:20', price: '$999', amount: 1, status: 'Pending' },
    { key: 3, product: 'Oppo Find', location: 'Podgorica', datetime: '2025-12-22 13:40', price: '$599', amount: 2, status: 'Completed' },
    { key: 4, product: 'Vivo X', location: 'Pristina', datetime: '2025-12-30 15:00', price: '$499', amount: 1, status: 'Cancelled' },
  ],
};

export default demoData;
