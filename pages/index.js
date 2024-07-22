/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useRouter } from "next/router";
import useMobile from "~/hooks/useMobile";
import Input from "~/components/Input";
import PasswordInput from "~/components/PasswordInput";
import Image from "next/image";
import { login } from "~/api";

const Home = () => {
  const isMobile = useMobile();
  const [step, setStep] = useState("step-1");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await login({ username, password });
      if (data && data.token) {
        // Navigate to /dashboard on successful login
        router.push("/dashboard");
      } else {
        // Handle login failure
        console.error("Login failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-container-margin lg:pt-[101px] pt-[41px] lg:mb-24 mb-[66px]">
      <div
        className={`bg-white rounded-[50px] ${step === "step-1" ? "h-[550px] lg:h-[750px]" : "h-[618px] lg:h-[849px]"}  px-[42px] 2xl:px-[90px] pt-[50px] 2xl:pt-[99px]`}
      >
        <Image
          src="/assets/logo/Logo.png"
          alt="logo"
          height={isMobile ? 29.5 : 59}
          width={isMobile ? 63.5 : 135}
        />
        {step === "step-1" && (
          <div className="flex mt-[41px] lg:mt-[106px] lg:justify-between flex-col lg:flex-row">
            <div className="flex flex-col max-w-[457px]">
              <span className="text-xs md:text-lg xl:text-2xl lg:!leading-[50px] !leading-[25px]">
                STEP 1
              </span>
              <h1 className="font-500 text-2xl md:text-3xl xl:text-5xl lg:!leading-[55px] !leading-[25px]">
                Enter your email address to continue
              </h1>
              <span className="text-xs md:text-lg xl:text-2xl lg:!leading-[50px] !leading-[25px]">
                Log in to your account. If you don’t have one, you will be
                prompted to create one.
              </span>
            </div>
            <div className="flex flex-col items-end mt-[40px] md-[mt-0]">
              <Input
                type="text"
                name="username"
                id="username"
                className="lg:h-[100px] lg:w-[723px] h-full w-full"
                placeholder="User Name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="mt-[25px] flex justify-between w-full">
                {usernameError && (
                  <span className="text-xs text-red-500">
                    Please enter your username!
                  </span>
                )}
                <button
                  type="button"
                  className="text-white bg-black  md:w-[227px] md:h-[75px] w-[113px] h-[37px] font-800 lg:text-2xl mg:text-lg text-xs rounded-[10px]"
                  onClick={() => {
                    if (username) setStep("step-2");
                    else setUsernameError(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
        {step === "step-2" && (
          <>
            <div className="flex mt-[41px] lg:mt-[106px] lg:justify-between flex-col lg:flex-row">
              <div className="flex flex-col max-w-[457px]">
                <span className="text-xs md:text-lg xl:text-2xl lg:!leading-[50px] !leading-[25px]">
                  STEP 2
                </span>
                <h1 className="font-500 text-2xl md:text-3xl xl:text-5xl lg:!leading-[55px] !leading-[25px]">
                  Create an account to continue
                </h1>
                <span className="text-xs md:text-lg xl:text-2xl lg:!leading-[50px] !leading-[25px]">
                  You’ll be able to log in to Dingoo with this email address and
                  password.
                </span>
              </div>
              <div className="flex flex-col mt-[40px] md-[mt-0]">
                <span className="text-xs md:text-lg xl:text-2xl lg:!leading-[50px] !leading-[25px] mb-4 md:mb-[20px]">
                  Enter a password to create your account with
                </span>
                <PasswordInput
                  inputClassName="lg:h-[100px] lg:w-[723px] h-full w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Choose a password"
                />
                <div className="flex items-center mt-[29px]">
                  <span className="text-gray-700 sm:w-[447px]  w-[139px] text-[10px] md:text-lg xl:text-2xl">
                    Use a minimum of 6 characters (case sensitive) with at least
                    one number or special character.
                  </span>
                  <button
                    type="button"
                    className="text-white bg-black md:w-[274px] md:h-[75px] w-[113px] h-[37px] font-800 lg:text-2xl mg:text-lg text-xs rounded-[10px] whitespace-nowrap"
                    onClick={handleLogin}
                  >
                    {isMobile ? "Continue" : "Agree & Continue"}
                  </button>
                </div>
              </div>
            </div>
            <span className="text-[7px] lg:text-sm font-300 lg:!leading-[30px] !leading-[15px] lg:mt-[53px] mt-[24px] block">
              Dingoo will use your data to personalise and improve your Dingoo
              experience and to send you information about Dingoo. You can
              change your communication preferences anytime. We may use your
              data as described in our Privacy Policy, including sharing it with
              The Test of Companies. By clicking "Agree & Continue", you agree
              to our Subscriber Agreement and acknowledge that you have read
              our Privacy Policy and Collection Statement.
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
