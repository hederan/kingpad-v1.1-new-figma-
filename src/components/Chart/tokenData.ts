interface tokenDataProps {
  id: string;
  label: string;
  value: number;
  color: string;
}

export const tokenData: tokenDataProps[] = [
    {
      id: '0',
      label: 'Presale Funding Round',
      value: 10,
      color: '#8462F6'
    },
    {
      id: '1',
      label: 'Initial Liquidity',
      value: 20,
      color: '#C6B8F4'
    },
    {
      id: '2',
      label: 'Private Sale',
      value: 35,
      color: '#FFB765'
    },
    {
      id: '3',
      label: 'Seed Funding Round',
      value: 35,
      color: '#FEE699'
    }
  ];