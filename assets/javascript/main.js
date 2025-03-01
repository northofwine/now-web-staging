function expandMenu() {
    var element = document.getElementsByTagName("header")[0];
    element.classList.toggle("expanded");
  }

function getQuery() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.kategori; // "some_value"
  return value;
}

function hideProducts(query) {
  if(query) {
    var removed = [];
    var items = document.getElementById('products').getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
      if (items[i].className != query) {
        removed.push(items[i])
      }
    }
    console.log(removed);
    for (let item of removed) {
        item.remove();
    }
  }
}

function filterProducts() {
  var items = document.getElementById('products').getElementsByTagName('li');
  var navigation = document.getElementById('filter');
  var categories = [];
  for (let i = 0; i < items.length; i++) {
    categories.indexOf(items[i].className) === -1 ? categories.push(items[i].className) : console.log('Exists');
  }
  categories.sort();
  var link = document.createElement('a');
  link.href = '/utvalg.html';
  link.textContent = 'Alle viner';
  navigation.appendChild(link);
  for (let i = 0; i < categories.length; i++) {
    var link = document.createElement('a');
    link.href = '?kategori=' + categories[i];
    if (categories[i] == getQuery()) {
      var icon = document.createElement('img');
      icon.src = 'test.svg';
      link.appendChild(icon);
      link.textContent = '-> ' + categories[i];
    }
    else {
      link.textContent = categories[i];
    }
    navigation.appendChild(link);
  }


}