<template> 
  <div ref="mainContent" class="main-content">
    <div class="container-fluid p-0">
      <div class="row no-gutters ayudaa">
        <!-- Sección izquierda con la imagen -->
        <div class="col-12 col-md-8 izquierda"></div>
        <!-- Sección derecha con contenido -->
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center contenido">
          <div>
            <div class="signin-box">
              <img src="https://i.ibb.co/tJwJ1vM/arcanum-logo-libro.png" alt="" />
              <h1 class="title">Register an account</h1>
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
                  <p v-if="errMsg"> {{ errMsg }} </p>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref(""); // Variable para el mensaje de error
const mainContent = ref(null); // Ref para el contenedor principal
const router = useRouter();
const isFirstLoad = ref(true); // Variable para controlar si es la primera carga

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("Successfully registered");
      router.push('/Feed');
    })
    .catch((error) => {
      console.log(error.code);
      errMsg.value = "Error registering user: " + error.message;
    });
};

// Función para iniciar sesión con Google
const signInWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // El usuario ha iniciado sesión con éxito
      const user = result.user;
      console.log("User signed in with Google:", user);
      router.push('/Feed'); // Redirige a la página de Feed
    })
    .catch((error) => {
      console.log("Error signing in with Google:", error.message);
      errMsg.value = "Error signing in with Google: " + error.message;
    });
};

// Detectar recarga y modificar márgenes
onMounted(() => {
  // Verificar si es la primera carga y recargar solo una vez
  if (isFirstLoad.value) {
    isFirstLoad.value = false; // Marcar que ya se ha cargado una vez
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
      if (mainContent.value) {
        mainContent.value.style.marginLeft = "0";
        mainContent.value.style.marginRight = "0";
      }
    }
  }
});
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
  background-color: #fa0000;
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
    background-color: rgb(200, 145, 252);
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
    background-color: rgb(0, 0, 0);
  }
  
  .google-btn {
    background-color: #000000;
    color: #000000;
    border: 1px solid #ddd;
  }
  
  .google-btn:hover {
    background-color: #f5f5f5;
  }
  </style>
