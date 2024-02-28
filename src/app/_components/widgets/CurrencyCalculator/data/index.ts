export const currencies: any[] = [
  {
    name: 'USD',
    code: 'usd',
  },
  {
    name: 'INR',
    code: 'inr',
  },
  {
    name: 'EURO',
    code: 'euro',
  },
];

export const currencyRates: { [key: string]: number } = {
  'usd-inr': 74,
  'inr-usd': 0.0135,
  'usd-euro': 0.89,
  'euro-usd': 1.13,
  'inr-euro': 0.0117,
  'euro-inr': 85,
  'inr-inr': 1,
  'usd-usd': 1,
  'euro-euro': 1,
};
