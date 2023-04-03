import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";


import Lottie from "react-lottie";
import { Form, Input, Button, DatePicker, TreeSelect, Upload } from "antd";
import googleLoading from "./googleLoading.json";
import moment from "moment";
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

  // const onSubmitForm = async (values) => {

  //   const res = await fetch("/post", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       email: values.email,
  //       gender: values.gender,
  //       designation: values.designation,
  //       phone: values.phone,
  //       dob: moment(values.dob).format("DD/MM/YYYY"),
  //       comments: values.comments,
  //       dataType: "form",
  //     }),
  //   });
  //   // const response = await res.json();
  //   // if (res.status) {
  //   //   console.log("Sucess");
  //   // } else {
  //   //   console.log("error");
  //   // }
  //   // console.log( "data");
  // };

  const onResetValues = () => {
    document.getElementById("myForm").reset();
   
  };

  const onSubmitForm = async (values) => {
  const response = await axios.post("/post", {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    gender: values.gender,
    designation: values.designation,
    phone: values.phone,
    dob: moment(values.dob).format("DD/MM/YYYY"),
    comments: values.comments,
    dataType: "form",
  });
  if (response.status === 200) {
    alert("Your Response is Saved!!!!!!!!!")
    onResetValues()
  } else {
    alert("Data Not Submited")
  }
  console.log(response.data);
};

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onSubmitForm}
        id="myForm"
      >
        <br />
        <Form.Item name="firstName" label="First Name ">
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name ">
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email ID">
          <Input type="email" />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
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

        <Form.Item name="designation" label="Designation">
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
        <Form.Item name="phone" label="Mobile Phone">
          <Input type="number" />
        </Form.Item>

        <Form.Item name="dob" label="Date of Birth">
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
        {show && (
          <Lottie
            options={defaultOptions}
            style={{ width: "200px", heigth: "200px" }}
          />
        )}
        <Form.Item name="comments" label="Comments">
          <TextArea rows={4} />
        </Form.Item>

        {/* <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> */}

        <center>
          <Form.Item>
            <Button type="submit" htmlType="submit" style={{ width: "144px" }}>
              Submit
            </Button>
            <Button onClick={() => setShow(!show)} style={{ width: "144px" }}>
              Show Animation
            </Button>
          </Form.Item>
        </center>
      </Form>
    </div>
  );
}
