<script setup>
import { useLojaStore } from '@/stores/loja'

const loja = useLojaStore();
const produtos = loja.produtos;


const addAoCarrinho = (produto) => {
  //console.log("Depois da passagem : " + produto.price, produto.title)
  produto.quantity = 1;
  loja.addAoCarrinho(produto);
};

const estaNoCarrinho = (produto) => {
  return loja.produtosNoCarrinho.find(item => item.id === produto.id)
};

const removerDoCarrinho = (produtoId) => {
  loja.removerDoCarrinho(produtoId)
};
</script>

<template>
  <main>
    <div class="produtos">
        <!-- {{ loja.produtosNoCarrinho.length }} -->
      <div
        v-for="produto in produtos" :key="produto.id"
        class="produto">
        <div class="image-produto" :style="{ backgroundImage: 'url('+ produto.image +')' }"></div>
        <h4>{{ produto.title }}</h4>
        <p class="preco">R$ {{ produto.price.toFixed(2) }}</p>
        <button v-if="!estaNoCarrinho(produto)"  @click="addAoCarrinho(produto)">Adicionar ao Carrinho</button>
        <button v-else class="remover" @click="removerDoCarrinho(produto.id)">Remover do Carrinho</button>
      </div>

    </div>
  </main>
</template>

<style lang="scss">

.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-top: 80px;
  text-align: center;

  .produto {
    flex: 0 0 30%;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    padding: 16px;
    margin: 8px;
    height: 360px;

    &.noCarrinho {
      border: 1px solid #007bff;
    }

    .image-produto {
      margin: 20px auto;
      width: 169px;
      height: 140px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    h4 {
      margin: 22px auto;
      font-size: 12px;
      max-width: 80%;
    }

    .preco {
      font-size: 20px;
      font-weight: bold;
    }

    button {
      color: #fff;
      background-color: #007bff;
      border: 1px solid #007bff;
      border-radius: 100px;
      padding: 8px 16px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &.remover {
        background-color: transparent;
        border: none;
        color: black;
        text-decoration: underline;
      }
    }

    @media only screen and (max-width: 769px) {
      flex: 0 0 40%;
    }
  
    @media only screen and (max-width: 640px) {
      flex: 0 0 90%;
    }
  }
}
</style>
