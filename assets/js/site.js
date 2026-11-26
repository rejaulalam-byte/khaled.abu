/* ==========================================================================
   MKH.Abu — সব পেজের সাধারণ স্ক্রিপ্ট
   সামাজিক মাধ্যমের আইকন, বাংলা/English লেখা, মোবাইল মেনু, যোগাযোগ ফর্ম
   ========================================================================== */
/* ============ সামাজিক মাধ্যম: শুধু যেটায় ঠিকানা আছে সেটাই দেখাবে ============
   পরে অ্যাডমিন প্যানেল থেকে এই ঠিকানাগুলো বসানো হবে। ফাঁকা ("") থাকলে আইকন লুকানো থাকবে।
   (নিচের দুটি ঠিকানা শুধু নমুনা — আসল ঠিকানা পেলে বসাব) */
var SOCIAL = {
  facebook : "https://www.facebook.com/",
  youtube  : "https://www.youtube.com/",
  x        : "",
  instagram: "",
  linkedin : ""
};
var ICONS = {
  facebook : '<svg viewBox="0 0 24 24"><path d="M14 8h3V5h-3c-2.200 0-4 1.800-4 4v2H8v3h2v7h3v-7h3l1-3h-4V9c0-.600.400-1 1-1z"/></svg>',
  youtube  : '<svg viewBox="0 0 24 24"><path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5 3z"/></svg>',
  x        : '<svg viewBox="0 0 24 24"><path d="M17.500 3h3l-6.600 7.500L21.700 21h-6l-4.700-6.100L5.600 21h-3l7-8L2.300 3h6.100l4.300 5.600zM16.400 19h1.700L7.700 4.800H5.900z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" style="fill:none;stroke:#e9eef4;stroke-width:2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r="1" style="fill:#e9eef4"/></svg>',
  linkedin : '<svg viewBox="0 0 24 24"><path d="M4 9h3.500v11H4zM5.700 3.500a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.300v1.500c.5-.9 1.700-1.800 3.400-1.800 3.500 0 4.300 2.300 4.300 5.300V20h-3.500v-5.200c0-1.300 0-2.900-1.800-2.900s-2 1.400-2 2.800V20H10z"/></svg>'
};
var NAMES = {facebook:"Facebook",youtube:"YouTube",x:"X",instagram:"Instagram",linkedin:"LinkedIn"};
(function(){
  var ul = document.getElementById("social");
  Object.keys(SOCIAL).forEach(function(k){
    if(!SOCIAL[k]) return;               /* ঠিকানা নেই → লুকানো */
    var li = document.createElement("li");
    li.innerHTML = '<a href="'+SOCIAL[k]+'" target="_blank" rel="noopener" aria-label="'+NAMES[k]+'">'+ICONS[k]+'</a>';
    ul.appendChild(li);
  });
  if(!ul.children.length) ul.style.display="none";
})();

