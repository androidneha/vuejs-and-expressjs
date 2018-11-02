<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" v-model="email" placeholder="Email"/>
        <br>
        <input type="password" name="password" v-model="password" placeholder="*******"/>
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data () {
            return {
                email: 'abc',
                password: '123'
            }
        },
        watch: {
            email (value) {
                console.log('email has changed', value)
            }
        },
        methods: {
            async register () {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                console.log("Register button clicked "+response.data.message)
            }
        }
    }
</script>

<style scoped>

</style>