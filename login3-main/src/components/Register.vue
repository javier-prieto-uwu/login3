<template>

<div class="main-content">

    
<div class="container-fluid p-0">
    <div class="row no-gutters ayudaa">
      <!-- Sección izquierda con la imagen -->
      <div class="col-12 col-md-8 izquierda"></div>
      <!-- Sección derecha con contenido -->
      <div class="col-12 col-md-4 d-flex align-items-center justify-content-center contenido">
        <div>


          <div class="signin-box">
        <img src="https://i.ibb.co/tJwJ1vM/arcanum-logo-libro.png" alt="">
        <h1 class="title">Register an account.</h1>
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
          <button @click="register" class="submit-btn">Submit.</button>
          <button @click="signInWithGoogle" class="google-btn">
            Sign in with Google.
          </button>
        </div>
      </div>

      
        </div>
      </div>
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

// Esto redirige al inicio (ruta de login o signin) cuando se recarga la página
if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
  // Redirige a la página de inicio de sesión
  window.location.href = '/';
}


</script>



<style scoped>

.main-content {
  color: white;
  padding: 50px;
  min-height: 100vh;
  margin-top: -75px;
  margin-left: -200PX;
  margin-right: 200px;
}

.izquierda {
  background-image: url('https://i.ibb.co/H79PRsw/Betterimage-ai-1733016196294.jpg'); /* Imagen de ejemplo */
  background-size: cover;  /* La imagen cubre todo el área de la columna */
  background-position: center;  /* Centra la imagen */
  height: 100vh; /* La imagen ocupa toda la altura de la ventana */
}

@media (max-width: 768px) {
  .izquierda {
    display: none; /* Oculta la imagen */
  }
}

.contenido{
  background-color: #000000;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f0f2f5; /* O el color de fondo que desees */
}

.signin-container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.signin-box {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.signin-box img {
  max-width: 150px;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}


.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
}

.google-btn {
  width: 100%;
  padding: 10px;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 4px;
}

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
    background-color: wheat;
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
