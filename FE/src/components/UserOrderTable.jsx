import { Button, Flex, Select, Space, Switch, Table, Typography } from "antd";
import ActionsCell from "./ActionsCell";
import { useEffect, useMemo, useState } from "react";
import { OrderStatus, orders, userOrders } from "../utils/fakeData/Order";
import SearchBox from "./SearchBox";
import OrderDetailModal from "./OrderDetailModal";
import OrderForm from "./OrderForm";

export default function UserOrdersTable({ status, placeType = "TRANSAC_LOCAL" }) {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showOrder, setShowOrder] = useState();
  const [editOrderId, setEditOrderId] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    getData();
  }, [status]);

  const getData = async () => {
    const os = userOrders.filter((order) => order.status === status);
    setData(os);
  };

  const handleShow = (id) => {
    const order = data.find((item) => item.idOrder === id);
    setShowOrder(order);
  };
  const handleReceived = (orderId) => {};

  const handleChangeDeliverStatus = (value) => {};

  const handleEdit = (orderId) => {
    setEditOrderId(orderId);
  };

  const columns = useMemo(() => {
    const toStatus = status.match(new RegExp(/^TO_\w+?/));
    const newStatus = status === OrderStatus.new;
    return [
      {
        title: "Mã đơn",
        dataIndex: "idOrder",
      },
      {
        title: "Tên đơn",
        dataIndex: "name",
      },
      {
        title: "Tiêu đề",
        dataIndex: "title",
      },
      {
        title: "Địa chỉ người nhận",
        dataIndex: "addressIfR",
      },
      {
        title: "Địa chỉ người gửi",
        dataIndex: "addressIfS",
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        hidden: !newStatus,
      },
      {
        title: "Điểm giao dịch",
        dataIndex: "transAddress",
      },
      {
        title: "Điểm tập kết",
        dataIndex: "gatherAddress",
      },
      {
        title: "Thao tác",
        dataIndex: "actions",
        render: (_, record) => {
          return (
            <ActionsCell
              record={record}
              onShow={() => handleShow(record.idOrder)}
              onEdit={() => handleEdit(record.idOrder)}
              hasDelete={status === OrderStatus.new}
              hasEdit={status === OrderStatus.new}
            />
          );
        },
      },
    ].filter((column) => !column.hidden);
  }, [data]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSend = () => {};

  const handleSearch = (keyword) => {};

  const handleCancelForm = () => {
    setEditOrderId(0);
    setShowAddForm(false);
  };
  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Flex
          justify="space-between"
          align="center"
          style={{ maxHeight: 64, height: 64, minHeight: 64 }}
        >
          {selectedRowKeys.length > 0 && (
            <>
              <Typography.Title level={4}>
                Đã chọn {selectedRowKeys.length} đơn hàng
              </Typography.Title>
              <Button onClick={handleSend} size="large" type="primary">
                Gửi
              </Button>
            </>
          )}
        </Flex>
        <Flex justify="space-between">
          <SearchBox onSearch={handleSearch} />
        </Flex>
        <Table
          columns={columns}
          dataSource={data}
        />
      </Space>
      {showOrder && (
        <OrderDetailModal
          showOrder={showOrder}
          onCancel={() => setShowOrder(null)}
        />
      )}
      {(editOrderId || showAddForm) && (
        <OrderForm
          title={editOrderId ? "Chỉnh sửa đơn hàng" : "Thêm đơn hàng"}
          open={editOrderId || showAddForm}
          onCancel={handleCancelForm}
          id={editOrderId}
        />
      )}
    </>
  );
}
