/* ==========================================================================
   MKH.Abu — সংবাদের তথ্য (এখন সব নমুনা; পরে অ্যাডমিন প্যানেল থেকে আসবে)

   source  : "paper" = পত্রিকায় প্রকাশিত, "own" = নিজস্ব সংবাদ
   paper   : পত্রিকার নাম (নিজস্ব সংবাদে ফাঁকা)
   date    : বছর-মাস-দিন
   image   : ছবির ঠিকানা, যেমন "images/news/ছবি.jpg"
   video   : ভিডিও ফাইলের ঠিকানা (দিলে ছবির বদলে ভিডিও; image হবে তার কভার)
   url     : মূল সংবাদের ঠিকানা (http/https)। ফাঁকা থাকলে লিংক দেখানো হয় না
   sample  : আসল সংবাদ বসানোর সময় false
   ========================================================================== */
window.NEWS = [
  {
    source: "paper",
    paper: { bn: "পত্রিকার নাম", en: "Newspaper name" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-25",
    image: "", video: "", url: "", sample: true
  },
  {
    source: "paper",
    paper: { bn: "পত্রিকার নাম", en: "Newspaper name" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-24",
    image: "", video: "", url: "", sample: true
  },
  {
    source: "own",
    paper: { bn: "", en: "" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-23",
    image: "", video: "", url: "", sample: true
  },
  {
    source: "paper",
    paper: { bn: "পত্রিকার নাম", en: "Newspaper name" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-22",
    image: "", video: "", url: "", sample: true
  },
  {
    source: "paper",
    paper: { bn: "পত্রিকার নাম", en: "Newspaper name" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-21",
    image: "", video: "", url: "", sample: true
  },
  {
    source: "own",
    paper: { bn: "", en: "" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-20",
    image: "", video: "", url: "", sample: true
  },
  {
    source: "paper",
    paper: { bn: "পত্রিকার নাম", en: "Newspaper name" },
    title: { bn: "নমুনা সংবাদের শিরোনাম এখানে বসবে", en: "Sample news headline will appear here" },
    summary: { bn: "সংবাদের সংক্ষিপ্ত অংশ এখানে থাকবে।", en: "A short extract of the news will appear here." },
    date: "2026-11-19",
    image: "", video: "", url: "", sample: true
  }
];
