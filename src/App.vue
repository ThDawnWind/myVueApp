<template>
  <div class="app-container">
    <nav>
      <div class="left">
        <RouterLink to="/">To-Do</RouterLink>
        <RouterLink to="/weather">Погода</RouterLink>
      </div>
      <div class="right">
        <RouterLink to="/about">О нас</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

    const route = useRoute()

    const backgrounds: Record<string, string> = {
      '/': '#4e42b9',
      '/weather': '#0d1b2a'
    }

    watch(
      () => route.path,
      (path) => {
        document.body.style.backgroundColor = backgrounds[path] || '#ffffff'
      },
      { immediate: true }
    )
</script>

<style scoped>

app-container {
  width: 100vh;
  height: 100vh;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #000000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav .left,
nav .right {
  display: flex;
  gap: 20px;
}

nav a {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  padding-bottom: 4px;
}

nav a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: 0;
  background: #ffd700;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  color: #ffd700;
}

nav a.router-link-active {
  color: #ffd700;
  font-weight: 700;
}

nav a.router-link-active::after {
  width: 100%;
}
</style>
