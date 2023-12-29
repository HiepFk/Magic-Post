import { Card, Col, Row, Typography } from "antd";
import ColumnChart from "./Chart/Chart";
import PieChart from "./Pie/PieChart";

export default function AdminStatical() {
  return (
    <Row gutter={24}>
      <Col span={16}>
        <Row gutter={24}>
          <Col span={12}>
            <Card
              bodyStyle={{ backgroundColor: "purple", color: "white" }}
              bordered={false}
            >
              <Typography.Title> 960.000 VND </Typography.Title>{" "}
              <Typography.Text> Total Earning </Typography.Text>{" "}
            </Card>{" "}
          </Col>{" "}
          <Col span={12}>
            <Card
              bodyStyle={{ backgroundColor: "blue", color: "white" }}
              bordered={false}
            >
              <Typography.Title> 960 </Typography.Title>{" "}
              <Typography.Text> Total Order </Typography.Text>{" "}
            </Card>{" "}
          </Col>{" "}
        </Row>{" "}
        <Col span={24}>
          <ColumnChart />
        </Col>{" "}
      </Col>{" "}
      <Col span={8}>
        <Card>
          <Typography.Title> Abc </Typography.Title> <PieChart />
        </Card>{" "}
      </Col>{" "}
    </Row>
  );
}