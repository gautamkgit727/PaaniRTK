// src/utils/hashHelper.ts
import CryptoJS from "crypto-js";

/**
 * Hash password with dynamic salt based on username and current date.
 * @param user Email or username (must include @ if email)
 * @param password Plain text password
 * @returns string Format: salt$hash
 */
export function hashPassword(user: string, password: string): string {
    const username = user.split('@')[0];
    const left3 = username.length >= 3 ? username.substring(0, 3) : username;
    const right2 = username.length >= 2 ? username.substring(username.length - 2) : username;

    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, ''); // "yyyyMMdd"

    const saltString = left3 + right2 + yyyymmdd;
    const key = CryptoJS.PBKDF2(password, saltString, {
        keySize: 256 / 32,
        iterations: 10000,
        hasher: CryptoJS.algo.SHA256
    });

    const hashBase64 = CryptoJS.enc.Base64.stringify(key);
    const saltBase64 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(saltString));

    return `${saltBase64}$${hashBase64}`;
}
