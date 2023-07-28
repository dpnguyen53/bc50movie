import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from "./constants";
import api from "utils/apiUtil";

export const actAuth = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          console.log(result.data);
          const user = result.data.content;

          if (!(user.maLoaiNguoiDung === "QuanTri")) {
            //show error
            const error = {
              response: {
                data: {
                  content: "Bạn không có quyền truy cập!",
                },
              },
            };
            return Promise.reject(error);
          }

          //QuanTri => lưu thông tin user
          dispatch(actAuthSuccess(user));

          //QuanTri => lưu trang thái login
          localStorage.setItem("UserAdmin", JSON.stringify(user));

          //QuanTri => redirect admin/dashboard
          navigate("/admin/dashboard", { replace: true });
        }
      })
      .catch((error) => {
        dispatch(actAuthFail(error));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error,
  };
};
