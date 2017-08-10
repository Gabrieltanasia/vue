window.onload = function(){



   // Vue.component('lista',{
   //    props: ['afazer'],
   //    template: '<li>{{afazer.texto}}</li>'
   // });
   //
   //
   // var app = new Vue({
   //    el: "#app",
   //    data: {
   //       message: "Escrito com o Vue",
   //       title: "Carregou isso aqui as "+ new Date(),
   //       visto : true,
   //       textoBotao: "Fazer sumir",
   //       conteudo : "Se apertar no botão isso vai desaparecer",
   //       conteudoLista : [
   //          {id:0,texto:"Matar aula"},
   //          {id:1,texto:"Estudar essas tecnologia doida"},
   //          {id:2,texto:"Ficar rico"}
   //       ]
   //    },
   //    methods:{
   //       changeVisto : function (){
   //          this.visto = !this.visto
   //          this.textoBotao = (this.visto) ? "Fazer sumir" : "Sdds"
   //       }
   //    }
   //
   // });

   new Vue({
      el: "#ajax",
      data: {
         codigo: 0,
         nome:""
      },
      created: function() {
         this.getCodigo();
      },
      methods:{
         onSubmit : function(){
            var dados = {
               metodo: "setCadastro",
               nome : this.nome
            }
            this.$http.post("ajax/ajax.php", dados, {emulateJSON:true}).then(retorno => {
               this.getCodigo();
               this.nome = "";
               console.log("Inserido com sucesso");
            });
         },
         getCodigo : function(){
            this.$http.post("ajax/ajax.php", {metodo : "getCodigo"}, {emulateJSON:true}).then(response => {
               this.codigo = response.body;
            });
         }
      }
   });
}
