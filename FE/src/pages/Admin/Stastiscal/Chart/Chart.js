import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const Chart = ({ aspect, title }) => {
  const data = [{"total":28,"productline":"DELL"},{"total":23,"productline":"HP"}];
  const [productline, setProductline] = useState([]);
  const getProductline = async () => {
    const response = await axios.get("http://localhost:5000/productitem/statistic",{withCredentials: true});
    setProductline(response.data);  
  }

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={10}
          height={100}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          data={data}
        >
          <CartesianGrid
            strokeDasharray="1 2"
            stroke="gray"
            className="chatGrid"
          />
          <XAxis dataKey= "productline" />

          <Tooltip />
          <Bar dataKey="total" fill="#5BD150" />

        </BarChart>

      </ResponsiveContainer>
    </div>
  );
};

export default Chart;