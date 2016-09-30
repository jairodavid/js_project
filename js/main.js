console.log("Hello world");
/*
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
};
*/
var suerte = function (numero){

  if (numero === "13") {
    console.log("Sentido pesame");
  }else if (numero ===7) {
    console.log("Buena Suerte");
  }

};

num=0;
while (num<=10) {
console.log(++num);
}


var casa = {altura : 200 , ancho : 100};

var casota = Object.create(casa);
casota.ventanas=100;
var arreglo =["a" , 5 , true , "abc"];
for (var prop in arreglo) {
  console.log("prop ->" + prop);
  console.log("arreglo[pos]->" + arreglo[prop]);
}
