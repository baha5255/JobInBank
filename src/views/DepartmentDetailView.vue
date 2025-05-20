<template>
  <div class="max-w-5xl mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Отделы департамента {{ department.name }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="unit in department.units"
        :key="unit.id"
        :to="`/positions/${department.id}/${unit.id}`"
        class="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition"
      >
        <h2 class="text-lg font-semibold">{{ unit.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import banks from '../data/banks.js';

export default {
  name: 'DepartmentDetailView',
  data() {
    const { bankId, departmentId } = this.$route.params;
    const bank = banks.find(b => b.id === parseInt(bankId));
    const department = bank.departments.find(d => d.id === parseInt(departmentId));
    return { department };
  },
};
</script>
<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2.5rem;
}
a {
  display: block;
  background: linear-gradient(135deg, #e0f2fe, #ffffff);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  color: #111827;
}
a:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
