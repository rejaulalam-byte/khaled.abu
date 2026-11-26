/* ==========================================================================
   MKH.Abu — স্মৃতির ছবি দেখানো
   পেজে যে ঘর পাওয়া যায় শুধু সেটাই ভরে:
     #memorySlider  হোম পেজের স্লাইডার (সর্বশেষ ৬টি গ্রুপ)
     #albumList     সব গ্রুপের পেজ (memories.html)
     #album         একটি গ্রুপের ভিতর (album.html?id=...)
   তথ্য আসে memories-data.js থেকে; ভাষা বদলালে নতুন করে আঁকা হয়।
   ========================================================================== */
(function () {
  "use strict";

  var HOME_LIMIT = 6;
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-8 8"/></svg>';

  /* নতুন গ্রুপ আগে */
  var groups = (window.MEMORIES || []).slice().sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function formatDate(iso, lang) {
    var p = iso.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]).toLocaleDateString(
      lang === "en" ? "en-GB" : "bn-BD",
      { day: "numeric", month: "long", year: "numeric" });
  }

  function picture(src, alt, sample, lang) {
    var box = el("div", "shot-img");
    if (src) {
      var img = el("img");
      img.src = src;
      img.alt = alt;
      img.loading = "lazy";
      box.appendChild(img);
    } else {
      var ph = el("div", "ph");
      var inner = el("div");
      inner.innerHTML = ICON;               /* স্থির আইকন, বাইরের কোনো তথ্য নয় */
      inner.appendChild(el("span", "", T[lang].m_ph));
      ph.appendChild(inner);
      box.appendChild(ph);
    }
    if (sample) box.appendChild(el("span", "shot-badge", T[lang].sample));
    return box;
  }

  function caption(tag, title, date, lang) {
    var text = el(tag, "shot-text");
    text.appendChild(el("b", "", title));
    var time = el("time", "", formatDate(date, lang));
    time.dateTime = date;
    text.appendChild(time);
    return text;
  }

  function groupCard(group, lang) {
    var link = el("a", "shot");
    link.href = "album.html?id=" + encodeURIComponent(group.id);
    var cover = group.cover || (group.photos[0] && group.photos[0].src);
    link.appendChild(picture(cover, group.title[lang], group.sample, lang));
    link.appendChild(caption("div", group.title[lang], group.date, lang));
    return link;
  }

  function fillList(box, list, lang) {
    box.textContent = "";
    if (!list.length) {
      box.appendChild(el("p", "empty", T[lang].m_empty));
      return;
    }
    list.forEach(function (g) { box.appendChild(groupCard(g, lang)); });
  }

  function fillAlbum(box, lang) {
    var id = new URLSearchParams(window.location.search).get("id");
    var group = groups.filter(function (g) { return g.id === id; })[0];
    var title = document.getElementById("albumTitle");
    var date = document.getElementById("albumDate");
    box.textContent = "";

    if (!group) {
      title.textContent = T[lang].g_title;
      date.textContent = "";
      box.appendChild(el("p", "empty", T[lang].m_missing));
      return;
    }
    title.textContent = group.title[lang];
    date.textContent = formatDate(group.date, lang);
    document.title = group.title[lang] + " — MKH.Abu";

    group.photos.forEach(function (photo) {
      var figure = el("figure", "shot");
      figure.appendChild(picture(photo.src, photo.caption[lang], group.sample, lang));
      figure.appendChild(caption("figcaption", photo.caption[lang], photo.date, lang));
      box.appendChild(figure);
    });
  }

  /* বাম/ডান তীর */
  var slider = document.getElementById("memorySlider");
  var prev = document.getElementById("memoryPrev");
  var next = document.getElementById("memoryNext");

  function updateArrows() {
    if (!slider) return;
    var max = slider.scrollWidth - slider.clientWidth;
    prev.disabled = slider.scrollLeft <= 2;
    next.disabled = slider.scrollLeft >= max - 2;
  }

  function move(direction) {
    var card = slider.firstElementChild;
    if (!card) return;
    var gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    slider.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }

  if (slider) {
    prev.addEventListener("click", function () { move(-1); });
    next.addEventListener("click", function () { move(1); });
    slider.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
  }

  function render(lang) {
    var list = document.getElementById("albumList");
    var album = document.getElementById("album");
    if (slider) {
      fillList(slider, groups.slice(0, HOME_LIMIT), lang);
      updateArrows();
    }
    if (list) fillList(list, groups, lang);
    if (album) fillAlbum(album, lang);
  }

  document.addEventListener("mkh:lang", function (e) { render(e.detail); });
  render(document.documentElement.lang === "en" ? "en" : "bn");
})();
