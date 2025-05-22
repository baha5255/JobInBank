<template>
  <div class="home">
    <h1 class="title">Банки Таджикистана</h1>
    <div class="banks-grid">
      <BankCard v-for="bank in banks" :key="bank.id" :bank="bank" />
    </div>
  </div>
</template>

<script>
import banks from '../data/banks.js';
import BankCard from '@/components/BankCard.vue';

export default {
  components: { BankCard },
  data() {
    return {
      banks,
    };
  },
};
</script>

<style scoped>
.home {
  padding: 32px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 32px;
}

.banks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  justify-items: center;
}

/* Адаптивность */
@media (max-width: 768px) {
  .home {
    padding: 16px;
  }

  .title {
    font-size: 1.75rem;
    margin-bottom: 24px;
  }

  .banks-grid {
    gap: 16px;
  }
}
</style>
