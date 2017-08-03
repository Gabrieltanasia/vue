<html>
   <head>
      <link rel="stylesheet" href="css/main.css">
      <script src="assets/js/vue.js"></script>
      <script src="assets/js/jquery-3.2.1.min.js"></script>
      <script src="assets/main.js"></script>
      <title>Vue e Sass, só sucesso</title>
   </head>
   <body>
      <div class="container">
         <header id="app">
            <div class="logo" v-bind:title="title">
               {{message}}
            </div>
            <div class="search-area">
               <p v-if="visto">{{conteudo}}</p>
               <input v-model="conteudo">
               <button v-on:click="changeVisto">{{textoBotao}}</button>
            </div>
            <div class="login-ctn">
               <ol>
                  <lista v-for="item in conteudoLista" v-bind:afazer="item" v-bind:key="item.id">
                  </lista>
               </ol>
            </div>
         </header>
         <div id="ajax">
            <form v-on:submit.prevent="onSubmit" method="POST">
               <input v-model="nome" placeholder="Digite seu nome para cadastro">
               <input type="submit">
            </form>
         </div>
      </div>
   </body>
</html>
