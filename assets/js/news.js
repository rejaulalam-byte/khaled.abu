/* ==========================================================================
   MKH.Abu — সংবাদ দেখানো
   পেজে যে ঘর পাওয়া যায় শুধু সেটাই ভরে:
     #homeNews  হোম পেজ (সর্বশেষ ৬টি)
     #newsLead  পেশার পেজের প্রধান সংবাদ (সবচেয়ে নতুন)
     #newsList  পেশার পেজের বাকি সংবাদ
   তথ্য আসে news-data.js থেকে; ভাষা বদলালে নতুন করে আঁকা হয়।
   ========================================================================== */
(function () {
  "use strict";

  var HOME_LIMIT = 6;

  /* নতুন সংবাদ আগে */
  var news = (window.NEWS || []).slice().sort(function (a, b) {
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

  function media(item, lang) {
    var box = el("div", "news-media");
    if (item.video) {
      var video = el("video");
      video.src = item.video;
      video.controls = true;
      video.preload = "metadata";
      if (item.image) video.poster = item.image;
      box.appendChild(video);
    } else if (item.image) {
      var img = el("img");
      img.src = item.image;
      img.alt = item.title[lang];
      img.loading = "lazy";
      box.appendChild(img);
    } else {
      box.appendChild(el("div", "news-ph", T[lang].np_ph));
    }
    if (item.sample) box.appendChild(el("span", "news-badge", T[lang].sample));
    return box;
  }

  function card(item, lang, extraClass) {
    var node = el("article", "news-card" + (extraClass ? " " + extraClass : ""));
    var body = el("div", "news-body");
    var foot = el("div", "news-foot");
    var time = el("time", "", formatDate(item.date, lang));
    time.dateTime = item.date;
    foot.appendChild(time);
    if (/^https?:\/\//i.test(item.url)) {
      var link = el("a", "", T[lang].np_read + " →");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      foot.appendChild(link);
    }
    body.appendChild(el("span", "news-source",
      item.source === "own" ? T[lang].np_own : item.paper[lang]));
    body.appendChild(el("h3", "", item.title[lang]));
    body.appendChild(el("p", "", item.summary[lang]));
    body.appendChild(foot);
    node.appendChild(media(item, lang));
    node.appendChild(body);
    return node;
  }

  function fill(id, items, lang, extraClass) {
    var box = document.getElementById(id);
    if (!box) return;
    box.textContent = "";
    items.forEach(function (item) { box.appendChild(card(item, lang, extraClass)); });
  }

  function render(lang) {
    fill("homeNews", news.slice(0, HOME_LIMIT), lang);
    fill("newsLead", news.slice(0, 1), lang, "lead");
    fill("newsList", news.slice(1), lang);
    if (!news.length) {
      ["homeNews", "newsList"].forEach(function (id) {
        var box = document.getElementById(id);
        if (box) box.appendChild(el("p", "news-empty", T[lang].np_empty));
      });
    }
  }

  document.addEventListener("mkh:lang", function (e) { render(e.detail); });
  render(document.documentElement.lang === "en" ? "en" : "bn");
})();
