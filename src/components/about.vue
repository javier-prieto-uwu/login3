<template>
    <div class="hero">
      <div class="hero-content">
        <h1 class="title">Arcanum</h1>
        <p class="description">
          Somos un gran equipo cuya meta es poder unir más a los estudiantes de las universidades para crear más oportunidades para ellos, 
          subiendo el nivel de satisfacción en las escuelas. 
          <br /><br />
          En Arcanum creemos que cada estudiante tiene el potencial de transformar su entorno. Nuestra misión es fomentar la colaboración, el aprendizaje, 
          y la creación de comunidades que impulsen el desarrollo académico y personal.
        </p>
      </div>
      <div class="photo-gallery">

        <div class="photo-item"><img src="https://i.ibb.co/MCfwf0v/3.png" alt="Foto 1" /></div>
        <div class="photo-item"><img src="https://i.ibb.co/FWYGJg4/4.png" alt="Foto 2" /></div>
        <div class="photo-item"><img src="https://i.ibb.co/72LtcmB/2.png" alt="Foto 3" /></div>
        <div class="photo-item"><img src="https://i.ibb.co/tQfLn9x/1.png" alt="Foto 4" /></div>
        <div class="photo-item"><img src="https://i.ibb.co/jhN2st2/5.png" alt="Foto 5" /></div>
        
      </div>
    </div>
  </template>
  
  <style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    color: #ffffff;
    text-align: center;
  }
  
  .hero-content {
    max-width: 800px;
    margin-bottom: 40px;
  }
  
  .title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1.25rem;
    line-height: 1.6;
  }
  
  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    width: 100%;
    max-width: 1000px;
  }
  
  .photo-item {
    overflow: hidden;
    border-radius: 8px;
  }
  
  .photo-item img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }
  
    .description {
      font-size: 1rem;
    }
  }
  </style>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  