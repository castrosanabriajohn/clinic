<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/services">Services</router-link>
        </li>
        <li>
          <router-link to="/professionals">Our Team</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  border-radius: 0 0 1rem 1rem;
  background-image: linear-gradient(
    135deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 69%,
    rgb(32, 167, 172) 89%
  ) !important;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0;
}

a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
}

a:hover,
a:active,
a.active {
  color: floralwhite;
  border-color: floralwhite;
  background-color: #4388ef;
}
</style>
