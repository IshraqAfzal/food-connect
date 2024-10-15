import React from 'react';

function Login() {
    return (
        <>
        <form>
            <div id="form-heading">Log in to your account</div>
            <div id="line-1">New to FoodConnect? Sign up <span>here</span></div>
            <div id="line-2">Have a FoodConnect admin account? Click <span>here</span></div>
            <input type="text" placeholder="Enter your email address" />
            <input type="password" placeholder="Enter your password" />
            <button id="button">Login</button>
        </form>
        </>
    );
}

function input(){
    document.getElementById("line-1")
}
export default Login;
