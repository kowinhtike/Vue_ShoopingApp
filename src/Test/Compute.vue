<template>
    <div>
      <input v-model="firstName" placeholder="Enter your first name">
      <input v-model="lastName" placeholder="Enter your last name">
      <p>Full name: {{ fullName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
      };
    },
    computed: {
      // A computed property for full name
      fullName() {
        return `${this.firstName} ${this.lastName}`.trim();
      }
    }
  }
  </script>
  