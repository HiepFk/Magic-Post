import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Flex, Space, Table, notification } from "antd";
import { DeleteOutlined, EditOutlined, EyeFilled } from "@ant-design/icons";
import PageHeader from "../../../components/PageHeader";
import SearchBox from "../../../components/SearchBox";
import GatheringLocationForm from "./GatheringLocationForm";
import * as GatherLocationService from "../../../services/gatherLocation.service";
import { notiMessages } from "../../../constants/messages";
const AdminDashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setShowForm(true);
    setIsEdit(false);
    setId(null);
  };

  const handleEdit = (id) => {
    setShowForm(true);
    setIsEdit(true);
    setId(id);
  };
  const handleView = (id) => {
    setShowForm(true);
    setIsEdit(false);
    setId(id);
  };

  const handleCloseForm = useCallback(() => {
    setShowForm(false);
    setIsEdit(false);
    setId(0);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (keyword) => {
    try {
      const res = await GatherLocationService.getGatherLocations(keyword);
      setData(res);
    } catch (error) {
      setData([]);
    }
  };

  const columns = useMemo(() => {
    return [
      {
        title: "Tên điểm tập kết",
        dataIndex: "nameGather",
      },
      {
        title: "Số điện thoại",
        dataIndex: "phone",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Tên người quản lý",
        dataIndex: "managerGather",
        render: (record) => <span>{record?.username}</span>,
      },
      {
        title: "Thao tác",
        dataIndex: "actions",
        render: (_, record) => {
          return (
            <Space>
              <Button
                onClick={() => handleView(record._id)}
                icon={<EyeFilled />}
              />
              <Button
                onClick={() => handleEdit(record._id)}
                icon={<EditOutlined />}
                type="primary"
              />
              <Button
                onClick={() => handleDelete(record._id)}
                icon={<DeleteOutlined />}
                danger
                type="primary"
              />
            </Space>
          );
        },
      },
    ];
  }, [data]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSearch = async ({ keyword }) => {
    await getData(keyword);
  };

  const handleDelete = async (id) => {
    try {
      await GatherLocationService.deleteGatherLocationById(id);
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

  return (
    <>
      <PageHeader title={"Điểm tập kết"} />
      <Flex justify="space-between">
        <SearchBox onSearch={handleSearch} />
        <Button type="primary" onClick={handleAdd}>
          Thêm
        </Button>
      </Flex>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <GatheringLocationForm
        open={showForm}
        onCancel={handleCloseForm}
        title={
          (isEdit && id ? "Chỉnh sửa" : id ? "Xem" : "Thêm") + " tài khoản"
        }
        id={id}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        getData={getData}
      />
    </>
  );
};
export default AdminDashboard;
