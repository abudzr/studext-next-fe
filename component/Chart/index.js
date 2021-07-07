import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';
import { Data } from './data.js'
import Dropdown from './dropdown'

function Statistic() {
    return (
        <div className="w-full h-60 bg-white shadow mt-4 rounded-3xl p-4">
            <div className="flex justify-between">
                <h1 className="font-bold">Statistic</h1>
                <Dropdown />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={Data}
                    stackOffset="sign"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="#008FFF" stackId="stack" />
                    <Bar dataKey="uv" fill="#DB0038" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Statistic