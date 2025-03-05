function expandMenu() {
    var element = document.getElementsByTagName("header")[0];
    element.classList.toggle("expanded");
  }

function getQuery() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  if (params.kategori) {
    return params.kategori;
  } else {}
}

function listItems(category) {
  var match = [];
  var items = document.getElementById('products').getElementsByTagName('li');
  var results = [];
    
  for (let i = 0; i < items.length; i++) {
    if (category) {
      if (items[i].className == category) {
        match.push(items[i])
      }
    }
  }

  console.log('Alle viner, antall: ' + items.length);
  console.log('Kategori: ' + category + ', antall: ' + match.length);
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
    for (let item of removed) {
        item.remove();
    }
  }
}

function countProducts() {
  var items = document.getElementById('products').getElementsByTagName('li');
  console.log(items.length);
}

function filterProducts() {
  var items = document.getElementById('products').getElementsByTagName('li');
  var navigation = document.getElementById('filter');
  var categories = [];
  for (let i = 0; i < items.length; i++) {
    categories.indexOf(items[i].className) === -1 ? categories.push(items[i].className) : '';
  }
  categories.sort();
  var link = document.createElement('a');
  link.href = '/utvalg.html';
  link.textContent = 'Alle viner';
  navigation.appendChild(link);
  for (let i = 0; i < categories.length; i++) {
    var link = document.createElement('a');
    link.href = '?kategori=' + categories[i];
    link.textContent = categories[i];
    if (categories[i] == getQuery()) {
      link.className += 'arrow selected';
    }
    navigation.appendChild(link);
  }


}