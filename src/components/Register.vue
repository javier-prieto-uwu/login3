<template>
  <div class="container-fluid p-0 m-0">
    <div class="row no-gutters">
      <!-- Columna izquierda con imagen -->
      <div class="col-6 left-content">
        <img
          src="https://i.ibb.co/H79PRsw/Betterimage-ai-1733016196294.jpg"
          alt="Imagen de ejemplo"
          class="image-full"
        />
      </div>

      <!-- Columna derecha con contenido de registro -->
      <div class="col-6 right-content d-flex align-items-center justify-content-center">
        <div class="signin-box">
          <img src="https://i.ibb.co/tJwJ1vM/arcanum-logo-libro.png" alt="Logo" class="logo">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("Successfully registered");
      router.push("/Feed");
    })
    .catch((error) => {
      console.error("Error during registration:", error.message);
    });
};
</script>

<style scoped>

body {
  background: radial-gradient(
    circle,
    rgba(98, 0, 121, 1) 0%,
    rgba(30, 0, 40, 1) 70%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  color: white !important;
  /* Forzar texto blanco */
}

/* General container settings */
.container-fluid {
  width: 100%;
  height: 100vh;
}

/* Column for the left side (image) */
.left-content {
  height: 100vh;
  overflow: hidden;
}

.image-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Column for the right side (form) */
.right-content {
  background-color: black;
}

.signin-box {
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.logo {
  max-width: 100px;
  margin-bottom: 1.5rem;
}

.title {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #333;
  color: white;
}

.input-field:focus {
  border-color: #4a90e2;
  outline: none;
}

.button-group {
  margin-top: 1.5rem;
}

.submit-btn {
  background-color: purple;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .left-content {
    display: none;
  }

  .right-content {
    width: 100%;
  }
}
</style>
