console.log("Hello world");

var saludar = function (param) {
  var is_num = Number.isNaN(param);
  if (is_num) {
    var param = param.toLowerCase();
  }
  if (param=="dia" || param<=12 && param >=0) {
    console.log("Buenos Dias");
  }
  else
  if (param=="noche"){
    console.log("Buenas Noches");
  }
  else

  {
    console.log("Buenas");
  }
}

var suerte = function (numero){

  if (numero === "13") {
    console.log("Sentido pesame");
  }else if (numero ===7) {
    console.log("Buena Suerte");
  }

}

num=0;
while (num<=10) {
console.log(++num);
}
