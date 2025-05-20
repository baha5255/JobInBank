<template>
  <footer>
    <div class="footer-container">
      <!-- Логотип и название проекта -->
      <div class="logo-container">
        <img src="/logoJobInBank.png" alt="Project Logo" class="footer-logo">
        <h3 class="footer-title">JobInBank</h3>
      </div>

      <!-- Контактные данные -->
      <div class="contact-container">
        <h4>Контакты</h4>
        <ul>
          <li><a href="mailto:contact@jobinbank.tj">contact@jobinbank.tj</a></li>
          <li><a href="tel:+992925555255">+992 92 555 5255</a></li>
          <li><a href="https://www.google.com/maps/place/JobInBank+Address">Адрес: Г. Худжанд</a></li>
        </ul>
      </div>

      <!-- Навигация -->
      <div class="navigation-container">
        <h4>Навигация</h4>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </div>

      <!-- Социальные сети -->
      <div class="social-container">
        <h4>Социальные сети</h4>
        <ul class="social-links">
          <li><a href="https://www.facebook.com/JobInBank" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
          </li>
          <li><a href="https://www.instagram.com/JobInBank" target="_blank"><i class="fab fa-instagram"></i>
              Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/JobInBank" target="_blank"><i class="fab fa-linkedin"></i>
              LinkedIn</a></li>
        </ul>
      </div>

      <!-- Юридическая информация -->
      <div class="legal-container">
        <p>&copy; 2025 JobInBank. Все права защищены.</p>
        <p>Политика конфиденциальности | Условия использования</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
footer {
  background-color: #2d2d2d;
  color: #fff;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;
  margin-top: 40px;
  text-align: left;
}

.footer-container h3,
.footer-container h4 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}



.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  width: 100px;
  margin-bottom: 10px;
}

.footer-title {
  margin: 0;
}

.footer-title {
  font-size: 1.8rem;
  font-weight: bold;
}

.contact-container,
.navigation-container,
.social-container,
.legal-container {
  display: flex;
  flex-direction: column;
}

.social-links {
  list-style: none;
  padding: 0;
}

.social-links li {
  margin-bottom: 10px;
}

.social-links a {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #00aaff;
}

.social-links i {
  margin-right: 10px;
}

.legal-container {
  grid-column: span 4;
  text-align: center;
  font-size: 0.9rem;
}

.legal-container p {
  margin: 5px 0;
}

.legal-container a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-container a:hover {
  color: #00aaff;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .legal-container {
    grid-column: span 2;
  }
}

@media (max-width: 480px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>
