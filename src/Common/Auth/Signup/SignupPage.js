import React from "react";
import "./SignupPage.scss";
import "antd/dist/antd.css";
import { Form, Input, Button, Radio, Row, Col } from "antd";

const SignupPage = (props) => {
  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: {},
    wrapperCol: {
      sm: { span: 23 },
      md: { span: 24 },
      lg: { span: 23 },
    },
  };

  const initialState = {
    confirmDirty: false,
    autoCompleteResult: [],
    firstname: "hello",
    email: "ags@dev",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    console.log("form submiited");
  };

  return (
    <div className="SignupPage">
      <Row>
        <div className="SignupPage__logo">
          <img src="./Assests/logo.png" alt="hahah" />
        </div>
      </Row>
      <Row>
        <div className="SignupPage__titleSub">
          <h1>Became A Host</h1>
          <p>Lets set up your profile with some basic information</p>
        </div>
      </Row>
      <div className="SignupPage__Body">
        <Row>
          <div className="SignupPage__Body__formComponent">
            <Form
              {...formItemLayout}
              initialValues={initialState}
              onSubmit={handleSubmit}
            >
              <div>
                <div className="SignupPage__Body__formComponent__form">
                  <Row gutter={19}>
                    <Col span={12}>
                      <div className="SignupPage__Body__formComponent__form__formitems1">
                        <div className="SignupPage__Body__formComponent__form__formitems1__item1">
                          <Form.Item>
                            {getFieldDecorator("Business name", {
                              rules: [
                                {
                                  required: true,
                                  message: "Business Name can't be blank",
                                },
                              ],
                            })(
                              <Input
                                autoFocus
                                type="text"
                                placeholder="Business name"
                              />
                            )}
                          </Form.Item>
                        </div>

                        <div className="SignupPage__Body__formComponent__form__formitems1__item2">
                          <Form.Item>
                            {getFieldDecorator("Business address", {
                              rules: [
                                {
                                  required: true,
                                  message: "Please select a address",
                                },
                              ],
                            })(
                              <Input
                                placeholder="Business address"
                                suffix={
                                  <img src="./Assests/location.png" alt="ok" />
                                }
                              />
                            )}
                          </Form.Item>
                        </div>

                        <div className="SignupPage__Body__formComponent__form__formitems1__item3">
                          <Form.Item>
                            {getFieldDecorator("Email Address", {
                              rules: [
                                {
                                  required: true,
                                  message: "Email can't be blank",
                                },
                              ],
                            })(<Input placeholder="Email Address" />)}
                          </Form.Item>
                        </div>

                        <div className="SignupPage__Body__formComponent__form__formitems1__item4">
                          <Form.Item>
                            {getFieldDecorator("Password", {
                              rules: [
                                {
                                  required: true,
                                  message: "Password can't be blank",
                                },
                              ],
                            })(<Input.Password placeholder="Password" />)}
                          </Form.Item>
                        </div>

                        <div className="SignupPage__Body__formComponent__form__formitems1__item5">
                          <Form.Item>
                            {getFieldDecorator("Contact Number", {
                              rules: [
                                {
                                  required: true,
                                  message: "Phone can't be blank",
                                },
                              ],
                            })(<Input placeholder="Contact Number" />)}
                          </Form.Item>
                        </div>

                        <div className="SignupPage__Body__formComponent__form__formitems1__item6">
                          <Form.Item>
                            {getFieldDecorator("Choose Provider type", {
                              rules: [
                                {
                                  required: true,
                                  message: "Select Provider type",
                                },
                              ],
                            })(<Input placeholder="Choose Provider type" />)}
                          </Form.Item>
                        </div>

                        <div className="SignupPage__Body__formComponent__form__formitems1__item7">
                          <Form.Item>
                            {getFieldDecorator("Business License", {
                              rules: [
                                {
                                  required: true,
                                  message: "Business License can't be blank",
                                },
                              ],
                            })(
                              <Input
                                placeholder="Business License"
                                suffix={
                                  <img src="./Assests/upload.png" alt="ok" />
                                }
                              />
                            )}
                          </Form.Item>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="SignupPage__Body__formComponent__form__formitems2">
                        <div className="SignupPage__Body__formComponent__form__formitems2__item1">
                          <Form.Item>
                            {getFieldDecorator("Full Name", {
                              rules: [
                                {
                                  required: true,
                                  message: "Full Name can't be blank",
                                },
                              ],
                            })(<Input placeholder="Full Name" />)}
                          </Form.Item>
                        </div>
                        <div className="SignupPage__Body__formComponent__form__formitems2__item2">
                          <Form.Item>
                            {getFieldDecorator("Zip Code", {
                              rules: [
                                {
                                  required: true,
                                  message: "Zip Code can't be blank",
                                },
                              ],
                            })(<Input placeholder="Zip Code" />)}
                          </Form.Item>
                        </div>
                        <div className="SignupPage__Body__formComponent__form__formitems2__item3">
                          <Form.Item>
                            {getFieldDecorator("Business Email", {
                              rules: [
                                {
                                  required: true,
                                  message: "Work Email can't be blank",
                                },
                              ],
                            })(<Input placeholder="Business Email" />)}
                          </Form.Item>
                        </div>
                        <div className="SignupPage__Body__formComponent__form__formitems2__item4">
                          <Form.Item>
                            {getFieldDecorator("Confirm Password", {
                              rules: [
                                {
                                  required: true,
                                  message: "Confirm Password can't be blank",
                                },
                              ],
                            })(
                              <Input.Password placeholder="Confirm Password" />
                            )}
                          </Form.Item>
                        </div>
                        <div className="SignupPage__Body__formComponent__form__formitems2__item5">
                          <Form.Item>
                            {getFieldDecorator("Fax Number", {
                              rules: [
                                {
                                  required: true,
                                  message: "  ZipCode can't be blank",
                                },
                              ],
                            })(<Input placeholder="Fax Number" />)}
                          </Form.Item>
                        </div>
                        <div className="SignupPage__Body__formComponent__form__formitems2__item6">
                          <Form.Item>
                            {getFieldDecorator("Identity Proof", {
                              rules: [
                                {
                                  required: true,
                                  message: "Id Proof can't be blank",
                                },
                              ],
                            })(
                              <Input
                                placeholder="Identity Proof"
                                suffix={
                                  <img src="./Assests/upload.png" alt="ok" />
                                }
                              />
                            )}
                          </Form.Item>
                        </div>
                        <div className="SignupPage__Body__formComponent__form__formitems2__item7">
                          <Form.Item>
                            {getFieldDecorator("Business Certfication", {
                              rules: [
                                {
                                  required: true,
                                  message:
                                    "Business Certfication can't be blank",
                                },
                              ],
                            })(
                              <Input
                                placeholder="Business Certfication"
                                suffix={
                                  <img src="./Assests/upload.png" alt="ok" />
                                }
                              />
                            )}
                          </Form.Item>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <Row span={24}>
                  <Col>
                    <div className="SignupPage__Body__formComponent__radio">
                      <Form.Item>
                        {getFieldDecorator("Radio", {
                          rules: [
                            {
                              required: true,
                              message: "*Mandatory field",
                            },
                          ],
                        })(
                          <Radio>
                            <span className="SignupPage__Body__formComponent__radio__txt">
                              I agree to the
                              <span className="SignupPage__Body__formComponent__radio__txt__bluecolortxt">
                                &nbsp; Conditions of UsePrivacy Policy,
                                <span className="SignupPage__Body__formComponent__radio__txt__blackcolortxt">
                                  &
                                </span>{" "}
                                Informed Consent
                              </span>
                            </span>
                          </Radio>
                        )}
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item>
                      <div className="SignupPage__Body__formComponent__button">
                        {getFieldDecorator("Button")(
                          <Button htmlType="submit"> Register </Button>
                        )}
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Form.create()(SignupPage);

// import React, { useState } from 'react';
// import {
//   Form,
//   Input,
//   Tooltip,
//   Icon,
//   Select,
//   Checkbox,
//   Button,
// } from 'antd';

// const { Option } = Select;

// const initialState = {
//   confirmDirty: false,
//   autoCompleteResult: [],
//   firstname: "hello",
//   email: "ags@dev"
// };
// const SignupPage = (props) => {
//   const [state, setState] = useState(initialState);

//   const handleSubmit = e => {
//     e.preventDefault();
//     props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };

//   const handleConfirmBlur = e => {
//     const { value } = e.target;
//     setState({ confirmDirty: state.confirmDirty || !!value });
//   };

//   const compareToFirstPassword = (rule, value, callback) => {
//     const { form } = props;
//     if (value && value !== form.getFieldValue('password')) {
//       callback('Two passwords that you enter is inconsistent!');
//     } else {
//       callback();
//     }
//   };

//   const validateToNextPassword = (rule, value, callback) => {
//     const { form } = props;
//     if (value && state.confirmDirty) {
//       form.validateFields(['confirm'], { force: true });
//     } else if (value && value.length < 6) {
//       callback('password should be of atleast 6 characters!');
//       return
//     }
//     callback();
//   };

//   const { getFieldDecorator, getFieldValue } = props.form;

//   const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 8 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 16 },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };
//   const prefixSelector = getFieldDecorator('prefix', {
//     initialValue: '91',
//   })(
//     <Select style={{ width: 70 }}>
//       <Option value="91">+91</Option>
//       <Option value="87">+87</Option>
//     </Select>,
//   );

//   return (
//     <div className="register-container">
//       <Form {...formItemLayout} onSubmit={handleSubmit} initialValues={state}
//       >
//         <Form.Item label="E-mail" name="email">
//           {getFieldDecorator('email', {
//             initialValue: state?.email,
//             rules: [
//               {
//                 type: 'email',
//                 message: 'The input is not valid E-mail!',
//               },
//               {
//                 required: true,
//                 message: 'Please input your E-mail!',
//               },
//             ],
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item label="Password" hasFeedback>
//           {getFieldDecorator('password', {
//             rules: [
//               {
//                 required: true,
//                 message: 'Please input your password!',
//               },
//               {
//                 validator: validateToNextPassword,
//               },
//             ],
//           })(<Input.Password />)}
//         </Form.Item>
//         <Form.Item label="Confirm Password" hasFeedback>
//           {getFieldDecorator('confirm', {
//             rules: [
//               {
//                 required: true,
//                 message: 'Please confirm your password!',
//               },
//               {
//                 validator: compareToFirstPassword,
//               },
//             ],
//           })(<Input.Password onBlur={handleConfirmBlur} />)}
//         </Form.Item>
//         <Form.Item
//           label={
//             <span>
//               Nickname&nbsp;
//               <Tooltip title="What do you want others to call you?">
//                 <Icon type="question-circle-o" />
//               </Tooltip>
//             </span>
//           }
//         >
//           {getFieldDecorator('nickname', {
//             rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
//           })(<Input />)}
//         </Form.Item>

//         <Form.Item label="Phone Number">
//           {getFieldDecorator('phone', {
//             rules: [{ required: true, message: 'Please input your phone number!' }],
//           })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           {getFieldDecorator('agreement', {
//             valuePropName: 'checked',
//           })(
//             <Checkbox>
//               I have read the <a href="/">agreement</a>
//             </Checkbox>,
//           )}
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit" disabled={!(!!getFieldValue("agreement"))}>
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }

// export default Form.create()(SignupPage);
