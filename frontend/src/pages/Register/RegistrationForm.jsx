import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import UserService from "../../services/UserService";

import eyePasswordShow from "../../assets/eye-password-show.png";
import eyePasswordHide from "../../assets/eye-password-hide.png";


const RegistrationForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
        name: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const saveUser = (e) => {
        e.preventDefault();

        if (user.password !== confirmPassword) {
            setErrorMessage("パスワードが一致しません。もう一度確認してください。");
            return;
        }

        UserService.saveUser(user)
            .then((response) => {
                setUser({
                    id: "",
                    username: "",
                    password: "",
                    email: "",
                    name: "",
                });

                alert("登録に成功しました！ログイン画面に遷移します。");
                navigate("/login", { replace: true });
            })
            .catch((err) => {
                setErrorMessage("登録に失敗しました。もう一度お試しください。");
            });
    };

    return (
        <form className="registration-form" onSubmit={saveUser}>
            <div className="form-group">
                <label htmlFor="name">名前</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="名前を入力してください"
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">ユーザー名</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="ユーザー名を入力してください"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">パスワード</label>
                <div className="password-input">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="パスワードを入力してください"
                    />
                    <img
                        src={showPassword ? eyePasswordShow : eyePasswordHide}
                        alt="toggle visibility"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    />

                </div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">パスワード（確認用）</label>
                <div className="password-input">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="もう一度パスワードを入力してください"
                    />
                    <img
                        src={showPassword ? eyePasswordShow : eyePasswordHide}
                        alt="toggle visibility"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="メールアドレスを入力してください"
                />
            </div>
            <button type="submit" className="submit-button">登録</button>
            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}
            <div className="login-link">
                <a href="/login">ログイン画面に遷移する</a>
            </div>
        </form>
    );
};

export default RegistrationForm;
