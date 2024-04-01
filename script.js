/*function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERROR] Verifique os dados e tente Novamente !");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img"); //criar uma tag html//
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade <= 10) {
        // Criança
        img.setAttribute("src", "img/bebe-homem.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "img/jovem-homem.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "img/homem-adulto.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "img/idoso-homem.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade <= 10) {
        // Criança
        img.setAttribute("src", "img/bebe-mulher.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "img/jovem-mulher.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "img/mulher-adulta.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "img/idoso-mulher.jpg");
      }
    }
    res.style.textAlign = "center";
    img.style.padding = "20px";
    res.innerHTML = `<strong> Detectamos  um ${genero} com ${idade} anos de Idade.</strong>`;
    res.appendChild(img);
    img.style.width = "300px";
    img.style.height = "300px";
  }
} */

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERROR] Verifique os dados e tente Novamente !");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var categoria = ""; // Adicionando variável para a categoria de idade
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";
    } else if (fsex[1].checked) {
      genero = "mulher";
    }

    if (idade >= 0 && idade <= 10) {
      categoria = "criança";
    } else if (idade < 18) {
      categoria = "adolescente";
    } else if (idade < 60) {
      categoria = "adulto";
    } else {
      categoria = "idoso";
    }

    // Determinando a imagem com base no gênero e na categoria de idade
    if (genero === "homem" && categoria === "criança") {
      img.setAttribute("src", "img/bebe-homem.jpg");
    } else if (genero === "homem" && categoria === "adolescente") {
      img.setAttribute("src", "img/jovem-homem.jpg");
    } else if (genero === "homem" && categoria === "adulto") {
      img.setAttribute("src", "img/homem-adulto.jpg");
    } else if (genero === "homem" && categoria === "idoso") {
      img.setAttribute("src", "img/idoso-homem.jpg");
    }

    if (genero === "mulher" && categoria === "criança") {
      img.setAttribute("src", "img/bebe-mulher.jpg");
    } else if (genero === "mulher" && categoria === "adolescente") {
      img.setAttribute("src", "img/jovem-mulher.jpg");
    } else if (genero === "mulher" && categoria === "adulto") {
      img.setAttribute("src", "img/mulher-adulta.jpg");
    } else if (genero === "mulher" && categoria === "idoso") {
      img.setAttribute("src", "img/idoso-mulher.jpg");
    }

    res.style.textAlign = "center";
    img.style.padding = "20px";
    res.innerHTML = `<strong>Detectamos um ${genero} da Categoria ${categoria} com ${idade} anos de Idade.</strong>`;
    res.appendChild(img);
    img.style.width = "250px";
    img.style.height = "250px";
  }
}
