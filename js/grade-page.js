/**
 * Renders a single steel-grade detail page from data/grades.json based on
 * the ?g=<key> query parameter. One template serves every grade — add a
 * new grade by adding one entry to data/grades.json, no new HTML needed.
 */
(function () {
  const SHAPE_META = {
    "round-bar": { label: "Round Bars", icon: "icon-round-bar" },
    "square-bar": { label: "Square Bars", icon: "icon-square-bar" },
    "hex-bar": { label: "Hexagonal Bars", icon: "icon-hex-bar" },
    "flat-bar": { label: "Flat Bars", icon: "icon-flat-bar" }
  };

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderHighlights(container, highlights) {
    container.innerHTML = "";
    (highlights || []).forEach((h) => {
      const tile = el("div", "spec-highlight-tile");
      tile.innerHTML =
        '<svg class="icon-inline"><use href="#' + h.icon + '"/></svg><span>' + h.label + "</span>";
      container.appendChild(tile);
    });
  }

  function renderChemistryTable(table, chemistry) {
    if (!chemistry) { table.innerHTML = ""; return; }
    const thead = "<thead><tr>" + chemistry.columns.map((c) => "<th>" + c + "</th>").join("") + "</tr></thead>";
    const tbody = "<tbody><tr>" + chemistry.row.map((c) => "<td>" + c + "</td>").join("") + "</tr></tbody>";
    table.innerHTML = thead + tbody;
  }

  function renderRows(tbody, rows, mapFn) {
    tbody.innerHTML = "";
    (rows || []).forEach((row) => {
      const tr = el("tr", null, mapFn(row));
      tbody.appendChild(tr);
    });
  }

  function renderApplications(container, applications) {
    container.innerHTML = "";
    (applications || []).forEach((app) => {
      const card = el("div", "card");
      card.setAttribute("data-reveal", "");
      card.style.textAlign = "center";
      card.innerHTML =
        '<div class="card-icon" style="margin:0 auto var(--space-lg);"><svg class="icon-inline"><use href="#' +
        app.icon +
        '"/></svg></div><h3 style="font-size:var(--fs-body-md);">' +
        app.label +
        "</h3>";
      container.appendChild(card);
    });
  }

  function renderSupply(list, supply) {
    list.innerHTML = "";
    (supply || []).forEach((s) => {
      const li = el(
        "li",
        null,
        '<svg class="icon-inline"><use href="#icon-check"/></svg> ' + s
      );
      list.appendChild(li);
    });
  }

  function renderForms(container, shapeKeys) {
    container.innerHTML = "";
    (shapeKeys || []).forEach((key) => {
      const meta = SHAPE_META[key];
      if (!meta) return;
      const card = el("div", "card");
      card.setAttribute("data-reveal", "");
      card.innerHTML =
        '<div class="shape-icon"><svg class="icon-inline"><use href="#' +
        meta.icon +
        '"/></svg></div><h3>' +
        meta.label +
        "</h3>";
      container.appendChild(card);
    });
  }

  function showState(id) {
    ["gradeLoading", "gradeNotFound", "gradeContent"].forEach((s) => {
      document.getElementById(s).hidden = s !== id;
    });
  }

  function setMeta(selector, attr, value) {
    const node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  }

  function setOrCreateJsonLd(id, data) {
    let node = document.getElementById(id);
    if (!node) {
      node = document.createElement("script");
      node.type = "application/ld+json";
      node.id = id;
      document.head.appendChild(node);
    }
    node.textContent = JSON.stringify(data);
  }

  function updateSeo(key, grade) {
    const pageTitle = grade.code + " — " + grade.category + " | TBI Steel";
    const description =
      grade.code + " (" + grade.name + "): " + grade.tagline;
    const canonicalUrl =
      "https://thirupathybright.com/steel-grades/grade.html?g=" +
      encodeURIComponent(key);

    document.title = pageTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", pageTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", pageTitle);
    setMeta('meta[name="twitter:description"]', "content", description);

    setOrCreateJsonLd("gradeProductJsonLd", {
      "@context": "https://schema.org",
      "@type": "Product",
      name: grade.code + " — " + grade.name,
      description: grade.tagline,
      category: grade.category,
      url: canonicalUrl,
      brand: {
        "@type": "Organization",
        name: "Thirupathy Bright Industries"
      }
    });

    setOrCreateJsonLd("gradeBreadcrumbJsonLd", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thirupathybright.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Grades & Standards",
          item: "https://thirupathybright.com/steel-grades.html"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: grade.category,
          item: "https://thirupathybright.com/steel-grades.html"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: grade.code,
          item: canonicalUrl
        }
      ]
    });
  }

  function render(key, grade, allGrades) {
    updateSeo(key, grade);
    document.title = grade.code + " — " + grade.category + " | TBI Steel";

    document.getElementById("gradeCategoryCrumb").textContent = grade.category;
    document.getElementById("gradeCodeCrumb").textContent = grade.code;
    document.getElementById("gradeCode").textContent = grade.code;
    document.getElementById("gradeName").textContent = grade.name;
    document.getElementById("gradeTagline").textContent = grade.tagline;

    document.getElementById("gradeCategoryLabel").textContent = grade.category;
    document.getElementById("gradeCode2").textContent = grade.code;
    document.getElementById("gradeName2").textContent = grade.name;
    document.getElementById("gradeTagline2").textContent = grade.tagline;

    renderHighlights(document.getElementById("gradeHighlights"), grade.highlights);
    renderChemistryTable(document.getElementById("chemistryTable"), grade.chemistry);

    renderRows(
      document.querySelector("#mechanicalTable tbody"),
      grade.mechanical,
      (row) => "<td>" + row.property + "</td><td>" + row.value + "</td>"
    );

    renderRows(
      document.querySelector("#equivalentsTable tbody"),
      grade.equivalents,
      (row) => "<td>" + row.standard + "</td><td>" + row.grade + "</td>"
    );

    renderApplications(document.getElementById("gradeApplications"), grade.applications);
    renderSupply(document.getElementById("gradeSupply"), grade.supply);
    renderForms(document.getElementById("gradeForms"), grade.shapes);
    document.getElementById("gradeCtaHeading").textContent =
      "Need " + grade.code + " Round Bright Bars for Your Project?";

    showState("gradeContent");

    // Re-run scroll-reveal + tab highlighting for the newly injected content.
    if (typeof initReveal === "function") initReveal();
    if (typeof initProductTabs === "function") initProductTabs();
  }

  function init() {
    const key = (qs("g") || "").toLowerCase().trim();

    fetch("../data/grades.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load grade data");
        return res.json();
      })
      .then((allGrades) => {
        const grade = allGrades[key];
        if (!grade) {
          showState("gradeNotFound");
          return;
        }
        render(key, grade, allGrades);
      })
      .catch(() => {
        showState("gradeNotFound");
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
