<template>
    <div class="contact-container">
      <h1 class="contact-title">Contáctanos</h1>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Tu nombre"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            placeholder="Tu teléfono"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Tu correo electrónico"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Escribe tu mensaje"
            rows="5"
            required
          ></textarea>
        </div>
  
        <button type="submit" class="submit-btn">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar a un backend
        console.log("Formulario enviado:", this.form);
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
        // Limpiar el formulario
        this.form = { name: '', phone: '', email: '', message: '' };
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .contact-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .submit-btn {
    padding: 10px 15px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 600px) {
    .contact-container {
      padding: 15px;
    }
    .contact-title {
      font-size: 1.5rem;
    }
    .submit-btn {
      font-size: 1rem;
    }
  }
  </style>
  