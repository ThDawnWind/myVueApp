<template>
  <div class="about-page">
    <h1>О нас</h1>
    <p class="intro">
      Мы — команда увлеченных разработчиков, создающих современные веб-приложения с использованием Vue.js.
      Наша цель — делать интерфейсы удобными, быстрыми и красивыми.
      Мы любим чистый код, современные технологии и всегда стремимся к новым знаниям.
    </p>

    <section class="team">
      <h2>Наша команда</h2>
      <div class="team-cards">
        <div class="card">
          <div class="avatar">АБ</div>
          <h3>Аюб Баширов</h3>
          <p>Frontend Developer</p>
        </div>
        <div class="card">
          <div class="avatar">МИ</div>
          <h3>Мария Иванова</h3>
          <p>UI/UX Designer</p>
        </div>
        <div class="card">
          <div class="avatar">ИП</div>
          <h3>Иван Петров</h3>
          <p>Backend Developer</p>
        </div>
      </div>
    </section>

    <section class="mission">
      <h2>Наша миссия</h2>
      <p>
        Создавать качественные, удобные и современные веб-приложения, которые помогают людям решать задачи
        быстрее и эффективнее. Мы стремимся к инновациям, совершенству и высокой удовлетворенности наших клиентов.
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 950px;
  margin: 20px auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  color: #4e42b9;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.intro {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 40px;
  color: #ffffff;
}

h2 {
  color: #4e42b9;
  margin-bottom: 20px;
  font-size: 1.8rem;
  text-align: center;
}

.team-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: #f5f5ff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.avatar {
  width: 60px;
  height: 60px;
  background-color: #4e42b9;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
}

.card h3 {
  margin: 5px 0;
  font-size: 1.2rem;
}

.card p {
  font-size: 0.95rem;
  color: #666;
}

.mission {
  background-color: #eef0ff;
  padding: 25px 20px;
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.mission p {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}
</style>
