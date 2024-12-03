<template>
  <div class="main-container">
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="/">Arcanum</a>

        <!-- Botón hamburguesa -->
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-controls="navbarNav"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú de navegación -->
        <div
          class="collapse navbar-collapse"
          :class="{ show: isMenuOpen }"
          id="navbarNav"
        >

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sign-in" class="nav-link" active-class="active">Sign In</router-link>
            </li>
            <li> <router-link to="/about" class="nav-link" active-class="active">Nosotros</router-link></li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" active-class="active">Contacto</router-link>
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

    <!-- Contenido principal -->
    <div class="main-content">
      <router-view></router-view>
    </div>


    <!-- Pie de página -->
    <footer class="footer mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <h5>Sobre nosotros:</h5>
            <p>
              Somos un gran equipo cuya meta es poder unir más a los estudiantes de las universidades para crear más
              oportunidades para ellos, subiendo el nivel de satisfacción en las escuelas.
            </p>
          </div>
          <div class="col-md-4 mb-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">nosotros</router-link></li>
              <li><router-link to="/">Services</router-link></li>
              <li><router-link to="https://api.whatsapp.com/send?phone=5219841288446&text=Arcanum">Whatsapp</router-link></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Follow us</h5>
            <div class="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61569635303347"><i class="fab fa-facebook-f social-icon"></i></a>
              <a href="https://x.com/ArcanumForum"><i class="fab fa-twitter social-icon"></i></a>
              <a href="https://www.instagram.com/arcanum_forum/?utm_source=ig_web_button_share_sheet"><i class="fab fa-instagram social-icon"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-3 text-white">
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
const isMenuOpen = ref(false); // Estado para controlar la visibilidad del menú móvil

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // Alterna la visibilidad del menú
};

const handleSignOut = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
</script>

<style scoped>

.custom-navbar {
  background: transparent;
  border: none;
  box-shadow: none;
}

.main-container{
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
}

.navbar-toggler-icon {
  filter: invert(0);
}

.navbar-nav .nav-link {
  margin-right: 15px;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #f39c12;
}

/* Menú móvil */
.navbar-nav {
  flex-direction: column;
  padding: 10px;
  background-color: transparent;
  width: 100%;
}

.navbar-nav .nav-link {
  border-bottom: 1px solid #6c3483;
}


.navbar-nav .nav-link:last-child {
  border-bottom: none;
}

/* Contenido principal */
.main-content {
  color: white;
  padding: 50px;
  min-height: 100vh;
  margin-top: 0;
}

/* Estilos para el pie de página */
.footer {
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
