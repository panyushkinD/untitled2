import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import UsersApi from "../api/UsersApi";

const columns = [
    {
        title: 'Имя',
        dataIndex: 'lastName',
        width: 150,
    },
    {
        title: 'Фамилия',
        dataIndex: 'firstName',
        width: 150,
    },
    {
        title: 'Отчество',
        dataIndex: 'patronymicName',
        width: 150,
    },
    {
        title: 'Логин',
        dataIndex: 'login',
        width: 150,
    },
    {
        title: 'Пароль',
        dataIndex: 'password',
        width: 150,
    },
    {
        title: 'Возвраст',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Пол',
        dataIndex: 'gender',
        width: 150,
    },
];
const UsersTable = () => {
    const api = new UsersApi();
    const [data, setData] = useState([])
    const getAllUsers = () => {

        api.getAllUsers()
            .then(response => {
                setData(response.data)

            })
            .catch(error => {
                console.log("123")})
    }
    useEffect(() => {
        getAllUsers()
    }, []);
    console.log(data)
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSize: 50,
            }}
            scroll={{
                y: 240,
            }}
        />
    );
}
export default UsersTable;