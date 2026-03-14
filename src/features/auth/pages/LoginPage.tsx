import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../authApi";
import { setCredentials } from "../authSlice";
import { hashPassword } from "@/utils/common_helper";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routes";


// ✅ Exported schema for reuse & unit tests
export const loginSchema = Yup.object({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
});

export type LoginFormInputs = Yup.InferType<typeof loginSchema>;

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInputs>
        ({
            resolver: yupResolver(loginSchema),
            mode: "onTouched", // validate on blur/touch
        });

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const hashedPassword = hashPassword(data.email, data.password);

            const response = await login({
                email: data.email,
                password: hashedPassword,
            }).unwrap();

            dispatch(
                setCredentials({
                    token: response.result.token,
                    user: response.result,
                })
            );

            toast.success("Login successful 🎉");
            navigate(ROUTES.dashboard); // ✅ redirect
        } catch (err: any) {
            toast.error(err?.data?.message || "Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">
                    Welcome Back 👋
                </h2>
                <p className="mt-2 text-center text-gray-500">
                    Please login to continue
                </p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Email */}
                    <div className="relative">
                        <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                        <input
                            type="email"
                            placeholder="Email address"
                            {...register("email")}
                            className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2 rounded text-indigo-600" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || isLoading}
                        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
                    >
                        {isSubmitting || isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
