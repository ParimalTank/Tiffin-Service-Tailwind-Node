import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import I1 from "../assets/images/Group.svg";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] ">
        <div className="basis-[55%]">
          <img
            src={I1}
            alt="img-blur-shadow"
            width="700px"
            height="700px"
            layout="fill"
          />
        </div>

        <div className="basis-1/4">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to Login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                {/* <Input size="lg" label="Name" /> */}
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Password" />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#1"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                Sign In
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <a
                  href="/Signup"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign Up
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
