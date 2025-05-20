<template>
  <div class="max-w-5xl mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Должности отдела {{ unit.name }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link v-for="position in unit.positions" :key="position.id" :to="`/requirements/${position.id}`"
        class="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition">
        <h2 class="text-lg font-semibold">{{ position.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import banks from '../data/banks.js';

export default {
  name: 'PositionDetailView',
  data() {
    const { departmentId, unitId } = this.$route.params;
    const bank = banks.find(b =>
      b.departments.some(d => d.id === parseInt(departmentId))
    );
    const department = bank.departments.find(d => d.id === parseInt(departmentId));
    const unit = department.units.find(u => u.id === parseInt(unitId));
    return { unit };
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
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.03);
  text-decoration: none;
  color: #111827;
}

a:hover {
  transform: scale(1.03);
  border-color: #3b82f6;
  box-shadow: 0 12px 20px rgba(59, 130, 246, 0.1);
}

h2 {
  font-size: 1.125rem;
  font-weight: 500;
}
</style>
