// assets/js/festivals.js
// Keys must match the SVG element ids (underscores instead of spaces):
const FESTIVALS_BY_STATE = {
  Andhra_Pradesh: [
    { name: "Ugadi", month: "April", date: "varies (Mar/Apr)", desc: "Telugu New Year with festive foods and rituals.", img: "assets/images/festivals/ugadi.png" },
    { name: "Tirumala Brahmotsavam", month: "September", date: "varies", desc: "Major procession and temple festival at Tirupati.", img: "assets/images/festivals/thirumala.png" }
  ],
  Arunachal_Pradesh: [
    { name: "Losar", month: "February", date: "varies", desc: "Tibetan New Year celebrated in Tawang and other districts.", img: "assets/images/festivals/losar.png" },
    { name: "Solung", month: "September", date: "varies", desc: "Adi tribe harvest festival with dances.", img: "assets/images/festivals/solung.png" }
  ],
  Assam: [
    { name: "Bihu (Rongali)", month: "April", date: "Apr", desc: "Assamese spring harvest festival with Bihu dance.", img: "assets/images/festivals/bihu.png" },
    { name: "Ambubachi Mela", month: "June", date: "Jun", desc: "Fertility festival at Kamakhya temple.", img: "assets/images/festivals/ambubachi.png" }
  ],
  Bihar: [
    { name: "Chhath Puja", month: "November", date: "Oct/Nov", desc: "Sun-worship festival at river ghats.", img: "assets/images/festivals/chhath.png" },
    { name: "Sonepur Mela", month: "November", date: "Nov", desc: "Large cattle & cultural fair.", img: "assets/images/festivals/sonepur.png" }
  ],
  Chhattisgarh: [
    { name: "Bastar Dussehra", month: "October", date: "Oct", desc: "Unique tribal Dussehra in Bastar.", img: "assets/images/festivals/bastar.png" }
  ],
  Goa: [
    { name: "Carnival", month: "February", date: "Feb", desc: "Colorful parades & music (Goa Carnival).", img: "assets/images/festivals/carnival.png" },
    { name: "Shigmo", month: "March", date: "Mar", desc: "Spring folk festival with dances.", img: "assets/images/festivals/shigmo.png" }
  ],
  Gujarat: [
    { name: "Navratri (Garba)", month: "October", date: "Sep/Oct", desc: "Nine nights of Garba and Dandiya.", img: "assets/images/festivals/navrathri.png" },
    { name: "Uttarayan (Kite)", month: "January", date: "Jan 14", desc: "Kite festival celebrated across Gujarat.", img: "assets/images/festivals/uttarayan.png" }
  ],
  Haryana: [
    { name: "Teej", month: "August", date: "Aug", desc: "Monsoon festival celebrated by women with swings and songs.", img: "assets/images/festivals/teej.png" }
  ],
  Himachal_Pradesh: [
    { name: "Kullu Dussehra", month: "October", date: "Oct", desc: "Valley-wide Dussehra celebrations in Kullu.", img: "assets/images/festivals/kullu.png" }
  ],
  Jharkhand: [
    { name: "Sarhul", month: "April", date: "Mar/Apr", desc: "Tribal spring festival marking new year.", img: "assets/images/festivals/sarhul.png" }
  ],
  Karnataka: [
    { name: "Mysuru Dasara", month: "October", date: "Sep/Oct", desc: "Royal Dasara with grand procession (Jumbo Savari).", img: "assets/images/festivals/mysuru.png" },
    { name: "Karaga (Bengaluru)", month: "April", date: "Apr", desc: "Ancient night procession in Bengaluru.", img: "assets/images/festivals/karaga.png" }
  ],
  Kerala: [
    { name: "Onam", month: "August", date: "Aug/Sep", desc: "Harvest festival with Pookalam and Onasadya.", img: "assets/images/festivals/onam.png" },
    { name: "Thrissur Pooram", month: "April", date: "Apr/May", desc: "Temple festival with caparisoned elephants.", img: "assets/images/festivals/thrissur.png" }
  ],
  Madhya_Pradesh: [
    { name: "Khajuraho Dance Festival", month: "February", date: "Feb", desc: "Classical dance festival at Khajuraho temples.", img: "assets/images/festivals/khajuraho.png" }
  ],
  Maharashtra: [
    { name: "Ganesh Chaturthi", month: "September", date: "Aug/Sep", desc: "10-day celebration welcoming Lord Ganesha.", img: "assets/images/festivals/chathutri.png" },
    { name: "Gudi Padwa", month: "April", date: "Mar/Apr", desc: "Maharashtrian New Year.", img: "assets/images/festivals/gudi.png" }
  ],
  Manipur: [
    { name: "Yaoshang", month: "March", date: "Mar", desc: "Five-day festival similar to Holi with traditional dances.", img: "assets/images/festivals/yaoshang.png" }
  ],
  Meghalaya: [
    { name: "Wangala", month: "November", date: "Nov", desc: "100 drums festival of the Garo tribe.", img: "assets/images/festivals/wangala.png" }
  ],
  Mizoram: [
    { name: "Chapchar Kut", month: "March", date: "Mar", desc: "Post-jhum spring festival with music and dance.", img: "assets/images/festivals/chapchar.png" }
  ],
  Nagaland: [
    { name: "Hornbill Festival", month: "December", date: "Dec", desc: "Festival of festivals showcasing Naga heritage.", img: "assets/images/festivals/hornbill.png" }
  ],
  Odisha: [
    { name: "Rath Yatra", month: "July", date: "Jun/Jul", desc: "Jagannath's chariot festival at Puri.", img: "assets/images/festivals/rath.png" },
    { name: "Konark Dance Festival", month: "December", date: "Dec", desc: "Classical dances near the Sun Temple.", img: "assets/images/festivals/konark.png" }
  ],
  Punjab: [
    { name: "Baisakhi", month: "April", date: "Apr", desc: "Harvest festival and Sikh New Year.", img: "assets/images/festivals/baisakthi.png" }
  ],
  Rajasthan: [
    { name: "Pushkar Camel Fair", month: "November", date: "Nov", desc: "Camel Fair & cultural events.", img: "assets/images/festivals/pushkar.png" },
    { name: "Desert Festival (Jaisalmer)", month: "February", date: "Feb", desc: "Folk competitions & camel races.", img: "assets/images/festivals/desert.png" }
  ],
  Sikkim: [
    { name: "Saga Dawa / Losar", month: "June / February", date: "varies", desc: "Important Buddhist festivals in Sikkim.", img: "assets/images/festivals/saga.png" }
  ],
  Tamil_Nadu: [
    { name: "Pongal", month: "January", date: "Jan", desc: "Four-day harvest festival with kolams & Pongal.", img: "assets/images/festivals/pongal.png" },
    { name: "Chithirai Festival (Madurai)", month: "April", date: "Apr", desc: "Temple celebration & processions in Madurai.", img: "assets/images/festivals/chithirai.png" }
  ],
  Telangana: [
    { name: "Bathukamma", month: "September", date: "Sep/Oct", desc: "Floral festival celebrated by women.", img: "assets/images/festivals/bathukamma.png" }
  ],
  Tripura: [
    { name: "Kharchi Puja", month: "July", date: "Jul", desc: "Major ritual festival in Agartala.", img: "assets/images/festivals/kharchi.png" }
  ],
  Uttar_Pradesh: [
    { name: "Holi (Mathura/Barsana)", month: "March", date: "Mar", desc: "Festival of colours with unique Lathmar Holi traditions.", img: "assets/images/festivals/holi.png" },
    { name: "Kumbh Mela (Prayagraj)", month: "Varies", date: "Varies", desc: "Largest religious gathering for holy dip.", img: "assets/images/festivals/kumbh.png" }
  ],
  Uttarakhand: [
    { name: "Ganga Dussehra", month: "June", date: "May/Jun", desc: "Pilgrimage and worship on river banks.", img: "assets/images/festivals/ganga.png" }
  ],
  West_Bengal: [
    { name: "Durga Puja", month: "October", date: "Oct", desc: "Iconic pandals, processions & cultural events.", img: "assets/images/festivals/durgapuja.png" }
  ],

  // Union Territories
  Andaman_and_Nicobar_Islands: [
    { name: "Island Tourism Festival", month: "January", date: "Jan", desc: "Cultural events across islands.", img: "assets/images/festivals/island.png" }
  ],
  Chandigarh: [
    { name: "Rose Festival", month: "February", date: "Feb", desc: "Rose exhibition & cultural shows.", img: "assets/images/festivals/rose.png" }
  ],
  Dadra_and_Nagar_Haveli_and_Daman_and_Diu: [
    { name: "Local Festivals", month: "Varies", date: "Varies", desc: "Regional & coastal celebrations.", img: "assets/images/festivals/local.png" }
  ],
  Delhi: [
    { name: "Republic Day Parade", month: "January", date: "Jan 26", desc: "National parade on Rajpath.", img: "assets/images/festivals/republic.png" },
    { name: "Diwali (Pan-India)", month: "October", date: "Oct/Nov", desc: "Festival of lights celebrated across the city.", img: "assets/images/festivals/diwali.png" }
  ],
  Jammu_and_Kashmir: [
    { name: "Tulip Festival (Srinagar)", month: "April", date: "Apr", desc: "Tulip bloom festival in Srinagar.", img: "assets/images/festivals/tulip.png" },
    { name: "Hemis (in Leh/Ladakh)", month: "June/July", date: "Jun/Jul", desc: "Monastery festival with mask dances.", img: "assets/images/festivals/hemisl.png" }
  ],
  Ladakh: [
    { name: "Hemis Festival", month: "July", date: "Jul", desc: "Monastic festival with Cham dances.", img: "assets/images/festivals/hemisl.png" }
  ],
  Lakshadweep: [
    { name: "Minicoy Festival", month: "December", date: "Dec", desc: "Island cultural & sea-sports events.", img: "assets/images/festivals/minicoy.png" }
  ],
  Puducherry: [
    { name: "Masi Magam", month: "February/March", date: "Feb/Mar", desc: "Temple car festival & coastal rituals.", img: "assets/images/festivals/masi.png" }
  ]
};

// ensure fallback All exists
if (!FESTIVALS_BY_STATE.All) {
  FESTIVALS_BY_STATE.All = [{ name: "Diwali", month: "October", date: "Oct/Nov", desc: "Festival of lights", img: "assets/images/festivals/diwali.png" }];
}
