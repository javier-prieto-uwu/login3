<template>
  <div class="split-left left">
    <div class="centered-left">
      <img
      src="https://i.ibb.co/H79PRsw/Betterimage-ai-1733016196294.jpg"
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

.split-left, .split-right {
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}

.split-left {
  width: 75%;
  left: 0;
}

.split-right {
  width: 50%;
  left: 60%;
  background: radial-gradient(circle,
      rgba(98, 0, 121, 1) 0%,
      rgba(30, 0, 40, 1) 70%,
      rgba(0, 0, 0, 1) 100%);
  overflow-x: hidden;
}

.centered-left, .centered-right {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.centered-left {
  left: 20%;
}

.centered-right {
  left: 40%;
}

.image-full {
  overflow: hidden;
}

.title {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-field {
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #000;
  color: #000;
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

/* Estilos responsivos */
@media (max-width: 768px) {
  .split-left {
    display: none; /* Oculta la sección de la imagen */
  }

  .split-right {
    width: 100%; /* Ocupa todo el ancho */
    left: 0;
    padding: 20px;
  }

  .centered-right {
    position: static;
    transform: none;
    text-align: center;
    margin: 0 auto;
  }

  .title {
    font-size: 1.5rem;
  }

  .input-field {
    font-size: 1rem;
    padding: 0.5rem;
  }

  .submit-btn, .google-btn {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}

  
  </style>
