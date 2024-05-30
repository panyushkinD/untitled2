import React, { useState } from 'react';
import {Button, Form, Input, InputNumber, Modal, Select} from 'antd';
import UsersApi from "../api/UsersApi";
const AddUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        addNewUser()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const changeGender = (value) => {
        setGender(value)

    }
    const api = new UsersApi();

    let [lastName, setLastName] = useState('');
    let [firstName, setFirstName] = useState('');
    let [patronymic, setPatronymic] = useState('');
    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');
    let [age, setAge] = useState(0);
    let [gender, setGender] = useState(0);

    const addNewUser = () => {
    let userItem = {
        lastName,
        firstName,
        patronymic,
        login,
        password,
        age,
        gender
    }

    api.addUsers(userItem)
        .then(response =>{
            console.log(response)
        })

}
    console.log(firstName)
    return (

        <>
            <Button type="primary" onClick={showModal}>
                Добавить пользователя
            </Button>
            <Modal title="Добавление.." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Логин"
                        name="login"
                        onChange={event => {
                            setLogin(event.target.value)
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        onChange={event => {
                            setPassword(event.target.value)
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Имя"
                        name="firstName"
                        onChange={event => {
                            setFirstName(event.target.value)
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Фамилия"
                        name="lastName"
                        onChange={event => {
                            setLastName(event.target.value)
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                        <Form.Item
                            label="Отчество"
                            name="patronymic"
                            onChange={event => {
                                setPatronymic(event.target.value)
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                            <Form.Item
                                label="Возраст"
                                name="age"
                                onChange={event => {
                                    setAge(event.target.value)
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                    <Form.Item
                        label="Пол"
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select

                        onChange={changeGender}
                        options={[
                            {
                                value: '1',
                                label: 'Мужской',
                            },
                            {
                                value: '2',
                                label: 'Женский',
                            },

                        ]}
                    />
                    </Form.Item>

                </Form>




            </Modal>
        </>
    )
};
export default AddUsers;