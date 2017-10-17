<template>
  <div>
    <my-header/>
      <nuxt/>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 0px;
  text-align: center;
  padding: 43.6px 0px 0px 0px;
}

  .button, .button:visited
  {
    display: inline-block;
    color: white;
    letter-spacing: 1px;
    background-color: #073642;
    border-radius: 20px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 1em;
    box-shadow: 0px 1px 4px 2px #073642;
    margin: 2px;
  }

  .button:hover, .button:focus
  {
    color: white;
    background-color: hsla(190, 100%, 45%, 1);
    transition: background-color .5s ease-out;
    box-shadow: 0px 1px 4px 2px #073642;
  }

  .logobutton, .logobutton:visited
  {
    display: inline-block;
    letter-spacing: 1px;
    background-color: transparent;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0px;
  }
  .logobutton:hover, .logobutton:focus
  {
  }

  .title
  {
    color: white;
    text-shadow: 2px 2px black;
    font-weight: 300;
    font-size: 1.2em;
    margin: .5em 0;
  }
</style>
