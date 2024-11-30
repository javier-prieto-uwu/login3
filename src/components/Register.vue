<template>
  <div class="split-left left">
    <div class="centered-left">
      <img
      src="https://i.ibb.co/RQjbDdY/image-1.png"
      alt="Imagen de ejemplo"
      class="image-full"
    />
    </div>
  </div>
  <div class="split-right right">
    <div class="centered-right">
      <img src="https://i.ibb.co/tJwJ1vM/arcanum-logo-libro.png" alt="">
      <h1 class="title">Create an Account</h1>
      <div class="form-group">
        <input
          type="text"
          placeholder="Email"
          v-model="email"
          class="input-field"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="input-field"
        />
      </div>
      <div class="button-group">
        <button @click="register" class="submit-btn">Submit</button>
        <button @click="signInWithGoogle" class="google-btn">
          Sign In With Google
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"; //IMPORT ROUTER

const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our router

const register = () => {
    const auth = getAuth(); //from firebase / auth
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        console.log ("Successfully registered")
        router.push('/Feed'); //redireccionar a feed
    })
    .catch ((error) => {
        console.log(error.code);
    })
}

</script>

<style scoped>
  
  /*clases que un tutorial de w3 dijo que haga*/

  .split-left {
    height: 100%;
    width: 75%;
    position: fixed;
    z-index: 1;
    top: 0;
    padding-top: 20px;
  }

  .split-right {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
  }

  .left {
    left: 0%;
    overflow: hidden;
  }

  .right {
    left: 75%;
    background-color: #000000;
  }

  .centered-left {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .centered-right {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    text-align: center;
  }


  .image-full{
    overflow: hidden;
  } 

  .register-container {
    display: flex;
    justify-content: start;
    align-items: start;
    min-height: 100vh;
    padding: 20px;
  }
  
  .register-box {
    background-color:black;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 5rem;
  }
  
  .title {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .input-field {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .input-field {
    color: black;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #000000;
    transition: border-color 0.3s ease;
  }

  
  .input-field:focus {
    outline: none;
    border-color: #4a90e2;
  }
  
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .submit-btn, .google-btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn {
    background-color: #4a90e2;
    color: white;
  }
  
  .submit-btn:hover {
    background-color: #357abd;
  }
  
  .google-btn {
    background-color: #fff;
    color: #757575;
    border: 1px solid #ddd;
  }
  
  .google-btn:hover {
    background-color: #f5f5f5;
  }
  </style>
