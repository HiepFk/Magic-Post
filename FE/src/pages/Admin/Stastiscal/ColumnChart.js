// import React, { useState, useEffect } from "react";
// import { Column } from "@ant-design/plots";

// export default function ColumnChart() {
//   //demo according month
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch(
//       "https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"
//     )
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log("fetch data failed", error);
//       });
//   };
//   const config = {
//     data,
//     isGroup: true,
//     xField: "月份",
//     yField: "月均降雨量",
//     seriesField: "name",
//     dodgePadding: 2,
//     label: {
//       // position: "middle",
//       // 'top', 'middle', 'bottom'
//       layout: [
//         {
//           type: "interval-adjust-position",
//         },
//         {
//           type: "interval-hide-overlap",
//         },
//         {
//           type: "adjust-color",
//         },
//       ],
//     },
//   };

//   return <Column {...config} />;
// }