<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Shoping App </a>
      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              :class="['nav-link', currentPath === '#/' ? 'active' : '']"
              aria-current="page"
              href="#/"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="['nav-link', currentPath === '#/product' ? 'active' : '']"
              href="#/product"
              >Products</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/cart"
              ><i class="fas fa-cart-shopping"></i>
              <small class="badge badge-danger" style="font-size: 8px">
                {{ cartList.length }}
              </small>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ["cartList"],
  props: {
    currentPath: String,
  },
};
</script>