<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <div class="error-icon">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 2V22" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.22229 7H19.7777C20.098 7 20.3973 6.84255 20.5943 6.57087L12 2L3.40571 6.57087C3.20271 6.84255 3.002 7 3.22229 7H4.22229Z" fill="#ffffff" fill-opacity="0.1"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#ffffff" fill-opacity="0.1"/>
          <circle cx="12" cy="12" r="3" stroke="#ffffff" stroke-width="2"/>
          <circle cx="12" cy="12" r="1" fill="#ffffff"/>
        </svg>
      </div>

      <h1 class="error-title">404</h1>
      <h2 class="error-subtitle">Страница не найдена</h2>

      <p class="error-description">
        К сожалению, запрашиваемая страница не существует.
        Возможно, вы перешли по неправильной ссылке или страница была удалена.
      </p>

      <div class="error-actions">
        <router-link to="/" class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Вернуться на главную</span>
        </router-link>

        <button @click="goBack" class="btn btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Назад</span>
        </button>
      </div>

      <div class="error-footer">
        <p>Если вы считаете, что это ошибка, свяжитесь с нами</p>
        <a href="mailto:support@example.com" class="contact-link">support@example.com</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

  const router = useRouter()
 const goBack = (): void => {
  window.history.length > 2 ? router.go(-1) : router.push('/')
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.not-found-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.not-found-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 60px 50px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  z-index: 1;
}

.error-icon {
  margin-bottom: 30px;
  opacity: 0.9;
}

.error-icon svg {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.error-title {
  font-size: 96px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 10px 0;
  letter-spacing: -2px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  line-height: 1;
}

.error-subtitle {
  font-size: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.error-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 40px 0;
  font-weight: 400;
}

.error-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  flex-shrink: 0;
}

.error-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.error-footer p {
  margin: 0 0 8px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.contact-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
}

</style>
