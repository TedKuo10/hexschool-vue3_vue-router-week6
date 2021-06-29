<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="/admin">後台</a> -->
      <router-link class="navbar-brand" to="/admin">後台</router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
