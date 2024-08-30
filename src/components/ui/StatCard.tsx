import React from 'react';

type StatCardVariant = 'invest' | 'minimal' | 'income';

interface StatCardProps {
  variant: StatCardVariant;
}

const variantData = {
  invest: {
    amount: '365',
    description: 'Срок инвестиций',
    image: 'src/assets/imgs/investdays.png',
  },
  minimal: {
    amount: '300₽',
    description: 'Минимальная сумма',
    image: 'src/assets/imgs/minimal.png',
  },
  income: {
    amount: 'от 1.7% до 4.2%',
    description: 'Ежедневная прибыль',
    image: 'src/assets/imgs/income.png',
  },
};

export function StatCard({ variant }: StatCardProps) {
  const data = variantData[variant];
  
  return (
    <div className="relative box-border rounded-[14px] backdrop-blur-custom bg-[rgba(17,17,17,0.55)] p-4 w-full h-[110px] overflow-hidden">
      {variant === 'invest' ? (
        <div className="absolute top-2 left-2 text-white font-proxima">
          <p className="text-[30px] leading-[110%] tracking-[-2%] font-bold">{data.amount}</p>
          <p className="text-[15px] font-normal">дней</p>
        </div>
      ) : (
        <p className={`absolute top-2 left-2 text-white font-proxima ${
          variant === 'income' ? 'text-[18.77px]' : 'text-[30px]'
        } leading-[110%] tracking-[-2%] font-bold`}>
          {variant === 'minimal' ? (
            <>{data.amount.split('₽')[0]}<span className='font-normal'>₽</span></>
          ) : (
            data.amount
          )}
        </p>
      )}
      
      <p className="absolute bottom-2 left-2 font-proxima text-white text-[15px] leading-[110%] font-light">
        {data.description}
      </p>
      
      <div className="absolute top-2 right-2 text-white">
        <div
          className='h-5 w-5 rounded-full'
          style={{
            background: `linear-gradient(to bottom, #401dff, #3891ff)`,
          }}
        ></div>
      </div>
      
      <img
        src={data.image}
        alt={`${variant} amount`}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
      />
    </div>
  );
}