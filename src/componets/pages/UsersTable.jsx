import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import UsersApi from "../api/UsersApi";
import AddUsers from "./AddUsers";
import DeleteUsers from "./DeleteUsers";
import UpdateUser from "./UpdateUser";

const columns = [
    {
        title: 'Имя',
        dataIndex: 'firstName',
        width: 150,
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName',
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
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 50,
                }}

            />
            <div><AddUsers/></div>
            <div><DeleteUsers/></div>
            <div><UpdateUser/></div>
        </div>


    );

}
export default UsersTable;