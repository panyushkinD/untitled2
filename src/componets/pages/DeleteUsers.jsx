import React, {useState} from 'react';
import {Button, Modal} from "antd";
import UsersApi from "../api/UsersApi";

const DeleteUsers = () => {
    const api = new UsersApi();
    const [id, setId] = useState(null);


    const  deleteUser = () => {
        api.deleteUsers(id)
            .then(response =>
            console.log(response + "200"))
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        deleteUser();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Удалить
            </Button>
            <Modal title="Удаление.." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Пожалуйста, введите ID пользователя, которого хотите удалить:</p>
                <input placeholder="Сюда id петушара" value={id} onChange={e => setId(e.target.value)} />
                <p>После ввода ID нажмите "ОК", чтобы подтвердить удаление.</p>

            </Modal>
        </>
    );
};


export default DeleteUsers;