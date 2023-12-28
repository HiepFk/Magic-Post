import { Form, Input, Modal, Select, notification } from "antd";
import { useEffect, useState } from "react";
import managers from "../../../utils/fakeData/Manager";
import * as GatheringLocationService from "../../../services/gatherLocation.service";
import * as TransLocalService from "../../../services/transLocal.service";
import { notiMessages } from "../../../constants/messages";
import transLocaltions from "../../../utils/fakeData/TransLocation";
import UserService from "../../../services/user.service";

export default function TransLocalForm({
  title,
  open,
  onCancel,
  id,
  isEdit,
  setIsEdit,
  getData,
}) {
  const [managerOptions, setManagerOptions] = useState([]);
  const [gatherOptions, setGatherOptions] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    getTransManagerOptions();
    getTransGatherLocalOptions();
  }, []);

  useEffect(() => {
    getInitalValues();
  }, [id]);

  const getTransGatherLocalOptions = async (keyword) => {
    const gatherLocals = await GatheringLocationService.getGatherLocations(
      keyword
    );

    const opts = gatherLocals.map((gatherLocal) => {
      return {
        value: gatherLocal._id,
        label: gatherLocal.nameGather,
      };
    });

    setGatherOptions(opts);
  };

  const getTransManagerOptions = async () => {
    const res = await UserService.getUserByRole("managerTrans");

    const opts = res.map((manager) => {
      return {
        value: manager._id,
        label: manager.username,
      };
    });

    setManagerOptions(opts);
  };

  const getInitalValues = async () => {
    if (id) {
      const transLocal = await TransLocalService.getTransLocalById(id);
      form.setFieldValue("nameTrans", transLocal.nameTrans);
      form.setFieldValue("phone", transLocal.phone);
      form.setFieldValue("email", transLocal.email);
      form.setFieldValue("address", transLocal.address);
      form.setFieldValue("managerTrans", transLocal?.managerTrans?.username);
      form.setFieldValue("gatherLocation", transLocal?.gatherLocation?._id);
    } else {
      form.resetFields();
    }
  };

  const handleChangeManager = (value) => {};

  const handleSearchManager = (value) => {};

  const handleChangeGather = (value) => {};

  const handleSearchGather = (value) => {
    getTransGatherLocalOptions(value);
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
        const res = await TransLocalService.createTransLocal(values);

        notification.success({
          message: notiMessages.createSuccessfully,
          duration: 1,
        });
      } else {
        const res = await TransLocalService.updateTransLocal(id, values);

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
        <Form.Item name="nameTrans" label="Tên" rules={[{ required: true }]}>
          <Input disabled={!isEdit && id} />
        </Form.Item>
        <Form.Item
          name="phone"
          type="phonenumber"
          label="Số điện thoại"
          rules={[{ required: true }]}
        >
          <Input disabled={!isEdit && id} />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input disabled={!isEdit && id} />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ" rules={[{ required: true }]}>
          <Input disabled={!isEdit && id} />
        </Form.Item>
        <Form.Item
          name="managerTrans"
          label="Quản lý"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            onChange={handleChangeManager}
            onSearch={handleSearchManager}
            options={managerOptions}
            disabled={!isEdit && id}
          />
        </Form.Item>
        <Form.Item
          name="gatherLocation"
          label="Điểm tập kết"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            onChange={handleChangeGather}
            onSearch={handleSearchGather}
            options={gatherOptions}
            disabled={!isEdit && id}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
