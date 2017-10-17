<template>
  <header>
    <nav class="header">
      <svg width="30" height="30" viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg">
        <defs>
        <radialGradient id="exampleGradient">
        <stop offset="10%" stop-color="green"/>
        <stop offset="40%" stop-color="#634134"/>
        <stop offset="80%" stop-color="#002b36"/>
        <stop offset="95%" stop-color="white"/>
        </radialGradient>
        </defs>
        <circle fill="url(#exampleGradient)" cx="15" cy="15" r="14"/>
      </svg>
      <nuxt-link class="button" to="/">
        Home
      </nuxt-link>
      <nuxt-link class="button" to="/blog">
        Blog
      </nuxt-link>
      <nuxt-link class="button" to="/about">
        About
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
.header
{
  list-style: none;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom, white 0%, #002b36 100%);
  font-size: .8em;
}
</style>
