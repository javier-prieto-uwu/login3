<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <!-- Logo -->
        <img
          src="https://i.ibb.co/tZVHKMY/logopeque.png"
          alt="Logo"
          class="navbar-logo d-none d-md-block"
        />
        <!-- Botón de despliegue -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Menú desplegable -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sign-in" class="nav-link" active-class="active">Sign In</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <button class="btn btn-link nav-link" @click="handleSignOut">Sign Out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="footer bg-dark text-white mt-auto py-4">
      <div class="container text-center">
        <p>&copy; <span id="year"></span> TI31 | All rights reserved.</p>
        <div class="social-icons">
          <a href="#" class="text-white me-3"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar */
.navbar-logo {
  width: 120px;
}
.d-none {
  display: none !important;
}
.d-md-block {
  display: block !important;
}

/* Main Content */
.main-content {
  padding-top: 80px; /* Adjust for fixed navbar */
  min-height: calc(100vh - 160px); /* Adjust for footer height */
}

/* Footer */
.footer {
  background-color: #343a40;
  color: #fff;
  text-align: center;
}
.footer .social-icons a {
  font-size: 1.2rem;
  margin: 0 0.5rem;
  transition: color 0.3s;
}
.footer .social-icons a:hover {
  color: #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-logo {
    display: none; /* Ocultar el logo en pantallas pequeñas */
  }
  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }
}
</style>
