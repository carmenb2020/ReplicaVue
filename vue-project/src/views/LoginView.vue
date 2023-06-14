<script setup>
    let email = document.getElementById("emailField");
    let password = document.getElementById("passwordField");

    const show = () => {
        if (password.type === "text"){
            password.type = "password";
        }
        else {
            password.type = "text";
        }
    }

    const check = () => {
        if (email !== "" && password !== ""){
            alert("Please introduce an e-mail and password");
        }
    }
</script>

<template>
    <section>
        <h1>Welcome</h1>
        <input id="emailField" type="text" placeholder="E-mail">
        <input id="passwordField" type="password" placeholder="Password">
        <button @click="show()">Show/hide password</button>
        <input @click="check()" type="submit">
    </section>
</template>

<style>

</style>