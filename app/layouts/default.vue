<template>
  <div>
    
    <nuxt />
  </div>
</template>

<script>
  export default {
    name: "default"
  };
</script>

<style>
/* color palette: https://coolors.co/9fe6fd-353535-e0f4a8-d8f17c-00ff7f */

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  
  background-color: #9FE6FD;
  color: #353535;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
</style>
