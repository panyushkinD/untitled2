import axios from "axios";


class UsersApi {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/main"
        });
    }

    async getAllUsers() {
        return await this.#axios.get("/all-users")
    }

}


export default UsersApi;