let agregarUsuarios = document.getElementById("btn-add");
let number = 6;

function contador(param) {
  var result;

  if (param >= 6) {
    let i = param;
    if (i <= 12) {
      i++;
    }

    result = i++;

    return result;
  }
}


function addUser(count) {
  const API = `https://reqres.in/api/users/${count}`;

  let XHRequest = new XMLHttpRequest();

  XHRequest.open("GET", API, true);
  XHRequest.send();

  XHRequest.onreadystatechange = function () {
    const item = JSON.parse( this.response);

    
    console.log(item);
   


    let usersList = document.getElementById("row");

    let divColMd = document.createElement("div");
    divColMd.setAttribute("class", "col-md-4");

    usersList.appendChild(divColMd);

    let divUser = document.createElement("div");
    divUser.setAttribute("class", "user");

    divColMd.appendChild(divUser);

    let imgUser = document.createElement("img");
    imgUser.src = item.data.avatar;
    imgUser.alt = "Usuario";
    imgUser.setAttribute("class", "img-fluid");

    divUser.appendChild(imgUser);

    let h2User = document.createElement("h2");
    h2User.textContent =
      item.data.first_name +
      " " +
      item.data.last_name;

    divUser.appendChild(h2User);

   };
   
  };

agregarUsuarios.addEventListener("click", function (evt) {
    evt.preventDefault();
    addUser(contador(number++));
  
});

callAjax();



function callAjax() {
  const API = "https://reqres.in/api/users/";
  let XHRequest = new XMLHttpRequest();

  XHRequest.open("GET", API, true);
  XHRequest.send();

  XHRequest.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let datosUsuarios = JSON.parse(this.responseText);

      console.log(datosUsuarios);
  

      datosUsuarios.data.map((item) => {
        let usersList = document.getElementById("row");

          let divColMd = document.createElement("div");
          divColMd.setAttribute("class", "col-md-4");
  
          usersList.appendChild(divColMd);
  
          let divUser = document.createElement("div");
          divUser.setAttribute("class", "user");
  
          divColMd.appendChild(divUser);
  
          let imgUser = document.createElement("img");
          imgUser.src = item.avatar;
          imgUser.alt = "Usuario";
          imgUser.setAttribute("class", "img-fluid");
  
          divUser.appendChild(imgUser);
  
          let h2User = document.createElement("h2");
          h2User.textContent =
            item.first_name +
            " " +
            item.last_name;
  
          divUser.appendChild(h2User);
      });
    }
  };
}
