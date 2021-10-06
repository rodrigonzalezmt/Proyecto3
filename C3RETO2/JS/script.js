function registro(){
  var elemento={
    id:$("#miId").val(),
    brand:$("#brand").val(),    
    model:$("#model").val(),
    category_id:$("#category_id").val(),
    name:$("#name").val(),

    }
  
  
  var dataToSend=JSON.stringify(elemento);
  //JSON= JavaScript Object Notation
  $.ajax({
        dataType: 'json',
        data:elemento,
        url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
        type:'POST',
        
        success:function(response) {
          console.log(response);
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
  
  function obtenerItems(){
  
    $.ajax({
        dataType: 'json',
        url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
        type:'GET',
        
        success:function(response) {
         
          var misItems=response.items;
  
          for(i=0;i<misItems.length;i++){
           
            $("#miResultado").append("<tr>");
            $("#miResultado").append("<td>"+misItems[i].id+"</td>");
            $("#miResultado").append("<td>"+misItems[i].brand+"</td>");
            $("#miResultado").append("<td>"+misItems[i].model+"</td>");
            $("#miResultado").append("<td>"+misItems[i].category_id+"</td>");
            $("#miResultado").append("<td>"+misItems[i].name+"</td>"); 
            $("#miResultado").append("</tr>");
  
          }
  
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
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
        url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
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
        url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis/"+idItem,
        type:'GET',
        success:function(response) {
          console.log(response);
          var item=response.items[0];
  
          $("#miId").val(item.id);
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
    id:$("#miId").val(),
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
        url:"https://g7242924a072a18-proyecto3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
        type:'PUT',
        
        success:function(response) {
          console.log(response);
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
  