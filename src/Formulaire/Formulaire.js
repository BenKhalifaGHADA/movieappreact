import { Modal, Form, Input, DatePicker, Select } from 'antd';

import React from 'react';
function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

const Formulaire = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { Option } = Select;
            const { getFieldDecorator } = form;
            //const { RangePicker, MonthPicker } = DatePicker;
            return (
                <Modal
                    visible={visible}
                    title="Create a new movie"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                       <Form.Item label="id">
                            {getFieldDecorator('id', {
                                rules: [{ required: true, message: 'Please input the id of movie!' }],
                            })
                                (<Input placeholder="id" />)}
                        </Form.Item>
                        <Form.Item label="Title">
                            {getFieldDecorator('Title', {
                                rules: [{ required: true, message: 'Please input the title of movie!' }],
                            })
                                (<Input placeholder="title" />)}
                        </Form.Item>

                        <Form.Item label="Cover of movie">
                            {getFieldDecorator('url', {
                                rules: [{ required: true, message: 'Please input the URL of movie!' }],
                            })
                                (<Input placeholder="URL " />)}
                        </Form.Item>
                        <Form.Item label="Date">
                            {getFieldDecorator('date',
                                {
                                    rules: [{ required: true, message: 'Please choose the date of film!' }],
                                })
                                (<DatePicker renderExtraFooter={() => 'extra footer'} />)}
                        </Form.Item>

                        <Form.Item label="Rating">
                            {getFieldDecorator('rate',
                                {
                                    rules: [{ required: true, message: 'Please choose the Rating!' }],
                                })
                                (<Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a rating"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                </Select>)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

export default Formulaire