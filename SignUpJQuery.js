$(document).ready(function(){
    $("submit").click(function(){
        console.log("Run");
        var id = $("exampleInputEmail1").val();
        var password = $("exampleInputPassword1").val();
        console.log(id);
    });
});