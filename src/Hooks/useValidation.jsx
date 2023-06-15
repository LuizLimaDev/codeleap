import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useValidation = () => {
    const [username, setUsername] = useState(false)
    const navigate = useNavigate()
    const posts = useSelector(state => state.posts);

    function handleInput(e) {

        const user = e.target.value;
        setUsername(false);

        const findUser = posts.find(username => username.userName === user);

        if (!findUser) {
            return;
        }

        console.log(`Bem vindo(a) ${findUser.userName}`)
        setUsername(true)
    }

    function login() {
        navigate('/dashboard');
    }

    return {
        username,
        handleInput,
        login
    }
}