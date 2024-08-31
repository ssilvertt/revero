"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
	{ month: 'Jan', income: 3000 },
	{ month: 'Feb', income: 4500 },
	{ month: 'Mar', income: 3800 },
	{ month: 'Apr', income: 5200 },
	{ month: 'May', income: 4700 },
]

export default function MobileIncomeChart() {
	return (
		<div className="w-full h-80 bg-[#1c2232] p-4 rounded-lg shadow-md sm:hidden">
			<h2 className="text-xl font-bold mb-4 text-gray-800">Monthly Income</h2>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
				>
					<CartesianGrid className="stroke-gray-200" strokeOpacity={0.5} />
					<XAxis
						dataKey="month"
						tick={{ fill: '#4B5563', fontSize: 12 }}
						tickLine={{ stroke: '#4B5563' }}
						axisLine={{ stroke: '#4B5563' }}
					/>
					<YAxis
						tick={{ fill: '#4B5563', fontSize: 12 }}
						tickLine={{ stroke: '#4B5563' }}
						axisLine={{ stroke: '#4B5563' }}
						tickFormatter={(value) => `$${value/1000}k`}
						ticks={[0, 2000, 4000, 6000]}
					/>
					<Tooltip
						contentStyle={{ backgroundColor: '#F3F4F6', border: 'none', fontSize: 14 }}
						itemStyle={{ color: '#1E40AF' }}
						formatter={(value) => [`$${value}`, 'Income']}
						labelStyle={{ fontSize: 14, fontWeight: 'bold' }}
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
	)
}