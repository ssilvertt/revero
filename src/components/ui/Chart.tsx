
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Авг', income: 1000000 },
    { month: 'Сен', income: 100000 },
    { month: 'Окт', income: 1000000 },
    { month: 'Ноя', income: 100000 },
    { month: 'Дек', income: 10000 },
];

const formatIncome = (value: number) => {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}кк`;
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(0)}к`;
    }
    return value.toString();
};

export default function Component() {
    return (
        <div className="w-full h-80 bg-[#1c2232] rounded-lg shadow-md sm:hidden flex flex-col justify-center border-[#292B32] border-t p-4">
            <h2 className="text-[30px] leading-[33px] tracking-[-2%] font-bold mb-4 text-white text-center">
                Статистика доходности
            </h2>
            <ResponsiveContainer width="100%" height="60%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={true} horizontal={true} strokeOpacity={0.5} stroke="#4B5563" />
                    <XAxis
                        dataKey="month"
                        tick={{ fill: '#fff', fontSize: 10 }}
                        tickLine={{ stroke: '#4B5563' }}
                        axisLine={{ stroke: '#4B5563' }}
                        interval={0}
                    />
                    <YAxis
                        tick={{ fill: '#fff', fontSize: 10 }}
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
                        dot={{ fill: '#3992FF', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}