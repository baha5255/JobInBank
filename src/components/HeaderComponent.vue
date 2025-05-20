<template>
  <header class="header min-h-[80px] flex items-center">
    <div class="container">
      <div class="logo">
        <img src="/public/logoJobInBank.png" class="min-h-[70px] min-w-[70px]" alt="JobInBank Logo" />
        <span>JobInBank</span>
      </div>
      <nav :class="{ 'nav-open': isMenuOpen }">
        <ul>
          <li><router-link to="/">{{ $t('headers.headerTitleHome') }}</router-link></li>
          <li><router-link to="/about">{{ $t('headers.headerTitleAbout') }}</router-link></li>
          <li><router-link to="/contacts">{{ $t('headers.headerTitleContacts') }}</router-link></li>
        </ul>
        <div class="lang-select-wrapper">
          <select v-model="$i18n.locale" class="language-switcher">
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="tj">Тоҷикӣ</option>
          </select>
        </div>

      </nav>
      <div class="menu-toggle" @click="toggleMenu">☰</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
      lang: 'ru',
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>


<style scoped>
.header {
  background-color: #1a1a1a;
  color: #fff;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.logo span {
  font-size: 20px;
  font-weight: bold;
}

nav {
  display: flex;
  align-items: center;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #00bcd4;
}



.menu-toggle {
  display: none;
  font-size: 26px;
  cursor: pointer;
}


.language-switcher {
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  color: #140909;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
}

.language-switcher:hover {
  border-color: #007bff;
  background-color: #f0f8ff;
}

.language-switcher:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
}



@media (prefers-color-scheme: dark) {
  .language-switcher {
    background-color: #1f2937;
    color: #f9fafb;
    border-color: #444;
  }

  .language-switcher:hover {
    background-color: #374151;
    border-color: #60a5fa;
  }
}
</style>
