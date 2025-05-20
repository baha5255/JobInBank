<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Требования к должности</h1>
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">{{ position.name }}</h2>
      <ul class="list-disc list-inside space-y-2">
        <li v-for="req in position.requirements" :key="req">{{ req }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import banks from '../data/banks.js';

export default {
  name: 'RequirementsView',
  data() {
    const positionId = parseInt(this.$route.params.positionId);
    const bank = banks.find(bank =>
      bank.departments.some(dep =>
        dep.units.some(unit => unit.positions.some(pos => pos.id === positionId))
      )
    );
    const position = bank.departments
      .flatMap(dep => dep.units)
      .flatMap(unit => unit.positions)
      .find(pos => pos.id === positionId);
    return { position };
  },
};
</script>
<style scoped>
section {
  background-color: white;
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  max-width: 48rem;
  margin: 3rem auto;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.08);
}
h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 2rem;
}
ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #4b5563;
}
li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}
</style>
