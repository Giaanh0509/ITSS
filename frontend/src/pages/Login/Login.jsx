import React, { useContext, useState } from "react";
import UserService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import eyePasswordShow from "../../assets/eye-password-show.png";
import eyePasswordHide from "../../assets/eye-password-hide.png";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        UserService.loginUser(credentials)
            .then((res) => {
                if (res.data.message === "Login Success") {
                    localStorage.setItem("username", credentials.username);
                    sessionStorage.setItem("username", credentials.username);
                    login(credentials.username);
                    navigate("/");
                } else {
                    alert("Login failed");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNavigateToRegister = (e) => {
        e.preventDefault();
        navigate("/register");
    };

    return (
        <div className="bg-gray-100">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <main className="flex flex-col items-center my-16 flex-1 w-full px-4">
                    <h1 className="text-6xl font-bold mb-8">ログイン</h1>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 mb-2"
                                    htmlFor="username"
                                >
                                    ユーザー名
                                </label>
                                <input
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    id="username"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    placeholder="ユーザー名を入力してください"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 mb-2"
                                    htmlFor="password"
                                >
                                    パスワード
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        id="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="パスワードを入力してください"
                                    />
                                    <img
                                        src={showPassword ? eyePasswordShow : eyePasswordHide}
                                        alt="toggle visibility"
                                        onClick={togglePasswordVisibility}
                                        style={{
                                            cursor: "pointer",
                                            width: "20px",
                                            height: "20px",
                                            position: "absolute",
                                            right: "10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                </div>
                                <div className="text-right mt-2">
                                    <a
                                        href="https://www.example.com"
                                        className="text-sm text-gray-500"
                                    >
                                        パスワードを忘れた場合
                                    </a>
                                </div>
                            </div>
                            <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                                ログイン
                            </button>
                        </form>
                        <div className="text-center mt-4">
                            <span className="text-gray-500">
                                アカウントをお持ちでないですか？
                            </span>
                            <a
                                onClick={handleNavigateToRegister}
                                className="text-red-600 font-bold cursor-pointer"
                            >
                                今すぐ登録
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Login;
