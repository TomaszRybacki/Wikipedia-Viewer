const searchButton = document.getElementById('search');
const searchInput = document.getElementById('searchFraze');
const searchOutput = document.getElementById('output');

searchButton.addEventListener('click', function () {
  let searchTerm = searchInput.value;
  let url = "https://pl.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchTerm + "&format=json";

  let http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  http.send();

   http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
          let data = JSON.parse(http.response);
          searchOutput.innerHTML = "";
          for (i = 0; i < data[1].length; i++) {
            let li = document.createElement('li');
            li.innerHTML = "<h2>" + data[1][i] + "</h2><p>" + data[2][i] + "</p><a href='" + data[3][i] + "' target='_blank'>Link do Wikipedii</a>";
            searchOutput.appendChild(li);
          }
        } else if (http.readyState === 4 && http.status === 404) {
          searchOutput.innerHTML = "404 Not Found";
        }
    };
});
