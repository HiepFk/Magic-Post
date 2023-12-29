import { Form, Input, Modal, Select, notification } from "antd";
import { useEffect, useMemo, useState } from "react";
import managers from "../../../utils/fakeData/Manager";
import gatheringLocations from "../../../utils/fakeData/GatheringLocation";
import * as GatheringLocationService from "../../../services/gatherLocation.service";
import { notiMessages } from "../../../constants/messages";
import UserService from "../../../services/user.service";

export default function GatheringLocationForm({
  title,
  open,
  onCancel,
  id,
  isEdit,
  setIsEdit,
  getData,
}) {
  const [options, setOptions] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    getGatherManagerOptions();
  }, []);

  useEffect(() => {
    getInitalValues();
  }, [id]);

  const getGatherManagerOptions = async () => {
    const res = await UserService.getUserByRole("managerGather");

    const opts = res.map((manager) => {
      return {
        value: manager._id,
        label: manager.username,
      };
    });

    setOptions(opts);
  };

  const getInitalValues = async () => {
    if (id) {
      const gatheringLocation =
        await GatheringLocationService.getGatherLocationById(id);
      form.setFieldValue("nameGather", gatheringLocation.nameGather);
      form.setFieldValue("phone", gatheringLocation.phone);
      form.setFieldValue("email", gatheringLocation.email);
      form.setFieldValue("address", gatheringLocation.address);
      form.setFieldValue(
        "managerGather",
        gatheringLocation.managerGather.username
      );
    } else {
      form.resetFields();
    }
  };

  const handleChangeManager = (value) => {};

  const handleSearchManager = (value) => {};

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
        const res = await GatheringLocationService.createGatherLocation(values);

        notification.success({
          message: notiMessages.createSuccessfully,
          duration: 1,
        });
      } else {
        const res = await GatheringLocationService.updateGatherLocation(
          id,
          values
        );

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
        <Form.Item name="nameGather" label="Tên" rules={[{ required: true }]}>
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
          name="managerGather"
          label="Quản lý"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            onChange={handleChangeManager}
            onSearch={handleSearchManager}
            options={options}
            disabled={!isEdit && id}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
