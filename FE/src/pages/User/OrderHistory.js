import { Button, Flex, Select, Space, Switch, Table, Typography } from "antd";
import ActionsCell from "../../components/ActionsCell";
import { useEffect, useMemo, useState, React } from "react";
import { doneOrders } from "../../utils/fakeData/Order";
import SearchBox from "../../components/SearchBox";
import OrderDetailModal from "../../components/OrderDetailModal";
import OrderForm from "../../components/OrderForm";
import PageHeader from "../../components/PageHeader";

const { Column, ColumnGroup } = Table;

const OrderHistory = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showOrder, setShowOrder] = useState();
  const [editOrderId, setEditOrderId] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setData(doneOrders);
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
        title: "Điểm giao dịch",
        dataIndex: "transAddress",
      },
      {
        title: "Điểm tập kết",
        dataIndex: "gatherAddress",
      },
      {
        title: "Thời điểm giao đến",
        dataIndex: "timeGatherEnd",
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
      <PageHeader title={"Đơn hàng đã nhận của bạn"} />
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
        <Table columns={columns} dataSource={data} />
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
};

export default OrderHistory;
