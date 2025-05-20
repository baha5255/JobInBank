<template>
    <div class="about-container">
      <section class="intro">
        <h1>О проекте JobInBank</h1>
        <p>
          JobInBank — это интерактивный портал, созданный для прозрачного и удобного ознакомления с вакансиями, структурами и требованиями банков Таджикистана.
        </p>
      </section>
  
      <section class="features">
        <h2>Возможности проекта</h2>
        <ul>
      <li>🔍 Просмотр структуры банков: департаменты, отделы, должности</li>
      <li>📄 Просмотр требований к каждой должности</li>
      <li>🏦 Реальные банки Таджикистана с логотипами</li>
      <li>🎨 Современный адаптивный дизайн</li>      
        </ul>
      </section>
  
      <section class="tech">
        <h2>Технологии</h2>
        <p>Проект создан с использованием Vue.js, Vue Router, и современной адаптивной вёрстки.</p>
      </section>
  
      <section class="contacts">
        <h2>Контакты</h2>
        <p>Разработчик: Баховаддинзода Бахриддин</p>
        <p>Email: baha.deve@gmail.com</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .intro h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .intro p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .features ul {
    list-style: none;
    padding-left: 0;
  }
  
  .features li {
    margin: 0.5rem 0;
    font-size: 1.05rem;
  }
  
  section {
    margin-bottom: 2.5rem;
  }
  
  .contacts p {
    margin: 0.3rem 0;
  }
  </style>
  