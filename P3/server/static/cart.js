function test() {
  let cookies = document.cookie;
  let cartMssg = document.getElementsByClassName("cart-mssg");
  let cartContent = document.createElement("P");
  let cartEmpty = true;

  cartContent.innerText = "Your current cart:" + '\n';
  cookies = cookies.split(';');

  for (cookie in cookies) {
    cookieName = cookies[cookie].split('=')[0];
    cookieValue = cookies[cookie].split('=')[1];
    if (cookieName.includes('product')) {
      cartEmpty = false;
      cartContent.innerText += cookieValue + '\n';
      cartMssg[0].appendChild(cartContent);
    }
  }
  if (cartEmpty) {
    console.log("dfjsdfhb");
    document.getElementsByClassName('error-mssg')[0].style.display = "block";
  }
}

function select(event) {
  let inputBox = document.getElementById("search-input");
  let combo = document.getElementById("options-combo");

  inputBox.value = combo.value;
}

function search(event) {
  let searchBar = document.getElementById("search-bar");
  let searchBox = document.getElementById("search-input");
  let results = document.getElementById("options-combo")
  const searchValue = searchBox.value;
  const KeyCode = Number(event.keyCode);

  if  (KeyCode == 13) {
    event.preventDefault();
  }

  if (KeyCode > 64 && KeyCode < 91 && searchValue.length >= 2) {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        // if exists old results we remove it
        // if (document.getElementById("search-match") != null) {
        //   results.removeChild(document.getElementById("search-match"))
        // }
        let response = JSON.parse(this.response);
        if (response.length != 0) {
          let option = document.createElement("option");
          option.setAttribute("id", "search-match")
          option.value = response;
          option.innerText = response;
          // option.style = "color:white"
          results.appendChild(option);
        }
      }
    };
    ajax.open("GET", "searching="+searchValue, true)
    ajax.send()
  }
}
