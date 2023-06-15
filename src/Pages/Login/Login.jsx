import logo from "../../assets/codeleap-black.svg";
import { useValidation } from "src/Hooks/useValidation";

export default function Login() {
    const { handleInput, login, username } = useValidation();

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