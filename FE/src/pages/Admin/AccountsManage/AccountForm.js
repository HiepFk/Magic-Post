import { Form, Input, Modal, Select, notification } from "antd";
import { useEffect, useState } from "react";
import { notiMessages } from "../../../constants/messages";
import UserService from "../../../services/user.service";
import { RoleName } from "../../../constants";

export default function AccountForm({
  title,
  open,
  onCancel,
  id,
  isEdit,
  setIsEdit,
  getData,
}) {
  const [form] = Form.useForm();

  const [listRole, setListRole] = useState([]);

  const getListRole = () => {
    const role = Object.entries(RoleName).map(([value, key], index) => {
      return {
        value,
        label: key,
      };
    });
    setListRole([...[], role[1], role[2]]);
  };

  useEffect(() => {
    getInitalValues();
  }, [id]);

  useEffect(() => {
    getListRole();
  }, []);

  const getInitalValues = async () => {
    if (id) {
      const user = await UserService.getUserById(id);
      form.setFieldValue("username", user.username);
      form.setFieldValue("email", user.email);
      form.setFieldValue("role", user.role?.name);
    } else {
      form.resetFields();
    }
  };

  const handleSubmit = () => {
    if (!isEdit && id) {
      setIsEdit(true);
      return;
    }
    form.submit();
  };

  const handleFinish = async (values) => {
    try {
      if (!id) {
        const res = await UserService.createUser(values);
        notification.success({
          message: notiMessages.createSuccessfully,
          duration: 1,
        });
      } else {
        const res = await UserService.updateUser(id, values);
        notification.success({
          message: notiMessages.updateSuccessfully,
          duration: 1,
        });
      }
      getData();
      onCancel();
    } catch (error) {
      notification.error({
        message: notiMessages.error,
        duration: 1,
      });
    }
  };
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onCancel}
      onOk={handleSubmit}
      okText={id && !isEdit ? "Edit" : "Save"}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="username"
          label="Tên người dùng"
          rules={[{ required: true }]}
        >
          <Input disabled={!isEdit && id} />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input disabled={!isEdit && id} />
        </Form.Item>
        <Form.Item name="role" label="Chức vụ" rules={[{ required: true }]}>
          <Select options={listRole} disabled={!isEdit && id} />
        </Form.Item>
        {!isEdit && !id && (
          <>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
}
