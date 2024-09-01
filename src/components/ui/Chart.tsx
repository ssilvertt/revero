import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Август', income: 1000000 },
    { month: 'Сентябрь', income: 100000 },
    { month: 'Октябрь', income: 1000000 },
    { month: 'Ноябрь', income: 100000 },
    { month: 'Декабрь', income: 10000 },
];

const formatIncome = (value: number) => {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}кк`;
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(0)}к`;
    }
    return value.toString();
};

export default function MobileIncomeChart() {
    return (
        <div className="w-full h-64 bg-[#1c2232] rounded-lg shadow-md sm:hidden flex flex-col justify-center border-[#292B32] border-t">
            <h2 className="text-[30px] leading-[33px] tracking-[-2%] font-bold mb-4 text-white text-center mt-5">
                Статистика доходности
            </h2>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid className="stroke-gray-200" strokeOpacity={0.5} />
                    <XAxis
                        dataKey="month"
                        tick={{ fill: '#fff', fontSize: 12 }}
                        tickLine={{ stroke: '#4B5563' }}
                        axisLine={{ stroke: '#4B5563' }}
                    />
                    <YAxis
                        tick={{ fill: '#fff', fontSize: 12 }}
                        tickLine={{ stroke: '#4B5563' }}
                        axisLine={{ stroke: '#4B5563' }}
                        tickFormatter={formatIncome}
                        domain={[0, 'dataMax']}
                    />

                    <Line
                        type="linear"
                        dataKey="income"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
