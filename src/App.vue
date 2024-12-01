<template>
  <div class="main-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
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
            <li v-if="isLoggedIn" class="nav-item">
              <button @click="handleSignOut" class="nav-link btn btn-link">Sign Out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="content">
      <router-view></router-view>
    </main>

    <footer class="footer mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <h5>Sobre nosotros:</h5>
            <p>
              Somos un equipo con nuestra meta de poder unir más a los estudiantes de las universidades para crear más
              oportunidades para ellos, subiendo el nivel de satisfacción en las escuelas.
            </p>
          </div>
          <div class="col-md-4 mb-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Follow us</h5>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f social-icon"></i></a>
              <a href="#"><i class="fab fa-twitter social-icon"></i></a>
              <a href="#"><i class="fab fa-instagram social-icon"></i></a>
              <a href="#"><i class="fab fa-linkedin-in social-icon"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-3 bg-dark text-white">
        <p>&copy; <span id="year"></span> TI31 All rights reserved.</p>
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
const auth = getAuth();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const handleSignOut = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #343a40;
}

.nav-link {
  color: white;
}

.nav-link:hover,
.nav-link.active {
  color: #3498db;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  margin-top: 70px;
}

.footer {
  background-color: #343a40;
  color: white;
}

.footer a {
  color: #ffffff;
  text-decoration: none;
}

.footer a:hover {
  color: #3498db;
}
</style>
