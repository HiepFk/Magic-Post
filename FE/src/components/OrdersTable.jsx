import {
  Button,
  Flex,
  Select,
  Space,
  Switch,
  Table,
  Typography,
  notification,
} from "antd";
import ActionsCell from "./ActionsCell";
import { useEffect, useMemo, useState } from "react";
import { OrderStatus, orders } from "../utils/fakeData/Order";
import SearchBox from "./SearchBox";
import OrderDetailModal from "./OrderDetailModal";
import OrderForm from "./OrderForm";
import OrderService from "../services/order.service";
import { notiMessages } from "../constants/messages";

export default function OrdersTable({ status, placeType = "TRANSAC_LOCAL" }) {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showOrder, setShowOrder] = useState();
  const [editOrderId, setEditOrderId] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    getData();
  }, [status]);

  const getData = async () => {
    try {
      const res = await OrderService.getOrderByStatus(status);
      setData(res);
    } catch (error) {
      setData([]);
    }
  };

  const handleShow = async (id) => {
    try {
      const res = await OrderService.getOrderById(id);
      setShowOrder(res);
    } catch (error) {
      setShowOrder();
    }
  };
  const handleReceived = (orderId) => {};

  const handleChangeDeliverStatus = (value) => {};

  const handleEdit = (orderId) => {
    setEditOrderId(orderId);
  };

  const handeDelete = async (id) => {
    try {
      const res = await OrderService.deleteOrderById(id);
      getData();
      notification.success({
        message: notiMessages.deleteSuccessfully,
        duration: 1,
      });
    } catch (error) {
      notification.error({
        message: notiMessages.error,
        duration: 1,
      });
    }
  };

  const columns = useMemo(() => {
    const toStatus = status.match(new RegExp(/^TO_\w+?/));
    const newStatus = status === OrderStatus.new;
    return [
      {
        title: "Mã đơn",
        dataIndex: "_id",
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
        title: "Trạng thái",
        dataIndex: "deliverStatus",
        render: (_, record) => {
          return (
            <Select
              style={{
                width: "100%",
              }}
              defaultValue={OrderStatus.toCustomer}
              options={[
                {
                  value: OrderStatus.toCustomer,
                  label: "Đang giao",
                },
                {
                  value: OrderStatus.returnEndTransacLocal,
                  label: "Chuyển về kho",
                },
                {
                  value: OrderStatus.deliverFailed,
                  label: "Giao thất bại",
                },
              ]}
              onChange={handleChangeDeliverStatus}
            />
          );
        },
        hidden: status !== OrderStatus.toCustomer,
      },
      {
        title: "Đã nhận",
        dataIndex: "orderStatus",
        render: (_, record) => {
          return <Switch onChange={() => handleReceived(record?._id)} />;
        },
        hidden: !toStatus,
      },
      {
        title: "Thao tác",
        dataIndex: "actions",
        render: (_, record) => {
          return (
            <ActionsCell
              record={record}
              onShow={() => handleShow(record?._id)}
              onEdit={() => handleEdit(record?._id)}
              onDelete={() => handeDelete(record?._id)}
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
          {status === OrderStatus.new && (
            <Button onClick={() => setShowAddForm(true)} type="primary">
              Thêm
            </Button>
          )}
        </Flex>
        <Table
          columns={columns}
          dataSource={data}
          rowSelection={
            status.match(new RegExp(`^AT_\\w+?${placeType}$`, "g")) ||
            status === OrderStatus.new
              ? rowSelection
              : null
          }
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
          getData={getData}
          id={editOrderId}
        />
      )}
    </>
  );
}
