<script setup>
    let email = document.getElementById("emailField");
    let password = document.getElementById("passwordField");
    let showButton = document.getElementById("showButton");

    const show = () => {
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
    if (email.value == "" || password.value == ""){
        alert("Please introduce your email and password");
    }
    }
</script>

<template>
    <section>
        <h2>Welcome</h2>
        <label for="email">Email</label>
        <input id="emailField" type="text" placeholder="Email">
        <label for="password">Password</label>
        <input id="passwordField" type="password" placeholder="Password">
        <button id="showButton" @click="show()">Show password</button>
        <input @click="check()" type="submit">
    </section>
</template>

<style>

</style>