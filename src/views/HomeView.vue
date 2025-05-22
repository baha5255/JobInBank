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
  padding: 32px 16px;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1e293b;
  /* slate-800 */
}

.banks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  align-items: start;
  justify-items: center;
  width: 100%;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .title {
    font-size: 2rem;
    margin-bottom: 28px;
  }

  .banks-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }

  .banks-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
