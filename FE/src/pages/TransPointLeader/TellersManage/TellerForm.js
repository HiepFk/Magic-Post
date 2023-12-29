import { Form, Input, Modal, Select, notification } from "antd";
import { useEffect } from "react";
import { notiMessages } from "../../../constants/messages";
import UserService from "../../../services/user.service";
import users from "../../../utils/fakeData/User";
import { Role } from "../../../constants";

export default function TellerForm({
  title,
  open,
  onCancel,
  id,
  isEdit,
  setIsEdit,
  getData,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    getInitalValues();
  }, [id]);

  const getInitalValues = async () => {
    if (id) {
      const user = await UserService.getUserById(id);
      form.setFieldValue("username", user.username);
      form.setFieldValue("email", user.email);
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
        const data = { ...values, role: Role.staffTrans };
        const res = await UserService.createUser(data);

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
        {!isEdit && !id && (
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
}
