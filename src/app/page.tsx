"use client";
import Image from "next/image";
import Logo from "@/assets/svg/Logo.svg";
import { useState } from "react";

const initialFormValue = {
  name: "",
  email: "",
  password: "",
  rememberMe: false,
};
type FormDataType = typeof initialFormValue;
type ErrorListType = Partial<FormDataType>;

export default function Home() {
  const [formType, setFormType] = useState<string>("login");
  const [formData, setFormData] = useState<FormDataType>(initialFormValue);
  const [errorList, setErrorList] = useState<ErrorListType>(initialFormValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const updatedFormValues = {
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    };
    setFormData(updatedFormValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setErrorList(errors);
    } else {
      setErrorList({});
      console.log(formData);
    }
  };

  const validate = (data: FormDataType) => {
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    const error: ErrorListType = {};
    if (formType === "register" && !data.name) {
      error.name = "Lütfen isim giriniz";
    }
    if (!data.email || !EMAIL_REGEX.test(data.email)) {
      error.email = "Lütfen geçerli bir email giriniz";
    }
    if (!data.password || !PASSWORD_REGEX.test(data.password)) {
      error.password = "Şifre 6-20 karakter arası ve alfanumerik olmalıdır";
    }
    return error;
  };

  const handleFormType = () => {
    if (formType === "login") setFormType("register");
    else setFormType("login");
    setFormData(initialFormValue);
    setErrorList({});
  };

  return (
    <main className="max-h-screen max-w-screen flex">
      <div className="h-screen w-1/2 bg-[url('../assets/img/background.png')] bg-cover bg-center bg-no-repeat" />
      <div className="h-screen w-1/2 px-32 py-8 flex flex-col items-center justify-around gap-6">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" />
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-gray-500">
                Welcome back!
              </h2>
              <h1 className="text-3xl font-bold mt-3">Login to your account</h1>
            </div>
            {formType === "register" ? (
              <div className="flex flex-col gap-3 text-xl relative">
                <label className="font-semibold">Name</label>
                <input
                  className="bg-[#F4F4FF] rounded-lg px-6 py-4 min-w-[400px]"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={formData.name}
                />
                {errorList.name ? (
                  <small className="absolute -bottom-5 left-2 text-xs font-semibold text-red-500">
                    {errorList.name}
                  </small>
                ) : null}
              </div>
            ) : null}
            <div className="flex flex-col gap-3 text-xl relative">
              <label className="font-semibold">E-mail</label>
              <input
                className="bg-[#F4F4FF] rounded-lg px-6 py-4 min-w-[400px]"
                type="text"
                placeholder="john@mail.com"
                name="email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
              />
              {errorList.email ? (
                <small className="absolute -bottom-5 left-2 text-xs font-semibold text-red-500">
                  {errorList.email}
                </small>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 text-xl relative">
              <label className="font-semibold">Password</label>
              <input
                className="bg-[#F4F4FF] rounded-lg px-6 py-4 min-w-[400px]"
                type="password"
                placeholder="********"
                name="password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
              />
              {errorList.password ? (
                <small className="absolute -bottom-5 left-2 text-xs font-semibold text-red-500">
                  {errorList.password}
                </small>
              ) : null}
            </div>
            {formType === "login" ? (
              <div className="text-purple-700 font-semibold flex items-center gap-2">
                <input
                  className="accent-purple-700 w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="checkbox"
                  name="rememberMe"
                  onChange={(e) => handleChange(e)}
                  checked={formData.rememberMe}
                />
                <label className="cursor-pointer" htmlFor="checkbox">
                  Remember Me
                </label>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-center gap-2 pt-8">
            <button className="w-full py-3 rounded-md bg-orange-500 text-white font-semibold text-xl duration-300 hover:shadow active:scale-95">
              {formType === "login" ? "Login" : "Register"}
            </button>
            <button
              type="button"
              onClick={handleFormType}
              className="w-full py-3 rounded-md border border-solid border-purple-700 text-purple-700 font-semibold text-xl duration-300 hover:shadow active:scale-95"
            >
              {formType === "login" ? "Register" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
