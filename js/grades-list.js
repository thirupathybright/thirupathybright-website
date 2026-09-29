(function () {
  var grid = document.getElementById("gradeGrid");
  var filterBar = document.getElementById("gradeFilterBar");
  if (!grid || !filterBar) return;

  var allGrades = null;
  var activeCategory = "all";

  function cardHtml(key, g) {
    return (
      '<a href="steel-grades/grade.html?g=' + key + '">' +
        '<div class="grade-card" data-reveal>' +
          '<p class="grade-code">' + g.code + '</p>' +
          '<p class="grade-card-name">' + g.name + '</p>' +
          '<p>' + g.category + '</p>' +
          '<div class="grade-tags">' +
            g.equivalents.slice(0, 3).map(function (eq) {
              return '<span class="badge">' + eq.standard + '</span>';
            }).join("") +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function render() {
    var entries = Object.keys(allGrades).map(function (key) {
      return [key, allGrades[key]];
    });
    if (activeCategory !== "all") {
      entries = entries.filter(function (entry) {
        return entry[1].category === activeCategory;
      });
    }
    entries.sort(function (a, b) {
      return a[1].code.localeCompare(b[1].code);
    });
    grid.innerHTML = entries.map(function (entry) {
      return cardHtml(entry[0], entry[1]);
    }).join("");
    if (window.initReveal) window.initReveal();
  }

  function renderFilters() {
    var categories = [];
    Object.keys(allGrades).forEach(function (key) {
      var cat = allGrades[key].category;
      if (categories.indexOf(cat) === -1) categories.push(cat);
    });
    categories.sort();
    categories.forEach(function (cat) {
      var btn = document.createElement("button");
      btn.className = "grade-filter";
      btn.type = "button";
      btn.dataset.filter = cat;
      btn.textContent = cat;
      filterBar.appendChild(btn);
    });
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".grade-filter");
      if (!btn) return;
      activeCategory = btn.dataset.filter;
      filterBar.querySelectorAll(".grade-filter").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      render();
    });
  }

  fetch("data/grades.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      allGrades = data;
      renderFilters();
      render();
    })
    .catch(function () {
      grid.innerHTML = "<p>Unable to load grades right now. Please try again later.</p>";
    });
})();
