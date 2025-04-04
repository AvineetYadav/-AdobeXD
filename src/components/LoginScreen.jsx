import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const password = useRef(null);
  const email = useRef(null);
  const navigate = useNavigate();
  const userDetail = useSelector((store) => store?.user);

  const handler = (e) => {
    e.preventDefault();

    const emailValue = email.current?.value.trim();
    const passwordValue = password.current?.value.trim();

    if (
      userDetail &&
      userDetail.user?.email === emailValue &&
      userDetail.user?.password === passwordValue
    ) {
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#f5f5f5] p-5">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-[400px] w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
        </p>

        <form autoComplete="off">
          <div className="relative mb-5">
            <input
              type="email"
              autoComplete="off"
              placeholder=" Enter email address "
              ref={email}
              required
              className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#6c25ff]"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-2 text-sm text-[#6c25ff] bg-white px-1"
            >
              Email Address
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              placeholder=" Enter password "
              ref={password}
              required
              className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#6c25ff]"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-2 text-sm text-[#6c25ff] bg-white px-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            onClick={handler}
            className="w-full py-3 mt-3 bg-gray-400 text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
