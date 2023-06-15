<script setup>
    const show = () => {
        let showButton = document.getElementById("showButton");
        let password = document.getElementById("passwordField");

        if (password.type === "text"){
            password.type = "password";
            showButton.innerText = "Show password"
        }
        else {
            password.type = "text";
            showButton.innerText = "Hide password"
        }
    }

    const check = () => {
        let email = document.getElementById("emailField");
        let password = document.getElementById("passwordField");

        if (email.value == "" || password.value == ""){
            alert("Please introduce your email and password");
        }
    }
</script>

<template>
    <form>
        <h2>Welcome</h2>
        <label for="emailField">Email</label>
        <input id="emailField" type="email" placeholder="Email">
        <label for="passwordField">Password</label>
        <input id="passwordField" type="password" placeholder="Password">
        <button id="showButton" type="button" @click="show()">Show password</button>
        <input id="signIn" @click="check()" type="submit" value="Sign in">
        <button id="forgot">Forgot password?</button>
    </form>
</template>

<style>
    form {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:azure;
        font-weight: bold;
        font-family: 'Open sans', sans-serif;
    }

    h2 {
        text-shadow: 1px 1px 1px gray;
    }

    input {
        max-width: 25%;
        text-align: center;
    }  

    button, input {
        border-radius: 4px;
        margin: 8px 24px;
    }

    #signIn, #showButton {
        color: white;
        background-color: #ff556e;
        border-radius: 1.75rem;
        border: 2px solid #ff556e;
        padding: 5px 20px;
        min-width: 80px;
        font-weight: bold;
    }

    #forgot {
        border: none;
        background: none;
        color: blue;
        text-decoration: underline;
    }
</style>