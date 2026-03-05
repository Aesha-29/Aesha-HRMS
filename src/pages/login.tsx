import { useState } from "react";
import axios from "axios";
import "./login.css";

interface LoginProps {
    onLogin: (token: string, user: any) => void;
}

function Login({ onLogin }: LoginProps) {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                identifier,
                password
            });

            const { token, user } = res.data;
            onLogin(token, user);
        } catch (err: any) {
            setError(err.response?.data?.error || "Failed to login. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-header">
                    <h2>MineHR Solutions</h2>
                    <p>Sign in to access your workspace</p>
                </div>

                {error && <div className="login-error">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Employee ID or Email</label>
                        <input
                            type="text"
                            required
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            placeholder="Enter your registered ID or email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                        <div className="help-text">Try 'password123' if you haven't set a password yet</div>
                    </div>

                    <button type="submit" disabled={loading} className="btn-login">
                        {loading ? "Authenticating..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
