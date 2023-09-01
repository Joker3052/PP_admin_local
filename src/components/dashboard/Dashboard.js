import React, { useState } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
  const [data, setData] = useState([
    { month: "2023-04", nam: 50, nu: 100, total: 150, nam_product: 45, nu_product: 50, total_product: 95 },
    { month: "2023-05", nam: 80, nu: 130, total: 210, nam_product: 45, nu_product: 50, total_product: 95 },
    { month: "2023-06", nam: 70, nu: 110, total: 180, nam_product: 45, nu_product: 50, total_product: 95 },
    { month: "2023-07", nam: 70, nu: 110, total: 81, nam_product: 45, nu_product: 50, total_product: 95 },
    { month: "2023-08", nam: 70, nu: 110, total: 180, nam_product: 45, nu_product: 50, total_product: 95 },
    // Thêm dữ liệu cho các ngày khác trong tháng ở đây
  ]);

  // Tính tổng nam_product và nu_product từ mảng data
  const totalNamProduct = data.reduce((acc, item) => acc + item.nam_product, 0);
  const totalNuProduct = data.reduce((acc, item) => acc + item.nu_product, 0);
  // Tính tổng nam_price và nu_price từ mảng data
  const totalNamprice = data.reduce((acc, item) => acc + item.nam, 0);
  const totalNuprice = data.reduce((acc, item) => acc + item.nu, 0);

  const chartData_product = {
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Nam Product', 'Nữ Product'],
    },
    series: [totalNamProduct, totalNuProduct],
  };
  const chartData_price = {
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Nam price', 'Nữ price'],
    },
    series: [totalNamprice, totalNuprice],
  };

  return (
    <div className="main">
      <Container>
        <div className="App_value">
          <h1>
          Chart of clothes sold in a year by month{" "}
            <i className="fas fa-user"></i>{" "}
          </h1>
          <Row>
            <Col className="col-8">
              <div className="row">
                <div className="col-12">
                  <Chart
                    options={{
                      chart: {
                        id: "basic-bar",
                      },
                      xaxis: {
                        categories: data.map(item => item.month),
                      },
                    }}
                    series={[
                      {
                        name: "total",
                        data: data.map(item => item.total),
                      },
                      {
                        name: "total_product",
                        data: data.map(item => item.total_product),
                      },
                    ]}
                    type="bar"
                    width="100%"
                  />
                </div>
              </div>
            </Col>
            <Col className="col-4">
              <div>
                <div>
                  <ReactApexChart options={chartData_product.options} series={chartData_product.series} type="pie" width="380" />
                </div>
                <div>
                  <ReactApexChart options={chartData_price.options} series={chartData_price.series} type="pie" width="380" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
