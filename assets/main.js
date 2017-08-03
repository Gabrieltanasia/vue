window.onload = function(){

   Vue.component('lista',{
      props: ['afazer'],
      template: '<li>{{afazer.texto}}</li>'
   });


   var app = new Vue({
      el: "#app",
      data: {
         message: "Escrito com o Vue",
         title: "Carregou isso aqui as "+ new Date(),
         visto : true,
         textoBotao: "Fazer sumir",
         conteudo : "Se apertar no botão isso vai desaparecer",
         conteudoLista : [
            {id:0,texto:"Matar aula"},
            {id:1,texto:"Estudar essas tecnologia doida"},
            {id:2,texto:"Ficar rico"}
         ]
      },
      methods:{
         changeVisto : function (){
            this.visto = !this.visto
            this.textoBotao = (this.visto) ? "Fazer sumir" : "Sdds"
         }
      }

   });

   var ajax = new Vue({
      el: "#ajax",
      data:{
         nome:""
      },
      methods:{
         onSubmit : function(){
            $.post("ajax/ajax.php", dados = {dados:this.nome}, function(retorno){
               alert("Parabéns "+retorno+" você foi cadastrado com sucesso!");
               this.nome = "";
            });
         }
      }
   });


}
