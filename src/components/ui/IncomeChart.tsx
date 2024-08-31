import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Авг', revenue: 800000 },
    { month: 'Сен', revenue: 600000 },
    { month: 'Окт', revenue: 900000 },
    { month: 'Ноя', revenue: 400000 },
    { month: 'Дек', revenue: 1100000 },
];

const formatYAxis = (value: number) => {
    if (value >= 1000000) return `${value / 1000000}кк`;
    if (value >= 1000) return `${value / 1000}к`;
    return `${value}`;
};

const RevenueChart: React.FC = () => {
    return (
        <div className="w-full h-96 bg-[#1B2131] p-4 rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={formatYAxis} ticks={[0, 1000, 10000, 100000, 1000000]} />
                    <Tooltip formatter={(value) => [`${value} руб`, 'Доход']} />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;
