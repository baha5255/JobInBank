<template>
   <div class="group cursor-pointer mt-5 min-h-[150px] hover:shadow-md  transition duration-300 min-w-[300px] bg-slate-200 rounded-md flex flex-col justify-between p-5 items-center" @click="$router.push(`/departments/${bank.id}`)">
  <img :src="bank.logo" :alt="bank.name" />
  <h3 class="text-2xl font-semibold">
    {{ bank.name }}
  </h3>
</div>

  </template>
  
  <script>
  export default {
    props: {
      bank: Object,
    },
  };
  </script>
  
  <style scoped>
  .bank-card {
    border: 1px solid #ddd;
    padding: 16px;
    cursor: pointer;
    border-radius: 12px;
    transition: 0.3s ease;
    text-align: center;
  }
  .bank-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .bank-card img {
    max-width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
  </style>