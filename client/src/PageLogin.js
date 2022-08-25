import React, { useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import LoginHeader from "./LoginHeader";

function PageLogin({ setCurrentEmail }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div id="login-cont">
            <LoginHeader />
            {showLogin ? (
                <>
                <Login setCurrentEmail={setCurrentEmail} />
                <p id="p1">
                    Don't have an account?
                    <button
                        id="b1" onClick={() => setShowLogin(false)}>Sign Up
                    </button>
                </p>
                </>
            ) : (
                <>
                <Signup setCurrentEmail={setCurrentEmail} />
                <p id="p2">
                    Already have an account?
                    <button id="b2" onClick={() => setShowLogin(true)}>
                        Log In
                    </button>
                </p>
                </>
             ) 
            }
        </div>
    )
}

export default PageLogin;