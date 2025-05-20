<template>
  <div class="max-w-5xl mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Департаменты банка {{ bank.name }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="department in bank.departments"
        :key="department.id"
        :to="`/departments/${bank.id}/${department.id}`"
        class="min-h-[150px] min-w-[300px] flex justify-center items-center p-4 bg-slate-200 hover:border rounded-lg transition"
      >
        <h2 class="text-2xl text-center font-semibold">{{ department.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import banks from '../data/banks.js';

export default {
  name: 'DepartmentsView',
  data() {
    const bankId = parseInt(this.$route.params.bankId);
    const bank = banks.find(bank => bank.id === bankId);
    return { bank };
  },
};
</script>
<style scoped>

</style>
