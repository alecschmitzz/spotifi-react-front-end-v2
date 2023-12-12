import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserRegisterForm } from "@/components/user-register-form";
import { UserLoginForm } from "@/components/user-login-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Terms } from "@/components/terms";
import { useEffect, useState } from "react";
import { Privacy } from "@/components/privacy";

export default function AuthenticationPage({
  startLoading,
}: {
  startLoading: () => void;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const getCookie = (name: string) => {
      const cookies = document.cookie.split("; ");
      const cookie = cookies.find((row) => row.startsWith(`${name}=`));
      console.log(cookie);
      return cookie ? cookie.split("=")[1] : null;
    };

    const jwtToken = getCookie("jwt");

    if (jwtToken) {
      startLoading();
      navigate("/");
    }
  }, []);

  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const logoutStatus = !!params.get("logout");

  const [isLogin, setIsLogin] = useState(logoutStatus);
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Button
          variant="ghost"
          onClick={() => setIsLogin((prev) => !prev)}
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          {isLogin ? "Register" : "Login"}
        </Button>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-6xl font-medium font-outfit">
            <img src="/assets/SPOTIFI_LOGO-04.png" className="h-[80px] me-5" />
            Spotifi
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <i className="text-lg">
                &ldquo;This music streaming platform redefines convenience with
                its intuitive interface and diverse, curated playlists. It's
                revolutionized how I explore and enjoy my favorite tunes
                effortlessly. &rdquo;
              </i>
              <footer className="text-sm">Miel Schmitz</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your info below to create your account
              </p>
            </div>

            {isLogin ? (
              <UserLoginForm startLoading={startLoading} />
            ) : (
              <UserRegisterForm startLoading={startLoading} />
            )}

            {!isLogin && (
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Terms open={openTerms} setOpen={setOpenTerms} />
                <Privacy open={openPrivacy} setOpen={setOpenPrivacy} />
                <span
                  className="cursor-pointer underline underline-offset-4 hover:text-primary"
                  onClick={() => setOpenTerms(true)}
                >
                  Terms of Service
                </span>{" "}
                and{" "}
                <span
                  className="cursor-pointer underline underline-offset-4 hover:text-primary"
                  onClick={() => setOpenPrivacy(true)}
                >
                  Privacy Policy
                </span>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
