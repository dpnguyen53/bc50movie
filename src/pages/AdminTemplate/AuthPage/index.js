import React, { useState } from "react";

export default function AuthPage() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(state);
    //gọi tới action call api
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Tài khoản</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
