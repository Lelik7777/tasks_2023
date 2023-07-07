window.onload = function () {
  document.querySelector("#shop_id").addEventListener("click", () => {
    ajaxGet("index.php");
  });
};
function ajaxGet(url) {
  const request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
console.log(request.responseText);
    }
  };
  //!open connection
  request.open("GET", url);

  request.send();
}
