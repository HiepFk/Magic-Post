import React, {useEffect, useState } from "react";
import { OrderStatusDisplay, orders } from "../../utils/fakeData/Order";
import { Steps } from "antd";

const description = "";

const OrderTimeLine = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    //getData();
  }, []);

  // const getData = async () => {
  //   const stepItems = orders.map((order) => ({
  //     description: OrderStatusDisplay[order.status]?.label,
  //   }));
  //   setData(stepItems);
  // };

  return (
    <>
      {/* <Steps current={1} items={data} />{" "} */}
      <h1>Tên đơn
      <Steps
    current={1}
    items={[
      {
        title: 'Finished',
        description: "Điểm giao dịch đầu",
      },
      {
        title: 'Finished',
        description: "Điểm tập kết đầu",
      },
      {
        title: 'In Progress',
        description: "Điểm giao dịch cuối",
      },
      {
        title: 'Waiting',
        description: "Giao người nhận",
      },
    ]}
  />
  </h1>
    </>
  );
};
export default OrderTimeLine;