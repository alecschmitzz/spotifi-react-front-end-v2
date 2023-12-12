"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Loader2Icon } from "lucide-react";
import { userService } from "@/_services";
import { useNavigate } from "react-router-dom";

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {
  startLoading: () => void;
}

export function UserRegisterForm({
  startLoading,
  className,
  ...props
}: UserRegisterFormProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // form validation rules
  const registerValidationSchema = z.object({
    firstname: z.string().min(1, { message: "This field has to be filled." }),
    lastname: z.string().min(1, { message: "This field has to be filled." }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .min(8, { message: "This field has to be at least 8 characters." }),
  });

  const form = useForm<z.infer<typeof registerValidationSchema>>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerValidationSchema>) {
    return registerUser(values);
  }

  function registerUser(data: z.infer<typeof registerValidationSchema>) {
    return userService
      .register(data)
      .then(() => {
        alert("User registered");
        startLoading();
        navigate("/"); // Use navigate instead of history.push
      })
      .catch(() => alert("error"));
    // .catch(alertService.error);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-row gap-x-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="firstname" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your first name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="lastname" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your last name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="e-mail" {...field} />
                </FormControl>
                {/* <FormDescription>This is your e-mail address.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                        {showPassword ? (
                          <EyeOff
                            className="h-5 w-5"
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <Eye
                            className="h-5 w-5"
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </FormControl>
                {/* <FormDescription>This is your password.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            Sign Up with Email
            {form.formState.isSubmitting && (
              <Loader2Icon size="18" className="animate-spin ms-2" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
