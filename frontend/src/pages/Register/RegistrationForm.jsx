import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import UserService from "../../services/UserService";

const RegistrationForm = () => {
  
  const [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    name: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const saveUser = (e) => {
    e.preventDefault();

    if (user.password !== confirmPassword) {
      setErrorMessage("パスワードが一致しません。もう一度確認してください。");
      console.log(errorMessage);
      return;
    }

    UserService.saveUser(user)
        .then((response) => {
            console.log(response);
            setUser({
              id: "",
              username: "",
              password: "",
              email: "",
              name: "",
            });
            
            e.target.reset();
        })
        .catch((err) => {
            console.error(err);
        })
  };  

  return (
    <form className="registration-form" onSubmit={saveUser}>
      <div className="form-group">
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => handleChange(e)}
          placeholder="名前を入力してください"
        />
      </div>
      <div className="form-group">
        <label>ユーザー名</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => handleChange(e)}
          placeholder="ユーザー名を入力してください"
        />
      </div>
      <div className="form-group">
        <label>パスワード</label>
        <div className="password-input">
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            placeholder="パスワードを入力してください"
          />
          <img src="../../assets/images/eye_icon.svg" alt="toggle visibility" />
        </div>
      </div>
      <div className="form-group">
        <label>パスワード</label>
        <div className="password-input">
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e)}
            placeholder="もう一度パスワードを入力してください"
          />
          <img src="../../assets/images/eye_icon.svg" alt="toggle visibility" />
        </div>
      </div>
      <div className="form-group">
        <label>メールアドレス</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
          placeholder="メールアドレスを入力してください"
        />
      </div>
      <button type="submit" className="submit-button">登録</button>
      <div className="login-link">ログイン画面に遷移する</div>
    </form>
  );
};

export default RegistrationForm;
