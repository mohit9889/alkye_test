/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useRouter } from 'next/router';
import useMobile from '~/hooks/useMobile';
import Input from '~/components/Input';
import PasswordInput from '~/components/PasswordInput';
import Image from 'next/image';
import { login } from '~/api';

const Home = () => {
  const isMobile = useMobile();
  const [step, setStep] = useState('step-1');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await login({ username, password });
      if (data && data.token) {
        // Navigate to /dashboard on successful login
        router.push('/dashboard');
      } else {
        // Handle login failure
        console.error('Login failed:', data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container mx-auto mb-[66px] px-4 pt-[41px] lg:mb-24 lg:px-8 lg:pt-[101px] xl:px-12 2xl:px-container-margin">
      <div
        className={`rounded-[50px] bg-white ${step === 'step-1' ? 'h-[550px] lg:h-[750px]' : 'h-[618px] lg:h-[849px]'} px-[42px] pt-[50px] 2xl:px-[90px] 2xl:pt-[99px]`}
      >
        <Image
          src="/assets/logo/Logo.png"
          alt="logo"
          height={isMobile ? 29.5 : 59}
          width={isMobile ? 63.5 : 135}
        />
        {step === 'step-1' && (
          <div className="mt-[41px] flex flex-col lg:mt-[106px] lg:flex-row lg:justify-between">
            <div className="flex max-w-[457px] flex-col">
              <span className="text-xs !leading-[25px] md:text-lg lg:!leading-[50px] xl:text-2xl">
                STEP 1
              </span>
              <h1 className="text-2xl font-500 !leading-[25px] md:text-3xl lg:!leading-[55px] xl:text-5xl">
                Enter your email address to continue
              </h1>
              <span className="text-xs !leading-[25px] md:text-lg lg:!leading-[50px] xl:text-2xl">
                Log in to your account. If you don’t have one, you will be prompted to create one.
              </span>
            </div>
            <div className="md-[mt-0] mt-[40px] flex flex-col items-end">
              <Input
                type="text"
                name="username"
                id="username"
                className="h-full w-full lg:h-[100px] lg:w-[723px]"
                placeholder="User Name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="mt-[25px] flex w-full justify-between">
                {usernameError && (
                  <span className="text-xs text-red-500">Please enter your username!</span>
                )}
                <button
                  type="button"
                  className="mg:text-lg h-[37px] w-[113px] rounded-[10px] bg-black text-xs font-800 text-white md:h-[75px] md:w-[227px] lg:text-2xl"
                  onClick={() => {
                    if (username) setStep('step-2');
                    else setUsernameError(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 'step-2' && (
          <>
            <div className="mt-[41px] flex flex-col lg:mt-[106px] lg:flex-row lg:justify-between">
              <div className="flex max-w-[457px] flex-col">
                <span className="text-xs !leading-[25px] md:text-lg lg:!leading-[50px] xl:text-2xl">
                  STEP 2
                </span>
                <h1 className="text-2xl font-500 !leading-[25px] md:text-3xl lg:!leading-[55px] xl:text-5xl">
                  Create an account to continue
                </h1>
                <span className="text-xs !leading-[25px] md:text-lg lg:!leading-[50px] xl:text-2xl">
                  You’ll be able to log in to Dingoo with this email address and password.
                </span>
              </div>
              <div className="md-[mt-0] mt-[40px] flex flex-col">
                <span className="mb-4 text-xs !leading-[25px] md:mb-[20px] md:text-lg lg:!leading-[50px] xl:text-2xl">
                  Enter a password to create your account with
                </span>
                <PasswordInput
                  inputClassName="lg:h-[100px] lg:w-[723px] h-full w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Choose a password"
                />
                <div className="mt-[29px] flex items-center">
                  <span className="w-[139px] text-[10px] text-gray-700 sm:w-[447px] md:text-lg xl:text-2xl">
                    Use a minimum of 6 characters (case sensitive) with at least one number or
                    special character.
                  </span>
                  <button
                    type="button"
                    className="mg:text-lg h-[37px] w-[113px] whitespace-nowrap rounded-[10px] bg-black text-xs font-800 text-white md:h-[75px] md:w-[274px] lg:text-2xl"
                    onClick={handleLogin}
                  >
                    {isMobile ? 'Continue' : 'Agree & Continue'}
                  </button>
                </div>
              </div>
            </div>
            <span className="mt-[24px] block text-[7px] font-300 !leading-[15px] lg:mt-[53px] lg:text-sm lg:!leading-[30px]">
              Dingoo will use your data to personalise and improve your Dingoo experience and to
              send you information about Dingoo. You can change your communication preferences
              anytime. We may use your data as described in our Privacy Policy, including sharing it
              with The Test of Companies. By clicking "Agree & Continue", you agree to
              our Subscriber Agreement and acknowledge that you have read our Privacy
              Policy and Collection Statement.
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
