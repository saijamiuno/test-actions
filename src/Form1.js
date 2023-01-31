import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import Lottie from "react-lottie";
import { Form, Input, Button, DatePicker, TreeSelect, Upload } from "antd";
import googleLoading from "./googleLoading.json";
// import cycle from "./cycle.json";

// const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;

export default function Form1() {
  const [show, setShow] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: googleLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <br />
        <Form.Item label="First Name ">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name ">
          <Input />
        </Form.Item>

        <Form.Item label="Email ID">
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Gender">
          <TreeSelect
            treeData={[
              {
                title: "Male",
                value: "male",
              },
              {
                title: "FeMale",
                value: "female",
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Designation">
          <TreeSelect
            treeData={[
              {
                title: "Front-End-Developer",
                value: "fed",
              },
              {
                title: "Back-End-Developer",
                value: "bed",
              },
              {
                title: "Software Developer",
                value: "sd",
              },
              {
                title: "Junior Software Developer",
                value: "jsd",
              },
              {
                title: "Digital Marketing Analyst",
                value: "dma",
              },
              {
                title: "SEO Specialist",
                value: "seo",
              },
              {
                title: "Digital Marketing Analyst",
                value: "dma",
              },
              {
                title: "Quality Assurance",
                value: "qa",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Mobile Phone">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Date of Birth">
          <DatePicker />
        </Form.Item>
        {show && (
          <Lottie
            options={defaultOptions}
            style={{ width: "200px", heigth: "200px" }}
          />
        )}
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <center>
          <Form.Item>
            <Button style={{ width: "144px" }}>Submit</Button>
            <Button onClick={() => setShow(!show)} style={{ width: "144px" }}>
              Show Animation
            </Button>
          </Form.Item>
        </center>
      </Form>
    </div>
  );
}
