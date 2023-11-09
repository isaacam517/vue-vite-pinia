// stores/counter.js
import axios from 'axios'
import { defineStore } from 'pinia'

export const useLojaStore = defineStore('loja', {
  state: () => {
    return { 
      produtos : [],
      produtosNoCarrinho: [],
    }
  },
  
  actions: {

    carregarProdutos() {
      axios.get('https://fakestoreapi.com/products').then(response => {
        this.produtos = response.data;
      })
    },

    // carregarProdutosLocalStorage() {
    //   if (localStorage.getItem("produtosNoCarrinho")) {
    //     this.produtosNoCarrinho = JSON.parse(localStorage.getItem("produtosNoCarrinho"));
    //   }
    // },
 

    addAoCarrinho(produto) {
    // console.log("Depois da passagem : " + produto.price, produto.title)
      this.produtosNoCarrinho.push(produto);

     // Salvar produtosNoCarrinho no localStorage  
     // localStorage.setItem('produtosNoCarrinho', JSON.stringify(this.produtosNoCarrinho));
    },

    removerDoCarrinho(produtoId) {
      if (confirm('Tem certeza que deseja remover o item do carrinho?')) {
        this.produtosNoCarrinho = this.produtosNoCarrinho.filter(item => produtoId != item.id);

         // remover produtosNoCarrinho no localStorage  
     // localStorage.setItem('produtosNoCarrinho', JSON.stringify(this.produtosNoCarrinho.filter(item => produtoId != item.id)));
      }
    }
  },
})