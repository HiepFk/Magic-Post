import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Flex, Space, Table, notification } from "antd";
import { DeleteOutlined, EditOutlined, EyeFilled } from "@ant-design/icons";
import PageHeader from "../../../components/PageHeader";
import SearchBox from "../../../components/SearchBox";
import { notiMessages } from "../../../constants/messages";
import UserService from "../../../services/user.service";
import users from "../../../utils/fakeData/User";
import { RoleName } from "../../../constants";
import AccountForm from "./AccountForm";
const AccountsManage = () => {
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
      const res = await UserService.getUsers(keyword);
      setData(res);
    } catch (error) {
      setData([]);
    }
    // const res = users;
  };

  const columns = useMemo(() => {
    return [
      {
        title: "Tên người dùng",
        dataIndex: "username",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Chức vụ",
        dataIndex: "role",
        render: (_, record) => {
          return RoleName[record.role?.name];
        },
      },
      {
        title: "Thao tác",
        dataIndex: "actions",
        render: (_, record) => {
          return (
            <Space>
              <Button
                icon={<EyeFilled />}
                onClick={() => handleView(record._id)}
                // type="primary"
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
      await UserService.deleteUserById(id);
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
      <PageHeader title={"Tài khoản"} />
      <Flex justify="space-between">
        <SearchBox onSearch={handleSearch} />
        <Button type="primary" onClick={handleAdd}>
          Thêm
        </Button>
      </Flex>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <AccountForm
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
export default AccountsManage;