/* ============ বাংলা / English ============ */
var T = {
bn:{
 phone:"০১৭১৬ ৪৩৩৯২৯", n_home:"হোম", n_about:"কে আমি", n_culture:"সামাজিক কার্যক্রম", n_memory:"স্মৃতির পৃষ্ঠা", n_shop:"কাগজের ঘর", n_contact:"যোগাযোগ",
 eyebrow:"আমার পেশা, আমার দায়বদ্ধতা", name:"মোহাম্মদ খালিদ আবু", role:"সাংবাদিক ও ব্যবসায়ী",
 lead:"সাংবাদিকতাকে আমি শুধু একটি পেশা নয়, বরং সমাজ ও মানুষের প্রতি দায়িত্ব পালনের একটি মাধ্যম হিসেবে দেখি। সত্যনিষ্ঠতা ও সাহসিকতাকে ধারণ করে কাজ করে যেতে চাই।", h_title:"সত্য বলতে চাই,\nমানুষের পাশে থাকতে চাই",
 b_about:"আমার সম্পর্কে জানুন", b_shop:"কাগজের ঘর দেখুন", photo:"এখানে আবু ভাইয়ের ছবি বসবে",
 s1n:"১৯৫৭", s1t:"জন্ম — পিরোজপুর", s2n:"১৫ বছর", s2t:"জাপানে ছিলেন", s3n:"৭ বছর", s3t:"নিজেদের গার্মেন্টস দেখাশোনা",
 a_tag:"পরিচিতি", a_title:"কে আমি", a_sub:"জীবন, শিক্ষা ও কর্মজীবনের সংক্ষিপ্ত পরিচয়",
 a_h1:"সংক্ষেপে", a_p1:"মোহাম্মদ খালিদ আবু ১৯৫৭ সালে পিরোজপুরে জন্মগ্রহণ করেন। পেশায় তিনি সাংবাদিক, একাধারে ব্যবসায়ী।", a_p2:"বর্তমানে প্রথম আলো / মানবজমিন পত্রিকার সাথে যুক্ত এবং পিরোজপুর জেলা প্রেসক্লাবের সাথে সম্পৃক্ত।",
 a_h2:"পথচলা", t1b:"শিক্ষা", t1s:"পিরোজপুর সরকারী বালক বিদ্যালয়; পিরোজপুর হোসেন শহীদ সরওয়ার্দী কলেজ",
 t2b:"গার্মেন্টস ব্যবসা", t2s:"নিজেদের গার্মেন্টস দীর্ঘ ৭ বছর দেখাশোনা করেছেন", t3b:"প্রবাস জীবন", t3s:"জাপানে ছিলেন দীর্ঘ ১৫ বছর", t4b:"সাংবাদিকতা", t4s:"বিভিন্ন সময়ে বিভিন্ন পত্রিকায়; বর্তমানে প্রথম আলো / মানবজমিন",
 c_tag:"সংস্কৃতি ও সমাজ", c_title:"সাংস্কৃতিক কর্মকাণ্ড", c_sub:"সংগীত, নাটক ও সামাজিক সংগঠনের সাথে দীর্ঘ পথচলা",
 c1h:"বাংলাদেশ উদীচী", c1p:"পিরোজপুর জেলা উদীচীর সাথে দীর্ঘদিনের সম্পৃক্ততা; কখনো সাধারণ সম্পাদক, কখনো সভাপতি হিসেবে দায়িত্ব পালন করেছেন।",
 c2h:"পিরোজপুর নাট্যচক্র", c2p:"সাধারণ সম্পাদক হিসেবে দীর্ঘদিন দায়িত্ব পালন; নাটক মঞ্চস্থ করেছেন, অভিনয় করেছেন, নির্দেশনা দিয়েছেন।",
 c3h:"খেলাঘর", c3p:"খেলাঘরের সাথে যুক্ত।", c4h:"পিরোজপুর টাউন ক্লাব", c4p:"ঐতিহ্যবাহী পিরোজপুর টাউন ক্লাবের সাথে জড়িত।",
 m_tag:"অতীত, বর্তমান ও আগামীর পথে", m_title:"সময় বদলায়, স্মৃতি থেকে যায়", m_sub:"জীবনের নানা সময়ের পথচলা, বিশেষ মুহূর্ত, প্রিয় মানুষ এবং উল্লেখযোগ্য অভিজ্ঞতার কিছু আলোকচিত্র।\nসময়ের সঙ্গে যুক্ত হওয়া প্রতিটি ছবিই এখানে হয়ে থাকবে এক একটি গল্প।",
 g_tag:"স্মৃতি", g_title:"স্মৃতির পৃষ্ঠা", g_sub:"পুরনো দিনের ছবি ও মুহূর্ত — অ্যাডমিন প্যানেল থেকে যুক্ত হবে", m_ph:"স্মৃতির ছবি এখানে যুক্ত হবে",
 m_all:"সব ছবি দেখুন", m_back:"← সকল ছবির পেইজে ফিরে যান", m_prev:"আগের ছবি", m_next:"পরের ছবি", m_empty:"এখনো কোনো ছবি যোগ হয়নি।", m_missing:"ছবির গ্রুপটি পাওয়া যায়নি।",
 sh_tag:"অনলাইন শপ", sh_title:"কাগজের ঘর", sh_sub:"কাগজ, কলম, পেন্সিল, রাবারসহ সব ধরনের স্টেশনারী — এখন অনলাইনে",
 k1:"কাগজ", k2:"কলম", k3:"পেন্সিল", k4:"রাবার", k5:"আরও সব",
 sample:"নমুনা", p1:"নমুনা পণ্য — কাগজ", p2:"নমুনা পণ্য — কলম", p3:"নমুনা পণ্য — পেন্সিল", p4:"নমুনা পণ্য — রাবার", price:"দাম যোগ হবে", cart:"কার্টে যোগ করুন",
 sh_note:"এগুলো শুধু ডিজাইন দেখানোর নমুনা। আসল পণ্য অ্যাডমিন প্যানেল থেকে যোগ হবে।",
 ct_tag:"কথা বলুন", ct_title:"যোগাযোগ", ct_sub:"যেকোনো প্রয়োজনে যোগাযোগ করুন", ct_phone:"মোবাইল", ct_mail:"ইমেইল", ct_addr:"ঠিকানা", ct_addr_v:"পিরোজপুর (বিস্তারিত ঠিকানা পরে যুক্ত হবে)",
 f_name:"আপনার নাম", f_contact:"মোবাইল বা ইমেইল", f_msg:"আপনার বার্তা লিখুন", f_send:"বার্তা পাঠান", f_demo:"এটি নমুনা পেজ — ফর্ম এখনো চালু হয়নি।",
 foot:"মোহাম্মদ খালিদ আবু, পিরোজপুর। সর্বস্বত্ব সংরক্ষিত।"
},
en:{
 phone:"01716 433929", n_home:"Home", n_about:"About Me", n_culture:"Social Activities", n_memory:"Memories", n_shop:"Kagoj-er Ghor", n_contact:"Contact",
 eyebrow:"My profession, my responsibility", name:"Mohammad Khalid Abu", role:"Journalist & Businessman",
 lead:"I see journalism not merely as a profession, but as a way of fulfilling my duty to society and its people. I want to keep working with truthfulness and courage.", h_title:"I want to speak the truth,\nand stand beside people",
 b_about:"About me", b_shop:"Visit the shop", photo:"Abu Bhai's photo will be placed here",
 s1n:"1957", s1t:"Born — Pirojpur", s2n:"15 years", s2t:"Lived in Japan", s3n:"7 years", s3t:"Ran the family garments business",
 a_tag:"INTRODUCTION", a_title:"About Me", a_sub:"A short introduction to life, education and career",
 a_h1:"In brief", a_p1:"Mohammad Khalid Abu was born in 1957 in Pirojpur. A journalist by profession, he is also a businessman.", a_p2:"He is currently associated with Prothom Alo / Manab Zamin and with the Pirojpur District Press Club.",
 a_h2:"Journey", t1b:"Education", t1s:"Pirojpur Government Boys' School; Pirojpur Hossain Shaheed Suhrawardy College",
 t2b:"Garments business", t2s:"Looked after the family garments business for 7 years", t3b:"Life abroad", t3s:"Lived in Japan for 15 years", t4b:"Journalism", t4s:"Worked with various newspapers over time; currently Prothom Alo / Manab Zamin",
 c_tag:"CULTURE & SOCIETY", c_title:"Cultural Activities", c_sub:"A long journey with music, theatre and social organisations",
 c1h:"Bangladesh Udichi", c1p:"Long associated with Pirojpur District Udichi, having served as General Secretary and as President at different times.",
 c2h:"Pirojpur Natyachakra", c2p:"Served as General Secretary for many years; staged plays, acted and directed.",
 c3h:"Khelaghar", c3p:"Associated with Khelaghar.", c4h:"Pirojpur Town Club", c4p:"Involved with the historic Pirojpur Town Club.",
 m_tag:"Past, present and the road ahead", m_title:"Time changes, memories remain", m_sub:"Some photographs of journeys through different times of life, special moments, loved ones and notable experiences.\nEvery picture added over time will remain here as a story of its own.",
 g_tag:"MEMORIES", g_title:"Memories", g_sub:"Photos and moments from earlier days — to be added from the admin panel", m_ph:"Memory photos will be added here",
 m_all:"View all photos", m_back:"← Back to all photos", m_prev:"Previous photos", m_next:"Next photos", m_empty:"No photos have been added yet.", m_missing:"This photo group was not found.",
 sh_tag:"ONLINE SHOP", sh_title:"Kagoj-er Ghor", sh_sub:"Paper, pens, pencils, erasers and every kind of stationery — now online",
 k1:"Paper", k2:"Pens", k3:"Pencils", k4:"Erasers", k5:"More",
 sample:"Sample", p1:"Sample product — Paper", p2:"Sample product — Pen", p3:"Sample product — Pencil", p4:"Sample product — Eraser", price:"Price to be added", cart:"Add to cart",
 sh_note:"These are only samples to show the design. Real products will be added from the admin panel.",
 ct_tag:"GET IN TOUCH", ct_title:"Contact", ct_sub:"Reach out for anything you need", ct_phone:"Mobile", ct_mail:"Email", ct_addr:"Address", ct_addr_v:"Pirojpur (full address to be added later)",
 f_name:"Your name", f_contact:"Mobile or email", f_msg:"Write your message", f_send:"Send message", f_demo:"This is a sample page — the form is not live yet.",
 foot:"Mohammad Khalid Abu, Pirojpur. All rights reserved."
}};
var cur="bn";
function setLang(l){
  cur=l; var d=T[l];
  document.documentElement.lang=l;
  document.querySelectorAll("[data-i18n]").forEach(function(e){ if(d[e.dataset.i18n]!==undefined) e.textContent=d[e.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-ph]").forEach(function(e){ e.placeholder=d[e.dataset.i18nPh]; });
  document.querySelectorAll(".lang button").forEach(function(b){ b.classList.toggle("on", b.dataset.lang===l); });
  var msg=document.getElementById("formMsg"); if(msg) msg.textContent="";
  document.querySelectorAll("[data-i18n-label]").forEach(function(e){ e.setAttribute("aria-label", d[e.dataset.i18nLabel]); });
  try{ localStorage.setItem("mkh-lang",l); }catch(e){}
  document.dispatchEvent(new CustomEvent("mkh:lang",{detail:l}));
}
document.querySelectorAll(".lang button").forEach(function(b){ b.addEventListener("click",function(){ setLang(b.dataset.lang); }); });
var saved="bn"; try{ saved=localStorage.getItem("mkh-lang")||"bn"; }catch(e){}
setLang(saved==="en"?"en":"bn");

/* মোবাইল মেনু */
var menu=document.getElementById("menu");
document.getElementById("burger").addEventListener("click",function(){ menu.classList.toggle("open"); });
menu.querySelectorAll("a").forEach(function(a){ a.addEventListener("click",function(){ menu.classList.remove("open"); }); });

/* নমুনা ফর্ম */
var form=document.getElementById("form");
if(form) form.addEventListener("submit",function(e){ e.preventDefault(); document.getElementById("formMsg").textContent=T[cur].f_demo; });
