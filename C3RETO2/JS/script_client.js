var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data:elemento,
    url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
    type:'POST',
          
    success:function(response) {
    console.log(response);
  },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    
    
    function obtenerItems(){
    
      $.ajax({
          
        url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:'GET',
        dataType:"JSON",
          
        success:function(response) {
          console.log(response);
          imprimir(response.items);
        }
      });
    }
    function imprimir(items){

      let myTable ="<table>";

      for(i=0;i<items.length;i++){
          myTable+="<tr>";
             
          myTable+="<td>"+items[i].id+"</td>";
          myTable+="<td>"+items[i].name+"</td>";
          myTable+="<td>"+items[i].email+"</td>";
          myTable+="<td>"+items[i].age+"</td>"; 
          myTable+="</tr>";
        }
        myTable+= "</table>";
        $("#resultado").append(myTable);
    }

    
    
    
    function borrar(idElemento){
    var elemento={
      id:idElemento
    };
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType:'json',
          data:dataToSend,
          url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
          type:'DELETE',
          contentType:'application/json',
          success:function(response) {
           
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    }
    
    
    function obtenerItemEspecifico(idItem){
      $.ajax({
          dataType: 'json',
          url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/"+idItem,
          type:'GET',
          success:function(response) {
            console.log(response);
            var item=response.items[0];
    
            $("#clientId").val(item.id);
            $("#brand").val(item.brand);
            $("#model").val(item.model);
            $("#category_id").val(item.category_id);
            $("#name").val(item.name);
    
    
    
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
    
    function actualizar(){
    var elemento={
      id:$("#clientId").val(),
      brand:$("#brand").val(),
      model:$("#model").val(),
      category_id:$("#category_id").val(),
      name:$("#name").val()
   
    }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }