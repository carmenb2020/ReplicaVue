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
        <input @click="check()" type="submit" value="Sign in">
        <button>Forgot password?</button>
    </form>
</template>

<style>
    form {
        width: 100vw;
        display: flex;
        flex-direction: column
    }

    h2 {
        text-align: center;
    }

    form :first-child {
        max-width: 50%;
    }    
</style>