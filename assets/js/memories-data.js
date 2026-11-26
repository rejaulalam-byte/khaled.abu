/* ==========================================================================
   MKH.Abu — স্মৃতির ছবির তথ্য
   নিচের সবগুলো নমুনা (sample: true)। আসল সাইট চালুর আগে মুছে ফেলতে হবে।
   পরে অ্যাডমিন প্যানেল থেকে এই তথ্য আসবে।

   একটি গ্রুপের ঘর:
     id      ঠিকানায় ব্যবহৃত অনন্য নাম (ইংরেজি অক্ষর, সংখ্যা, হাইফেন)
     date    গ্রুপের তারিখ, "বছর-মাস-দিন"; নতুন তারিখ আগে দেখায়
     cover   গ্রুপের প্রধান ছবি, যেমন "images/memories/ছবির-নাম.jpg"
             (ফাঁকা থাকলে প্রথম ছবি দেখায়)
     title   গ্রুপের হেডিং (বাংলা ও English)
     photos  ছবির তালিকা; যে ক্রমে লেখা সে ক্রমেই দেখায়
   ========================================================================== */
window.MEMORIES = [
  {
    id: "sample-1", date: "2026-11-20", sample: true, cover: "",
    title: { bn: "নমুনা ছবির গ্রুপ ১", en: "Sample photo group 1" },
    photos: [
      { src: "", date: "2026-11-20", caption: { bn: "নমুনা ছবি ১ — ক্যাপশান", en: "Sample photo 1 — caption" } },
      { src: "", date: "2026-11-20", caption: { bn: "নমুনা ছবি ২ — ক্যাপশান", en: "Sample photo 2 — caption" } },
      { src: "", date: "2026-11-20", caption: { bn: "নমুনা ছবি ৩ — ক্যাপশান", en: "Sample photo 3 — caption" } },
      { src: "", date: "2026-11-20", caption: { bn: "নমুনা ছবি ৪ — ক্যাপশান", en: "Sample photo 4 — caption" } }
    ]
  },
  {
    id: "sample-2", date: "2026-08-14", sample: true, cover: "",
    title: { bn: "নমুনা ছবির গ্রুপ ২", en: "Sample photo group 2" },
    photos: [
      { src: "", date: "2026-08-14", caption: { bn: "নমুনা ছবি ১ — ক্যাপশান", en: "Sample photo 1 — caption" } },
      { src: "", date: "2026-08-14", caption: { bn: "নমুনা ছবি ২ — ক্যাপশান", en: "Sample photo 2 — caption" } },
      { src: "", date: "2026-08-14", caption: { bn: "নমুনা ছবি ৩ — ক্যাপশান", en: "Sample photo 3 — caption" } },
      { src: "", date: "2026-08-14", caption: { bn: "নমুনা ছবি ৪ — ক্যাপশান", en: "Sample photo 4 — caption" } }
    ]
  },
  {
    id: "sample-3", date: "2026-03-26", sample: true, cover: "",
    title: { bn: "নমুনা ছবির গ্রুপ ৩", en: "Sample photo group 3" },
    photos: [
      { src: "", date: "2026-03-26", caption: { bn: "নমুনা ছবি ১ — ক্যাপশান", en: "Sample photo 1 — caption" } },
      { src: "", date: "2026-03-26", caption: { bn: "নমুনা ছবি ২ — ক্যাপশান", en: "Sample photo 2 — caption" } },
      { src: "", date: "2026-03-26", caption: { bn: "নমুনা ছবি ৩ — ক্যাপশান", en: "Sample photo 3 — caption" } },
      { src: "", date: "2026-03-26", caption: { bn: "নমুনা ছবি ৪ — ক্যাপশান", en: "Sample photo 4 — caption" } }
    ]
  },
  {
    id: "sample-4", date: "2025-12-16", sample: true, cover: "",
    title: { bn: "নমুনা ছবির গ্রুপ ৪", en: "Sample photo group 4" },
    photos: [
      { src: "", date: "2025-12-16", caption: { bn: "নমুনা ছবি ১ — ক্যাপশান", en: "Sample photo 1 — caption" } },
      { src: "", date: "2025-12-16", caption: { bn: "নমুনা ছবি ২ — ক্যাপশান", en: "Sample photo 2 — caption" } },
      { src: "", date: "2025-12-16", caption: { bn: "নমুনা ছবি ৩ — ক্যাপশান", en: "Sample photo 3 — caption" } },
      { src: "", date: "2025-12-16", caption: { bn: "নমুনা ছবি ৪ — ক্যাপশান", en: "Sample photo 4 — caption" } }
    ]
  },
  {
    id: "sample-5", date: "2025-04-14", sample: true, cover: "",
    title: { bn: "নমুনা ছবির গ্রুপ ৫", en: "Sample photo group 5" },
    photos: [
      { src: "", date: "2025-04-14", caption: { bn: "নমুনা ছবি ১ — ক্যাপশান", en: "Sample photo 1 — caption" } },
      { src: "", date: "2025-04-14", caption: { bn: "নমুনা ছবি ২ — ক্যাপশান", en: "Sample photo 2 — caption" } },
      { src: "", date: "2025-04-14", caption: { bn: "নমুনা ছবি ৩ — ক্যাপশান", en: "Sample photo 3 — caption" } },
      { src: "", date: "2025-04-14", caption: { bn: "নমুনা ছবি ৪ — ক্যাপশান", en: "Sample photo 4 — caption" } }
    ]
  },
  {
    id: "sample-6", date: "2024-02-21", sample: true, cover: "",
    title: { bn: "নমুনা ছবির গ্রুপ ৬", en: "Sample photo group 6" },
    photos: [
      { src: "", date: "2024-02-21", caption: { bn: "নমুনা ছবি ১ — ক্যাপশান", en: "Sample photo 1 — caption" } },
      { src: "", date: "2024-02-21", caption: { bn: "নমুনা ছবি ২ — ক্যাপশান", en: "Sample photo 2 — caption" } },
      { src: "", date: "2024-02-21", caption: { bn: "নমুনা ছবি ৩ — ক্যাপশান", en: "Sample photo 3 — caption" } },
      { src: "", date: "2024-02-21", caption: { bn: "নমুনা ছবি ৪ — ক্যাপশান", en: "Sample photo 4 — caption" } }
    ]
  }
];
