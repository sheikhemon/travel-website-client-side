import React from "react";
// import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
    const { setIsLoading, signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="login">
            <h2>LOG IN </h2>
            <button onClick={handleGoogleSignIn}>
                <img src="https://lh3.googleusercontent.com/Zdopdchf1CPl3Vj4t3UK7cHJyqRSrdZhaR2epQF2fHdP-D_Z09NXcLiGzp__UR82CAcxaAfjNKeIUJaqUblhs2wgdhCVHGigOvJ1cUw_RoxBhCn6XBej=w600-l80-sg-rp" alt="" />
                <h4>Sign in</h4>
            </button>
        </div>
    );
};

export default LogIn;
