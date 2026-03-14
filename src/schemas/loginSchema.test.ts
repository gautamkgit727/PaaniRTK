import { loginSchema } from "./loginSchema";

describe("Login Schema", () => {
    it("requires email", async () => {
        expect.assertions(1);
        try {
            await loginSchema.validate({ email: "", password: "123456" });
        } catch (err: any) {
            expect(err.errors).toContain("Email is required");
        }
    });

    it("requires valid email", async () => {
        expect.assertions(1);
        try {
            await loginSchema.validate({ email: "wrong", password: "123456" });
        } catch (err: any) {
            expect(err.errors).toContain("Please enter a valid email address");
        }
    });

    it("requires password length", async () => {
        expect.assertions(1);
        try {
            await loginSchema.validate({ email: "test@mail.com", password: "123" });
        } catch (err: any) {
            expect(err.errors).toContain("Password must be at least 6 characters long");
        }
    });

    it("passes with valid input", async () => {
        const result = await loginSchema.validate({
            email: "test@mail.com",
            password: "123456",
        });
        expect(result).toEqual({ email: "test@mail.com", password: "123456" });
    });
});
