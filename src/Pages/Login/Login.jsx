import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/codeleap-black.svg";

export default function Login() {
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

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <img className="mb-4" src={logo} />

            <div className="flex flex-col justify-start w-df p-6 rounded-2xl bg-white">
                <h3 className="text-2xl font-bold">Welcome to CodeLeeap network!</h3>
                <label className="mt-6 font-normal text-base" htmlFor="username">Please enter your username</label>
                <input
                    className="input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="John doe"
                    onChange={handleInput}
                />
                <button
                    className={`button ${username ? 'bg-blue' : 'bg-gray-50'} uppercase`}
                    disabled={!username}
                    onClick={login}
                >
                    Enter
                </button>
            </div >
        </div>
    )
}