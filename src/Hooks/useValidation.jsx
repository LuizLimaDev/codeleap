import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useValidationLogin = () => {
    const navigate = useNavigate()
    const posts = useSelector(state => state.posts);
    const [user, setUser] = useState(false)
    const [userName, setUsername] = useState('')

    function handleInput(e) {
        const currentUser = e.target.value;
        setUser(false);

        const findUser = posts.find(user => user.username === currentUser);

        if (!findUser) {
            return;
        }

        setUser(true)
        setUsername(findUser.username)
    }

    function login() {
        navigate(`/dashboard/${userName}`);
    }

    return {
        user,
        handleInput,
        login,
        userName
    }
}