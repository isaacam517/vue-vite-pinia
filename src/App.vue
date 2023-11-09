<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useLojaStore } from '@/stores/loja'

const loja = useLojaStore();

loja.carregarProdutos();
//loja.carregarProdutosLocalStorage();

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Loja</RouterLink> |
        <RouterLink to="/carrinho">Carrinho ( {{ loja.produtosNoCarrinho.length }} )</RouterLink>
      </nav>
  </header>

  <div v-if="loja.produtos.length > 0">
      <RouterView />
  </div>
  <div v-else>
    <p>Carregando produtos...</p>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

nav {
  background-color: rgb(37,37,37);
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: aliceblue;

  a {
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
  @media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
}
</style>
