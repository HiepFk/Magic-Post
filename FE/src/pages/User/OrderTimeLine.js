import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Tabs } from "antd";
import { OrderTabs, OrderUserTimeLine } from "../../constants";
import OrderSteps from "../../components/OrderSteps";
import UserOrdersTable from "../../components/UserOrderTable";

const description = "";

const OrderTimeLine = () => {
  const [currentTab, setCurrentTab] = useState(OrderTabs[0].key);

  const handleChangeTab = (key) => {
    setCurrentTab(key);
  };
  return (
    <>
      <PageHeader title={"Đơn hàng của bạn"} />
      {currentTab === OrderTabs[0].key && (
        <OrderSteps
          tableComponent={UserOrdersTable}
          items={OrderUserTimeLine}
        />
      )}
    </>
  );
};
export default OrderTimeLine;
