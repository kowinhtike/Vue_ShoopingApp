<script setup>
import { ref, onMounted, computed, watch } from "vue";
//assign variable
const todos = ref([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

//to revere array 
const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createAt - a.createAt;
  })
);

//for post submit function
const addTodo = () => {
  if (input_content.value.trim() === "" || input_category.value === null) {
    return;
  }
  //console.log("add Todo")
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createAt: new Date().getTime(),
  });

  input_category.value = "";
  input_content.value = "";
};

// delete method
const removeTodo = (position) => {
  todos.value.splice(position, 1);
};

//watch the value of name
watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

//watch the value of todos list array
watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);

//call and assign the previous data of local storage to eacch variable
onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});

</script>
<template>
  <div class="container">
    <div id="row d-flex">
      <div class="col-sm-8 p-3">
        <!-- greeting section -->
        <section class="greeting">
          <h2 class="title">
            What 's up
            <input
              type="text"
              placeholder="name here"
              v-model="name"
              class="text-primary border-0"
            />
          </h2>
        </section>
        <hr />
        <!-- to do form section -->
        <section class="mb-3 card p-3">
          <h5>Create A New Todo Item</h5>
          <form @submit.prevent="addTodo">
            <div class="mb-3">
              <input
                type="text"
                placeholder="work title here"
                v-model="input_content"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <h5>Choose Category</h5>
              <div class="p-3">
                <input
                  id="business"
                  type="radio"
                  name="category"
                  value="business"
                  v-model="input_category"
                  style="margin-right: 30px"
                />
                <label for="business"> Business </label>
              </div>

              <div class="p-3">
                <input
                  id="personal"
                  type="radio"
                  name="category"
                  value="personal"
                  v-model="input_category"
                  style="margin-right: 30px"
                />
                <label for="personal"> Personal </label>
              </div>
            </div>
            <button class="btn btn-dark" type="submit">Submit</button>
          </form>
        </section>

        <!-- Todo List section -->
        <section class="card p-3">
          <h2>All Todo Lists</h2>
          <div
            class="p-2 d-flex justify-content-between border border-2 border-black mb-3"
            v-for="(todo, index) in todos_asc"
            v-bind:key="index"
          >
            <input type="checkbox" v-model="todo.done" />
            <input
              type="text"
              v-model="todo.content"
              class="form-control w-25 border-0"
            />

            <span class="d-flex gap-3">
              <div>
                <input
                  v-bind:id="'business' + index"
                  type="radio"
                  v-bind:name="'checkbox' + index"
                  value="business"
                  v-model="todo.category"
                  style="margin-right: 10px"
                />
                <label v-bind:for="'business' + index"> Business </label>
              </div>

              <div>
                <input
                  i
                  v-bind:id="'personal' + index"
                  type="radio"
                  v-bind:name="'checkbox' + index"
                  value="personal"
                  v-model="todo.category"
                  style="margin-right: 10px"
                />
                <label v-bind:for="'personal' + index"> Personal </label>
              </div>
            </span>

            <button class="btn btn-danger" v-on:click="removeTodo(index)">
              Delete
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>