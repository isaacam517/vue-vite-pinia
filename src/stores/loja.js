// stores/counter.js
import axios from 'axios'
import { defineStore } from 'pinia'

export const useLojaStore = defineStore('loja', {
  state: () => {
    return { 
      produtos : [],
      produtosNoCarrinho: []
    }
  },
  
  actions: {
    carregarProdutos() {
      axios.get('https://fakestoreapi.com/products').then(response => {
        this.produtos = response.data;
      })
    },

    addAoCarrinho(produto) {
    // console.log("Depois da passagem : " + produto.price, produto.title)
      this.produtosNoCarrinho.push(produto);
    },

    removerDoCarrinho(produtoId) {
      if (confirm('Tem certeza que deseja remover o item do carrinho?')) {
        this.produtosNoCarrinho = this.produtosNoCarrinho.filter(item => produtoId != item.id);
      }
    }
  },
})