import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { loginSuccess } from "../auth_redux/action";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [append, setAppend] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("submit", data);
    setAppend(true);
    axios
      .post("https://fashio-ecommerce.herokuapp.com/login", data)
      .then((res) => {
        console.log("before", res.data);
        if (res.data.status === "false") {
          setAppend(false);
          return alert("Enter Correct Details");
        } else {
          // dispatch(loginSuccess(res.data));
          console.log(res);
          alert("Login Successful!");
          localStorage.setItem("login_token", JSON.stringify(res.data.token));
          setTimeout(() => {
            // navigate("/product");
            window.location.href = "/product";
          }, 1000);
        }
      })
      .catch((err) => {
        return alert("Enter Correct Details");
      });
  };

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?k=20&m=1254508881&s=612x612&w=0&h=d6KO9oMB3cMLGSFEu5GoGbYX0RpkHSEoUCARo7UagTI="
                  className="w-100"
                  alt="Sample photo"
                />

                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-5 pb-5 pb-md-0 mb-md-5 px-md-2">Sign In</h3>
                  <form className="px-md-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        {...register("email", { required: true })}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        {...register("password", { required: true })}
                        required
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Login
                      </button>
                      {append ? <p>Loading..</p> : ""}
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't Have an account?{" "}
                      <Link to="/register" className="fw-bold text-body">
                        <u>Create here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
