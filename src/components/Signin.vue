<template>

<div class="container mt-5">
    <div class="row">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://i.ibb.co/RQjbDdY/image-1.png" alt="Imagen de ejemplo" class="image-full">
      </div>
      <!-- Columna derecha para contenido -->
      <div class="col-md-6 d-flex align-items-center">
       

        <div class="signin-container">
      <div class="signin-box">
        <img src="https://i.ibb.co/tJwJ1vM/arcanum-logo-libro.png" alt="">
        <h1 class="title">Sign In to an account</h1>
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
          <div>
            <p v if="errMsg"> {{ errMsj }} </p>
          </div>
        </div>
        <div class="button-group">
          <button @click="register" class="submit-btn">Submit</button>
          <button @click="signInWithGoogle" class="google-btn">
            Sign In With Google
          </button>
        </div>
      </div>
    </div>


      </div>
    </div>
  </div>   




   
  </template>
  
<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"; //IMPORT ROUTER

const email = ref("");
const password = ref("");
const errMsj = ref(); //mensaje de error
const router = useRouter() //get a reference to our router

const register = () => {
    const auth = getAuth(); //from firebase / auth
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        console.log ("Successfully Sign In")
        router.push('/Feed'); //redireccionar a feed
    })
    .catch ((error) => {
        console.log(error.code);
        switch (error.code) {
            case "aut/invalid-emai":
                errMsj.value = "invalid email";             
                break;
            case "aut/user-not-found":
                errMsj.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsj.value = "Incorrect password";
                break;
            default:
                errMsj.value = "Email or password was incorrect";
                break;
        }
    })
}

</script>


<style>

.col-left {
  height: 100vh; /* La imagen ocupará toda la altura de la pantalla */
}

.image-full {
      width: 200%; 
      height: 100%; 
      object-fit: cover;
    }

  .signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }
  
  .signin-box {
    background-color: black;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
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
    background-color: purple;
    color: white;
  }
  
  .submit-btn:hover {
    background-color: gray;
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
