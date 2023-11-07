<script setup>
import { useLojaStore } from '@/stores/loja';

const loja = useLojaStore();
const produtosNoCarrinho = loja.produtosNoCarrinho; //função para calcular o total

const removerDoCarrinho = (produtoId) => {
  console.log(produtoId)
  loja.removerDoCarrinho(produtoId);
};
 
const totalDaCompra = () => {
  return produtosNoCarrinho.reduce((total, produto) => total + (produto.price * produto.quantity), 0).toFixed(2);
}; 
</script>

<template>
  <div class="carrinho">
  
   <template v-if="loja.produtosNoCarrinho.length">
       <div class="itens">
         <div v-for="(produto, index) in loja.produtosNoCarrinho" :key="index" class="item">
           <div class="remover" @click="removerDoCarrinho(produto.id); produto.quantity=0">Remover Produto</div>
           <div class="img-produto"><img :src="produto.image" alt=""></div>
           <div class="descricao">{{ produto.title }}</div>
           <div class="preco">
             <span class="area-quantidade">
               <button :disabled="produto.quantity<=1" @click="produto.quantity--">-</button>
               <span class="quantidade">{{ produto.quantity }}</span>
               <button @click="produto.quantity++" >+</button>
             </span>
             <span class="total-item">R$ {{ (produto.price * produto.quantity).toFixed(2) }}</span>
           </div>
         </div>
       </div>
       <div class="total-pedido">Total do pedido: R$ {{ totalDaCompra() }}</div>
     </template>
     <template v-else>
       <h4>Sem Produtos no Carrinho.</h4>
     </template>  
   </div>
</template>

<style lang="scss">

.carrinho {
  padding: 60px 0;

  .itens {
    max-width: 800px;
    margin: auto;

    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remover {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }
      
      .img-produto {
        img {
          max-width: 80px;
        }
      }
      
      .title {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;
      }
      
      .preco {
        .area-quantidade {
          margin: 8px auto;
          height: 14px;
        
          button {
            width: 16px;
            height: 16px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .quantidade {
            margin: 0 4px;
          }
        
        }

        .total-item {
          font-size: 16px;
          margin-left: 8px;
          text-align: right;
          vertical-align: middle;
        }
      }
    }
  }
  .total-pedido {
    font-size: 24px;
    font-weight: bold;
    text-align: right;
    margin-top: 8px;
    margin-right: 50px;
  }
}

</style>
