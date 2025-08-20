/* // assets/js/festivals.js

// Festivals grouped by state/UT (keys match india_states.geojson exactly)
const FESTIVALS_BY_STATE = {
  "Andaman & Nicobar Island": [
    { name: "Island Tourism Festival", month: "January", date: "Varies", desc: "Cultural extravaganza showcasing local life.", img: "assets/images/festivals/island.png" }
  ],
  "Andhra Pradesh": [
    { name: "Ugadi", month: "March/April", date: "Varies", desc: "Telugu New Year celebrated with festive foods and rituals.", img: "assets/images/festivals/ugadi.png" },
    { name: "Tirumala Brahmotsavam", month: "September", date: "Varies", desc: "Grand temple festival at Tirupati.", img: "assets/images/festivals/tirumala.png" }
  ],
  "Arunanchal Pradesh": [
    { name: "Losar", month: "February", date: "Varies", desc: "Tibetan New Year celebrated in Tawang.", img: "assets/images/festivals/losar.png" },
    { name: "Solung", month: "September", date: "Varies", desc: "Adi tribe’s harvest festival with dances.", img: "assets/images/festivals/solung.png" }
  ],
  "Assam": [
    { name: "Bihu (Rongali)", month: "April", date: "Varies", desc: "Spring harvest festival with traditional Bihu dance.", img: "assets/images/festivals/bihu.png" },
    { name: "Ambubachi Mela", month: "June", date: "Varies", desc: "Fertility festival at Kamakhya Temple.", img: "assets/images/festivals/ambubachi.png" }
  ],
  "Bihar": [
    { name: "Chhath Puja", month: "October/November", date: "Varies", desc: "Sun God worship with rituals in rivers and ponds.", img: "assets/images/festivals/chhath.png" }
  ],
  "Chandigarh": [
    { name: "Rose Festival", month: "February", date: "Varies", desc: "Exhibition of roses with cultural shows.", img: "assets/images/festivals/rose.png" }
  ],
  "Chhattisgarh": [
    { name: "Bastar Dussehra", month: "October", date: "Varies", desc: "Unique tribal Dussehra celebration in Bastar.", img: "assets/images/festivals/bastar.png" }
  ],
  "Dadara & Nagar Havelli": [
    { name: "Navratri", month: "October", date: "Varies", desc: "Garba and Dandiya nights celebrated widely.", img: "assets/images/festivals/navratri_dnhdd.png" }
  ],
  "Daman & Diu": [
    { name: "Navratri", month: "October", date: "Varies", desc: "Garba and Dandiya nights celebrated widely.", img: "assets/images/festivals/navratri_dnhdd.png" }
  ],
  "Goa": [
    { name: "Goa Carnival", month: "February", date: "Varies", desc: "Colorful street parades, music, and dance.", img: "assets/images/festivals/carnival.png" }
  ],
  "Gujarat": [
    { name: "Navratri", month: "October", date: "Varies", desc: "Nine nights of Garba and Dandiya celebrations.", img: "assets/images/festivals/navratri.png" },
    { name: "Uttarayan", month: "January", date: "14 Jan", desc: "International kite festival celebrated across Gujarat.", img: "assets/images/festivals/uttarayan.png" }
  ],
  "Haryana": [
    { name: "Teej", month: "July/August", date: "Varies", desc: "Festival of swings and folk songs for women.", img: "assets/images/festivals/teej.png" }
  ],
  "Himachal Pradesh": [
    { name: "Kullu Dussehra", month: "October", date: "Varies", desc: "Week-long fair in Kullu valley.", img: "assets/images/festivals/kullu.png" }
  ],
  "Jammu & Kashmir": [
    { name: "Hemis Festival", month: "July", date: "Varies", desc: "Buddhist festival with masked dances.", img: "assets/images/festivals/hemis.png" }
  ],
  "Jharkhand": [
    { name: "Karma Festival", month: "August/September", date: "Varies", desc: "Tribal festival worshipping the Karam tree.", img: "assets/images/festivals/karma.png" }
  ],
  "Karnataka": [
    { name: "Mysuru Dasara", month: "October", date: "Varies", desc: "Royal procession with elephants in Mysuru.", img: "assets/images/festivals/mysore_dasara.png" }
  ],
  "Kerala": [
    { name: "Onam", month: "August/September", date: "Varies", desc: "Harvest festival with Vallamkali (boat race).", img: "assets/images/festivals/onam.png" }
  ],
  "Lakshadweep": [
    { name: "Id-ul-Fitr", month: "April/May", date: "Varies", desc: "Island-wide celebration marking Ramadan end.", img: "assets/images/festivals/eid.png" }
  ],
  "Madhya Pradesh": [
    { name: "Khajuraho Dance Festival", month: "February", date: "Varies", desc: "Classical dance performances at Khajuraho temples.", img: "assets/images/festivals/khajuraho.png" }
  ],
  "Maharashtra": [
    { name: "Ganesh Chaturthi", month: "August/September", date: "Varies", desc: "Worship of Lord Ganesha with idols and visarjan.", img: "assets/images/festivals/ganesh.png" }
  ],
  "Manipur": [
    { name: "Yaoshang", month: "March", date: "Varies", desc: "Five-day Holi-like festival with sports and music.", img: "assets/images/festivals/yaoshang.png" }
  ],
  "Meghalaya": [
    { name: "Wangala", month: "November", date: "Varies", desc: "Harvest festival of the Garo tribe with drums and dance.", img: "assets/images/festivals/wangala.png" }
  ],
  "Mizoram": [
    { name: "Chapchar Kut", month: "March", date: "Varies", desc: "Spring festival with bamboo dance.", img: "assets/images/festivals/chapchar.png" }
  ],
  "Nagaland": [
    { name: "Hornbill Festival", month: "December", date: "1–10 Dec", desc: "Showcase of Naga tribes’ culture and traditions.", img: "assets/images/festivals/hornbill.png" }
  ],
  "NCT of Delhi": [
    { name: "Republic Day Parade", month: "January", date: "26 Jan", desc: "Grand parade at Rajpath.", img: "assets/images/festivals/republic.png" }
  ],
  "Puducherry": [
    { name: "Masi Magam", month: "February/March", date: "Varies", desc: "Temple car festival and rituals on beaches.", img: "assets/images/festivals/masi.png" }
  ],
  "Punjab": [
    { name: "Baisakhi", month: "April", date: "13/14 Apr", desc: "Harvest festival marking Sikh New Year.", img: "assets/images/festivals/baisakhi.png" }
  ],
  "Rajasthan": [
    { name: "Pushkar Camel Fair", month: "November", date: "Varies", desc: "Livestock fair with cultural performances.", img: "assets/images/festivals/pushkar.png" }
  ],
  "Sikkim": [
    { name: "Pang Lhabsol", month: "August/September", date: "Varies", desc: "Festival of unity and Mt. Kanchenjunga worship.", img: "assets/images/festivals/pang.png" }
  ],
  "Tamil Nadu": [
    { name: "Pongal", month: "January", date: "14–17 Jan", desc: "Harvest festival thanking Sun God.", img: "assets/images/festivals/pongal.png" }
  ],
  "Telangana": [
    { name: "Bathukamma", month: "September/October", date: "Varies", desc: "Floral festival of Telangana women.", img: "assets/images/festivals/bathukamma.png" }
  ],
  "Tripura": [
    { name: "Kharchi Puja", month: "July", date: "Varies", desc: "Rituals for 14 deities in Agartala.", img: "assets/images/festivals/kharchi.png" }
  ],
  "Uttar Pradesh": [
    { name: "Kumbh Mela", month: "Varies", date: "Every 12 years", desc: "Largest Hindu gathering at Sangam.", img: "assets/images/festivals/kumbh.png" }
  ],
  "Uttarakhand": [
    { name: "Kumbh Mela (Haridwar)", month: "Varies", date: "Every 12 years", desc: "Major religious fair at Haridwar ghats.", img: "assets/images/festivals/kumbh_haridwar.png" }
  ],
  "West Bengal": [
    { name: "Durga Puja", month: "October", date: "Varies", desc: "Biggest celebration with idols, pandals, and immersion.", img: "assets/images/festivals/durga.png" }
  ],
  "Odisha": [
    { name: "Rath Yatra", month: "June/July", date: "Varies", desc: "Chariot festival of Lord Jagannath in Puri.", img: "assets/images/festivals/rath.png" }
  ]
};

// fallback
if (!FESTIVALS_BY_STATE.All) {
  FESTIVALS_BY_STATE.All = [
    { name: "Diwali", month: "October/November", date: "Varies", desc: "Festival of lights across India.", img: "assets/images/festivals/diwali.png" }
  ];
}

function showFestivalForState(stateName) {
  const festivals = FESTIVALS_BY_STATE[stateName] || FESTIVALS_BY_STATE.All;
  const container = document.getElementById("festival-info");
  if (!container) return;

  container.innerHTML = "";

  if (!festivals.length) {
    container.innerHTML = `<p>No festivals found for ${stateName}</p>`;
    return;
  }

  festivals.forEach(festival => {
    const div = document.createElement("div");
    div.className = "festival-card";
    div.innerHTML = `
      <img src="${festival.img}" alt="${festival.name}" class="festival-img" />
      <h3>${festival.name}</h3>
      <p><strong>Month:</strong> ${festival.month}</p>
      <p><strong>Date:</strong> ${festival.date}</p>
      <p>${festival.desc}</p>
    `;
    container.appendChild(div);
  });
  console.log("Looking up festivals for:", stateName);
console.log("Available keys:", Object.keys(FESTIVALS_BY_STATE));

}
 */
/*const FESTIVALS_BY_STATE = {
  "Andaman & Nicobar Island": [
    {
      name: "Island Tourism Festival",
      month: "January",
      description: "A cultural extravaganza featuring local art, music, and cuisine to promote the rich heritage of the islands.",
      funFacts: "Lasts for around 10 days with open-air concerts and beach carnivals.",
      features: "Traditional dances, handicraft stalls, food fairs, water sports."
      
    }
  ],
  "Andhra Pradesh": [
    {
      name: "Ugadi",
      month: "March–April",
      description: "Ugadi marks the Telugu New Year and is celebrated with prayers, special dishes like Ugadi Pachadi, and cultural programs.",
      funFacts: "Ugadi Pachadi has six tastes, symbolizing six emotions of life.",
      features: "Rangoli designs, new clothes, festive meals."
    },
    {
      name: "Sankranti",
      month: "January",
      description: "A harvest festival marked with kite flying, bonfires, and cattle decorations.",
      funFacts: "Kite flying competitions are a highlight during Sankranti.",
      features: "Bonfires, rangoli, sweets made of sesame and jaggery."
    }
  ],
  "Arunachal Pradesh": [
    {
      name: "Losar",
      month: "February–March",
      description: "The Tibetan New Year celebrated with prayers, dances, and traditional feasts.",
      funFacts: "People clean their homes to welcome positive energy.",
      features: "Folk dances, yak processions, traditional costumes."
    },
    {
      name: "Solung",
      month: "September",
      description: "An agricultural festival of the Adi tribe thanking deities for harvest.",
      funFacts: "Ritual animal sacrifices are performed during Solung.",
      features: "Folk music, community feasts, rituals."
    }
  ],
  "Assam": [
    {
      name: "Bihu",
      month: "April",
      description: "The Assamese New Year and harvest festival, celebrated with dance, music, and feasting.",
      funFacts: "There are three Bihus: Rongali, Kongali, and Bhogali.",
      features: "Bihu dance, feasting, traditional Assamese attire."
    }
  ],
  "Bihar": [
    {
      name: "Chhath Puja",
      month: "October–November",
      description: "A festival dedicated to the Sun God, celebrated with prayers at rivers and lakes.",
      funFacts: "Devotees stand in water and offer prayers during sunrise and sunset.",
      features: "Arghya rituals, fasting, folk songs."
    }
  ],
  "Chandigarh": [
    {
      name: "Baisakhi",
      month: "April",
      description: "Marks the harvest of rabi crops and is celebrated with bhangra, fairs, and feasting.",
      funFacts: "It also commemorates the formation of Khalsa in Sikhism.",
      features: "Dance, fairs, Punjabi cuisine."
    }
  ],
  "Chhattisgarh": [
    {
      name: "Bastar Dussehra",
      month: "September–October",
      description: "A 75-day-long tribal festival in Bastar with unique rituals and traditions.",
      funFacts: "Longest Dussehra celebration in the world.",
      features: "Processions, tribal dances, rituals."
    }
  ],
  "Delhi": [
    {
      name: "Diwali",
      month: "October–November",
      description: "Festival of Lights celebrated with diyas, fireworks, and sweets.",
      funFacts: "Delhi markets glow with special Diwali bazaars.",
      features: "Lighting, fireworks, traditional sweets."
    }
  ],
  "Goa": [
    {
      name: "Carnival",
      month: "February",
      description: "A colorful festival with parades, music, and dancing on the streets of Goa.",
      funFacts: "Introduced during Portuguese rule in the 18th century.",
      features: "Parades, costumes, floats, live music."
    }
  ],
  "Gujarat": [
    {
      name: "Navratri",
      month: "September–October",
      description: "Nine-night festival dedicated to Goddess Durga, celebrated with Garba and Dandiya dances.",
      funFacts: "Gujarat hosts the world’s largest dance festival during Navratri.",
      features: "Garba dance, colorful costumes, devotional songs."
    }
  ],
  "Haryana": [
    {
      name: "Teej",
      month: "July–August",
      description: "Festival dedicated to Goddess Parvati, celebrated by married women.",
      funFacts: "Women swing decorated swings while singing folk songs.",
      features: "Henna, folk songs, swings."
    }
  ],
  "Himachal Pradesh": [
    {
      name: "Kullu Dussehra",
      month: "October",
      description: "Unlike other parts of India, it starts when Dussehra ends elsewhere.",
      funFacts: "Over 200 deities are brought in processions.",
      features: "Processions, folk dances, fairs."
    }
  ],
  "Jammu & Kashmir": [
    {
      name: "Tulip Festival",
      month: "April",
      description: "Celebrates the blooming of tulips in Asia’s largest tulip garden in Srinagar.",
      funFacts: "Over 60 varieties of tulips are displayed.",
      features: "Flower shows, Kashmiri handicrafts, cultural programs."
    }
  ],
  "Jharkhand": [
    {
      name: "Sarhul",
      month: "March–April",
      description: "Spring festival of the tribal communities dedicated to the Sal tree.",
      funFacts: "The Sal flower is worshipped as a symbol of nature’s renewal.",
      features: "Dances, drums, tribal rituals."
    }
  ],
  "Karnataka": [
    {
      name: "Mysore Dasara",
      month: "October",
      description: "A royal festival celebrated in Mysore with grand processions.",
      funFacts: "Mysore Palace is illuminated with nearly 100,000 bulbs.",
      features: "Jumbo Savari, cultural programs, fairs."
    }
  ],
  "Kerala": [
    {
      name: "Onam",
      month: "August–September",
      description: "A grand harvest festival welcoming King Mahabali with boat races, floral carpets, and feasts.",
      funFacts: "Onam Sadhya can include over 26 dishes served on banana leaves.",
      features: "Snake boat race, Kathakali dance, tiger dance."
    }
  ],
  "Ladakh": [
    {
      name: "Hemis Festival",
      month: "June–July",
      description: "Celebrates Guru Padmasambhava with masked dances and rituals.",
      funFacts: "Held in Hemis Monastery, Ladakh’s largest.",
      features: "Cham dance, thangka display, rituals."
    }
  ],
  "Madhya Pradesh": [
    {
      name: "Khajuraho Dance Festival",
      month: "February–March",
      description: "Classical dance performances against the backdrop of Khajuraho temples.",
      funFacts: "Dancers from across India showcase Bharatanatyam, Kathak, Odissi.",
      features: "Dance, light shows, art exhibitions."
    }
  ],
  "Maharashtra": [
    {
      name: "Ganesh Chaturthi",
      month: "August–September",
      description: "Festival celebrating the birth of Lord Ganesha with idols, prayers, and immersion ceremonies.",
      funFacts: "Public celebrations were popularized by Lokmanya Tilak.",
      features: "Pandals, aarti, visarjan processions."
    }
  ],
  "Manipur": [
    {
      name: "Yaoshang",
      month: "March",
      description: "Spring festival similar to Holi with dance and sports.",
      funFacts: "Thabal Chongba (folk dance) is unique to Manipur.",
      features: "Color play, folk dance, sports."
    }
  ],
  "Meghalaya": [
    {
      name: "Wangala Festival",
      month: "November",
      description: "Harvest festival of the Garo tribe honoring the Sun God.",
      funFacts: "Drum beats of 100 drums mark the celebration.",
      features: "Dance, music, rituals."
    }
  ],
  "Mizoram": [
    {
      name: "Chapchar Kut",
      month: "March",
      description: "Spring festival celebrated with folk dances, music, and feasts.",
      funFacts: "Celebrated after clearing forests for cultivation.",
      features: "Cheraw dance, traditional costumes, music."
    }
  ],
  "Nagaland": [
    {
      name: "Hornbill Festival",
      month: "December",
      description: "The ‘Festival of Festivals’ showcasing Naga heritage and culture.",
      funFacts: "Named after the hornbill bird, revered in Naga folklore.",
      features: "Tribal dances, crafts, traditional sports."
    }
  ],
  "Odisha": [
    {
      name: "Rath Yatra",
      month: "June–July",
      description: "Chariot festival of Lord Jagannath in Puri.",
      funFacts: "Millions of devotees pull giant chariots.",
      features: "Chariots, rituals, devotional singing."
    }
  ],
  "Puducherry": [
    {
      name: "Bastille Day",
      month: "July 14",
      description: "French National Day celebrated with parades and cultural shows.",
      funFacts: "Reflects Puducherry’s French colonial heritage.",
      features: "Parades, French cultural events, fireworks."
    }
  ],
  "Punjab": [
    {
      name: "Lohri",
      month: "January",
      description: "Winter harvest festival celebrated with bonfires, songs, and dance.",
      funFacts: "Peanuts, popcorn, and jaggery are traditional Lohri foods.",
      features: "Bonfire, Bhangra, Gidda dance."
    }
  ],
  "Rajasthan": [
    {
      name: "Desert Festival",
      month: "February",
      description: "A cultural extravaganza in Jaisalmer showcasing desert life.",
      funFacts: "Competitions include turban tying and longest mustache.",
      features: "Camel races, folk dances, puppet shows."
    }
  ],
  "Sikkim": [
    {
      name: "Losar",
      month: "February–March",
      description: "Tibetan New Year with prayers, rituals, and celebrations.",
      funFacts: "Monasteries light butter lamps to welcome the new year.",
      features: "Cham dances, feasts, prayers."
    }
  ],
  "Tamil Nadu": [
    {
      name: "Pongal",
      month: "January",
      description: "Harvest festival thanking the Sun God with special rituals.",
      funFacts: "The dish Pongal is cooked in earthen pots until it overflows.",
      features: "Kolam designs, bull-taming (Jallikattu), community feasts."
    }
  ],
  "Telangana": [
    {
      name: "Bathukamma",
      month: "September–October",
      description: "Floral festival celebrated by women of Telangana.",
      funFacts: "Women make flower stacks in seven concentric layers.",
      features: "Flower arrangements, folk songs, dance."
    }
  ],
  "Tripura": [
    {
      name: "Kharchi Puja",
      month: "July",
      description: "Worship of 14 deities with rituals and fairs.",
      funFacts: "Celebrated for seven days with tribal and Hindu customs.",
      features: "Processions, animal sacrifices, folk music."
    }
  ],
  "Uttar Pradesh": [
    {
      name: "Kumbh Mela",
      month: "January–March (once every 12 years)",
      description: "World’s largest spiritual gathering held on the Ganga’s banks.",
      funFacts: "Recognized by UNESCO as Intangible Cultural Heritage.",
      features: "Holy dips, sadhus, processions."
    }
  ],
  "Uttarakhand": [
    {
      name: "Nanda Devi Raj Jat",
      month: "Every 12 years (August–September)",
      description: "One of the longest religious processions in the world.",
      funFacts: "Trek spans 280 km across the Himalayas.",
      features: "Yatra, rituals, folk dances."
    }
  ],
  "West Bengal": [
    {
      name: "Durga Puja",
      month: "September–October",
      description: "The grandest festival of Bengal celebrating Goddess Durga.",
      funFacts: "UNESCO inscribed it as Intangible Cultural Heritage in 2021.",
      features: "Pandal hopping, idols, dhak drums."
    }
  ]
};

// showFestivalForState remains the same...
function showFestivalForState(stateName) {
  const panel = document.getElementById("statePanel");
  const title = document.getElementById("stateTitle");
  const list = document.getElementById("stateFestivals");

  // Show panel
  panel.classList.remove("hidden");

  // Update title
  title.textContent = stateName;

  // Clear existing festivals
  list.innerHTML = "";

  const festivals = FESTIVALS_BY_STATE[stateName];

  if (!festivals || festivals.length === 0) {
    list.innerHTML = `<p>No festivals available for ${stateName}</p>`;
    return;
  }

  festivals.forEach(festival => {
    const card = document.createElement("div");
    card.classList.add("festival-card");
    card.innerHTML = `
      <div class="text">
        <h3>${festival.name}</h3>
        <small class="muted">${festival.month}</small>
        <p>${festival.description}</p>
        <p><strong>Fun Fact:</strong> ${festival.funFacts}</p>
        <p><strong>Features:</strong> ${festival.features}</p>
      </div>
    `;
    list.appendChild(card);
  });
}

// Close button handler
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closePanel");
  const panel = document.getElementById("statePanel");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      panel.classList.add("hidden");
    });
  }
});*/

// assets/js/festivals.js

// Combined Festivals grouped by state/UT (keys match india_states.geojson exactly)
const FESTIVALS_BY_STATE = {
  "Andaman & Nicobar Island": [
    {
      name: "Island Tourism Festival",
      month: "January",
      date: "Varies",
      desc: "Cultural extravaganza showcasing local life.",
      img: "assets/images/festivals/island.png",
      description: "A cultural extravaganza featuring local art, music, and cuisine to promote the rich heritage of the islands.",
      funFacts: "Lasts for around 10 days with open-air concerts and beach carnivals.",
      features: "Traditional dances, handicraft stalls, food fairs, water sports."
    }
  ],
  "Andhra Pradesh": [
    {
      name: "Ugadi",
      month: "March–April",
      date: "Varies",
      desc: "Telugu New Year celebrated with festive foods and rituals.",
      img: "assets/images/festivals/ugadi.png",
      description: "Ugadi marks the Telugu New Year and is celebrated with prayers, special dishes like Ugadi Pachadi, and cultural programs.",
      funFacts: "Ugadi Pachadi has six tastes, symbolizing six emotions of life.",
      features: "Rangoli designs, new clothes, festive meals."
    },
    {
      name: "Tirumala Brahmotsavam",
      month: "September",
      date: "Varies",
      desc: "Grand temple festival at Tirupati.",
      img: "assets/images/festivals/tirumala.png",
      description: "An annual nine-day festival at the Tirumala Venkateswara Temple with chariot processions and rituals.",
      funFacts: "Thousands of devotees pull the chariot in a grand procession.",
      features: "Temple processions, sacred rituals, devotional songs."
    },
    {
      name: "Sankranti",
      month: "January",
      date: "14 Jan",
      desc: "Harvest festival marked with kite flying, bonfires, and cattle decorations.",
      img: "assets/images/festivals/sankranti.png",
      description: "Sankranti is a harvest festival marked with kite flying, bonfires, and cattle decorations.",
      funFacts: "Kite flying competitions are a highlight during Sankranti.",
      features: "Bonfires, rangoli, sweets made of sesame and jaggery."
    }
  ],
  "Arunachal Pradesh": [
    {
      name: "Losar",
      month: "February–March",
      date: "Varies",
      desc: "Tibetan New Year celebrated in Tawang.",
      img: "assets/images/festivals/losar.jpg",
      description: "The Tibetan New Year celebrated with prayers, dances, and traditional feasts.",
      funFacts: "People clean their homes to welcome positive energy.",
      features: "Folk dances, yak processions, traditional costumes."
    },
    {
      name: "Solung",
      month: "September",
      date: "Varies",
      desc: "Adi tribe’s harvest festival with dances.",
      img: "assets/images/festivals/solung.webp",
      description: "An agricultural festival of the Adi tribe thanking deities for harvest.",
      funFacts: "Ritual animal sacrifices are performed during Solung.",
      features: "Folk music, community feasts, rituals."
    }
  ],
  "Assam": [
    {
      name: "Bihu (Rongali)",
      month: "April",
      date: "Varies",
      desc: "Spring harvest festival with traditional Bihu dance.",
      img: "assets/images/festivals/bihu.webp",
      description: "The Assamese New Year and harvest festival, celebrated with dance, music, and feasting.",
      funFacts: "There are three Bihus: Rongali, Kongali, and Bhogali.",
      features: "Bihu dance, feasting, traditional Assamese attire."
    },
    {
      name: "Ambubachi Mela",
      month: "June",
      date: "Varies",
      desc: "Fertility festival at Kamakhya Temple.",
      img: "assets/images/festivals/ambubachi.jpg",
      description: "A fertility festival held at Kamakhya Temple, celebrating the menstrual cycle of the Goddess.",
      funFacts: "Devotees believe the temple is closed for three days during the mela.",
      features: "Religious gatherings, rituals, spiritual fervor."
    }
  ],
  "Bihar": [
    {
      name: "Chhath Puja",
      month: "October–November",
      date: "Varies",
      desc: "Sun God worship with rituals in rivers and ponds.",
      img: "assets/images/festivals/chhath.jpg",
      description: "A festival dedicated to the Sun God, celebrated with prayers at rivers and lakes.",
      funFacts: "Devotees stand in water and offer prayers during sunrise and sunset.",
      features: "Arghya rituals, fasting, folk songs."
    },
    {
      name: "Gangaur",
      month: "March–April",
      date: "Varies",
      desc: "Celebrated in parts of Rajasthan, Bihar includes Gangaur traditions.",
      img: "assets/images/festivals/gangaur.cms",
      description: "A colourful festival celebrated by women dedicated to Shiva and Parvati.",
      funFacts: "Involves ghevar sweets and grand processions with idols of Gauri.",
      features: "Processions, devotional worship, regional sweets."  
    }
  ],
  "Chandigarh": [
    {
      name: "Rose Festival",
      month: "February",
      date: "Varies",
      desc: "Exhibition of roses with cultural shows.",
      img: "assets/images/festivals/rose.jpg",
      description: "A vibrant exhibition of roses accompanied by cultural programs.",
      funFacts: "Held annually in the rose garden of Chandigarh.",
      features: "Flower shows, cultural performances, stalls."
    },
    {
      name: "Baisakhi",
      month: "April",
      date: "13/14 Apr",
      desc: "Harvest festival marking Sikh New Year.",
      img: "assets/images/festivals/baisakhi.webp",
      description: "Marks the harvest of rabi crops and formation of Khalsa in Sikhism.",
      funFacts: "Also commemorates the formation of Khalsa in Sikhism.",
      features: "Bhangra, fairs, Punjabi cuisine."
    }
  ],
  "Chhattisgarh": [
    {
      name: "Bastar Dussehra",
      month: "September–October",
      date: "Varies",
      desc: "Unique tribal Dussehra celebration in Bastar.",
      img: "assets/images/festivals/bastar.jpeg",
      description: "A 75-day-long tribal festival in Bastar with unique rituals and traditions.",
      funFacts: "Longest Dussehra celebration in the world.",
      features: "Processions, tribal dances, rituals."
    }
  ],
  "Delhi": [
    {
      name: "Diwali",
      month: "October–November",
      date: "Varies",
      desc: "Festival of lights celebrated with diyas, fireworks, and sweets.",
      img: "assets/images/festivals/diwali.jpeg",
      description: "One of the most famous festivals across India, lighting up Delhi with special bazaars.",
      funFacts: "Delhi markets glow with special Diwali bazaars.",
      features: "Lighting, fireworks, traditional sweets."
    },
    {
      name: "Republic Day Parade",
      month: "January",
      date: "26 Jan",
      desc: "Grand parade at Rajpath.",
      img: "assets/images/festivals/republic.jpg",
      description: "A spectacular military and cultural parade on India’s Republic Day.",
      funFacts: "Performed by armed forces and cultural troupes.",
      features: "Parade, national unity, performances."
    }
  ],
  "Goa": [
    {
      name: "Goa Carnival",
      month: "February",
      date: "Varies",
      desc: "Colorful street parades, music, and dance.",
      img: "assets/images/festivals/carnival.jpg",
      description: "A colorful festival with parades, music, and dancing, introduced during Portuguese rule in the 18th century.",
      funFacts: "Introduced during Portuguese rule.",
      features: "Parades, costumes, floats, live music."
    }
  ],
  "Gujarat": [
    {
      name: "Navratri",
      month: "September–October",
      date: "Varies",
      desc: "Nine nights of Garba and Dandiya celebrations.",
      img: "assets/images/festivals/navratri.jpeg",
      description: "Nine-night festival dedicated to Goddess Durga, celebrated with Garba and Dandiya dances.",
      funFacts: "Gujarat hosts the world’s largest dance festival during Navratri.",
      features: "Garba dance, colorful costumes, devotional songs."
    },
    {
      name: "Uttarayan",
      month: "January",
      date: "14 Jan",
      desc: "International kite festival celebrated across Gujarat.",
      img: "assets/images/festivals/uttarayan.jpg",
      description: "An international kite festival marking the sun’s northward journey.",
      funFacts: "Kite flying from dawn; largest gatherings of kite enthusiasts.",
      features: "Kite displays, competitions, cultural meets."
    }
  ],
  "Haryana": [
    {
      name: "Teej",
      month: "July–August",
      date: "Varies",
      desc: "Festival of swings and folk songs for women.",
      img: "assets/images/festivals/teej.jpg",
      description: "Festival dedicated to Goddess Parvati, celebrated by married women.",
      funFacts: "Women swing decorated swings while singing folk songs.",
      features: "Henna, folk songs, swings."
    },
    {
      name: "Makar Sankranti",
      month: "January",
      date: "14 Jan",
      desc: "Harvest festival, celebrated with kheer, til-gud sweets.",
      img: "assets/images/festivals/sankranti_haryana.jpeg",
      description: "Harvest festival featuring ritual dips in rivers, sharing sweets and folk songs.",
      funFacts: "Sisters visit married brothers’ homes with gift packs called Sindhara.",
      features: "Sweets, river rituals, folk songs."
    }
  ],
  "Himachal Pradesh": [
    {
      name: "Kullu Dussehra",
      month: "October",
      date: "Varies",
      desc: "Week-long fair in Kullu valley.",
      img: "assets/images/festivals/kullu.jpeg",
      description: "Festival that starts after Dussehra elsewhere, with over 200 deities in procession.",
      funFacts: "Over 200 deities are brought in processions.",
      features: "Processions, folk dances, fairs."
    }
  ],
  "Jammu & Kashmir": [
    {
      name: "Hemis Festival",
      month: "July",
      date: "Varies",
      desc: "Buddhist festival with masked dances.",
      img: "assets/images/festivals/hemis.webp",
      description: "Celebrates Guru Padmasambhava with masked (Cham) dances.",
      funFacts: "Held in the largest monastery of Ladakh.",
      features: "Cham dance, rituals, monastic ceremonies."
    },
    {
      name: "Tulip Festival",
      month: "April",
      date: "Varies",
      desc: "Tulip blooms in Srinagar’s largest tulip garden.",
      img: "assets/images/festivals/tulip.webp",
      description: "Celebrates the blooming of tulips in Asia’s largest tulip garden in Srinagar.",
      funFacts: "Over 60 varieties of tulips are displayed.",
      features: "Flower shows, handicrafts, cultural programs."
    }
  ],
  "Jharkhand": [
    {
      name: "Karma Festival",
      month: "August–September",
      date: "Varies",
      desc: "Tribal festival worshipping the Karam tree.",
      img: "assets/images/festivals/karma.jpeg",
      description: "A tribal festival of Odisha and Jharkhand honoring the Karam tree.",
      funFacts: "Participants dance around the tree with drums.",
      features: "Drums, tribal rituals, community feasts."
    },
    {
      name: "Sarhul",
      month: "March–April",
      date: "Varies",
      desc: "Spring festival of the tribal communities dedicated to the Sal tree.",
      img: "assets/images/festivals/sarhul.jpg",
      description: "Spring festival of the tribal communities dedicated to the Sal tree.",
      funFacts: "The Sal flower is worshipped as a symbol of nature’s renewal.",
      features: "Dances, drums, tribal rituals."
    }
  ],
  "Karnataka": [
    {
      name: "Mysuru Dasara",
      month: "October",
      date: "Varies",
      desc: "Royal procession with elephants in Mysuru.",
      img: "assets/images/festivals/mysore_dasara.jpg",
      description: "Royal festival celebrated in Mysore with grand processions and illumination.",
      funFacts: "Mysore Palace is illuminated with nearly 100,000 bulbs.",
      features: "Jumbo Savari, cultural programs, fairs."
    },
    {
      name: "Navaratri / Dasara",
      month: "September–October",
      date: "Varies",
      desc: "Gombe Golu doll displays, processions.",
      img: "assets/images/festivals/navaratri_karnataka.jpg",
      description: "Decorating art dolls and royal processions during Navaratri.",
      funFacts: "Art dolls called Gombe are used to decorate homes.",
      features: "Gombe displays, processions, Ayudha Puja."
    }
  ],
  "Kerala": [
    {
      name: "Onam",
      month: "August–September",
      date: "Varies",
      desc: "Harvest festival with Vallamkali (boat race).",
      img: "assets/images/festivals/onam.webp",
      description: "A grand harvest festival welcoming King Mahabali with boat races, floral carpets, and feasts.",
      funFacts: "Onam Sadya can include over 26 dishes served on banana leaves.",
      features: "Snake boat race, Kathakali dance, tiger dance."
    },
    {
      name: "Pongal / Attukal Pongala",
      month: "January / February–March",
      date: "Varies",
      desc: "Harvest festival, Pongal is cooked in open pots.",
      img: "assets/images/festivals/pongal_kerala.jpeg",
      description: "Women cook sweet rice in earthen pots (pongala) in temple settings.",
      funFacts: "Largest women-only gathering for cooking.",
      features: "Pongala cooking, dance performances, temple rituals."
    }
  ],
  "Lakshadweep": [
    {
      name: "Id-ul-Fitr",
      month: "April–May",
      date: "Varies",
      desc: "Island-wide celebration marking Ramadan end.",
      img: "assets/images/festivals/eid.webp",
      description: "Celebrated with communal prayers and feasting across the islands.",
      funFacts: "Marked with beach gatherings and shared meals.",
      features: "Prayers, feasting, cultural exchange."
    }
  ],
  "Madhya Pradesh": [
    {
      name: "Khajuraho Dance Festival",
      month: "February–March",
      date: "Varies",
      desc: "Classical dance performances at Khajuraho temples.",
      img: "assets/images/festivals/khajuraho.jpeg",
      description: "Classical dance performances set against the backdrop of Khajuraho temples.",
      funFacts: "Dancers from across India showcase Bharatanatyam, Kathak, Odissi.",
      features: "Dance, light shows, art exhibitions."
    },
    {
      name: "Taj Mahotsav",
      month: "February",
      date: "Varies",
      desc: "Art and culture festival near Taj Mahal.",
      img: "assets/images/festivals/taj_mahotsav.png",
      description: "Showcases Indian art and culture near Agra’s Taj Mahal.",
      funFacts: "Held annually from 18 to 27 February.",
      features: "Artisans, cuisine stalls, performances."
    }
  ],
  "Maharashtra": [
    {
      name: "Ganesh Chaturthi",
      month: "August–September",
      date: "Varies",
      desc: "Worship of Lord Ganesha with idols and visarjan.",
      img: "assets/images/festivals/ganesh.jpg",
      description: "Festival celebrating the birth of Lord Ganesha with idols, prayers, and immersion ceremonies.",
      funFacts: "Public celebrations were popularised by Lokmanya Tilak.",
      features: "Pandals, aarti, visarjan processions."
    },
    {
      name: "Dahi Handi",
      month: "August–September",
      date: "Varies",
      desc: "Sportive enactment of Krishna’s childhood pastime.",
      img: "assets/images/festivals/dahi_handi.webp",
      description: "Young men form human pyramids to break a pot of butter hung high.",
      funFacts: "Competitive human pyramids are built amidst cheering crowds.",
      features: "Team sport, music, street festivity."
    },
    {
      name: "Sula Fest / Grub Fest",
      month: "February / Autumn",
      date: "Varies",
      desc: "Wine & food festivals in Maharashtra.",
      img: "assets/images/festivals/sula_fest.avif",
      description: "Gourmet festivals featuring wine tasting, live music, and food stalls.",
      funFacts: "Held at vineyards near Nashik and Pune.",
      features: "Wine sampling, music, regional cuisine."
    }
  ],
  "Manipur": [
    {
      name: "Yaoshang",
      month: "March",
      date: "Varies",
      desc: "Five-day Holi-like festival with sports and music.",
      img: "assets/images/festivals/yaoshang.jpeg",
      description: "Spring festival similar to Holi with dance and sports.",
      funFacts: "Thabal Chongba (folk dance) is unique to Manipur.",
      features: "Color play, folk dance, sports."
    },
    {
      name: "Sangai Festival",
      month: "November",
      date: "Varies",
      desc: "Cultural extravaganza of Manipur’s heritage.",
      img: "assets/images/festivals/sangai.jpg",
      description: "A ten-day extravaganza that immerses visitors into the art, music, craft, indigenous sports and cuisine.",
      funFacts: "Named after the state animal, Sangai deer.",
      features: "Cultural performances, crafts, food stalls."
    }
  ],
  "Meghalaya": [
    {
      name: "Wangala Festival",
      month: "November",
      date: "Varies",
      desc: "Harvest festival of the Garo tribe with drums and dance.",
      img: "assets/images/festivals/wangala.jpg",
      description: "Harvest festival honoring the Sun God with rhythmic drum beats.",
      funFacts: "Drum beats of 100 drums mark the celebration.",
      features: "Drum music, dance, rituals."
    },
    {
      name: "National Cherry Blossom Festival",
      month: "Winter (October–March)",
      date: "Varies",
      desc: "Celebrates blooming of cherry blossoms in Shillong.",
      img: "assets/images/festivals/cherry_blossom.jpg",
      description: "A festival celebrating nature with cherry blossoms, cultural events.",
      funFacts: "Also known as Shillong Cherry Blossom Festival.",
      features: "Flower viewing, cultural programs, exhibitions."
    }
  ],
  "Mizoram": [
    {
      name: "Chapchar Kut",
      month: "March",
      date: "Varies",
      desc: "Spring festival with bamboo dance.",
      img: "assets/images/festivals/chapchar.webp",
      description: "Spring festival celebrated with folk dances, music, and feasts.",
      funFacts: "Celebrated after clearing forests for cultivation.",
      features: "Cheraw dance, traditional costumes, music."
    }
  ],
  "Nagaland": [
    {
      name: "Hornbill Festival",
      month: "December",
      date: "1–10 Dec",
      desc: "Showcase of Naga tribes’ culture and traditions.",
      img: "assets/images/festivals/hornbill.png",
      description: "The ‘Festival of Festivals’ showcasing Naga heritage and culture.",
      funFacts: "Held the first week of December—literally a festival of festivals.",
      features: "Tribal dances, crafts, traditional sports."
    }
  ],
  "Odisha": [
    {
      name: "Rath Yatra",
      month: "June–July",
      date: "Varies",
      desc: "Chariot festival of Lord Jagannath in Puri.",
      img: "assets/images/festivals/rath.webp",
      description: "Chariot festival of Lord Jagannath in Puri.",
      funFacts: "Millions of devotees pull giant chariots.",
      features: "Chariots, rituals, devotional singing."
    },
    {
      name: "Konark Dance Festival",
      month: "February",
      date: "Varies",
      desc: "Dance performances at the Konark temple.",
      img: "assets/images/festivals/konark.jpeg",
      description: "Classical dance performances held at the Sun Temple in Konark.",
      funFacts: "Set against stunning temple architecture.",
      features: "Classical dance, light music, cultural ambience."
    }
  ],
  "Puducherry": [
    {
      name: "Masi Magam",
      month: "February–March",
      date: "Varies",
      desc: "Temple car festival and rituals on beaches.",
      img: "assets/images/festivals/masi.jpg",
      description: "Temple car festival held on beaches with rituals.",
      funFacts: "Devotees gather to take holy dip in sea.",
      features: "Rituals, procession, beach ceremonies."
    },
    {
      name: "Bastille Day",
      month: "July 14",
      date: "14 Jul",
      desc: "French National Day celebrated with parades and cultural shows.",
      img: "assets/images/festivals/bastille.jpg",
      description: "French National Day celebrated with parades and cultural shows.",
      funFacts: "Reflects Puducherry’s French colonial heritage.",
      features: "Parades, French cultural events, fireworks."
    }
  ],
  "Punjab": [
    {
      name: "Baisakhi",
      month: "April",
      date: "13/14 Apr",
      desc: "Harvest festival marking Sikh New Year.",
      img: "assets/images/festivals/baisakhi.jpeg",
      description: "Harvest festival marking Sikh New Year.",
      funFacts: "Also commemorates the formation of Khalsa in Sikhism.",
      features: "Bhangra, fairs, Punjabi cuisine."
    },
    {
      name: "Lohri",
      month: "January",
      date: "13 Jan",
      desc: "Winter harvest festival celebrated with bonfires, songs, and dance.",
      img: "assets/images/festivals/lohri.webp",
      description: "Winter harvest festival celebrated with bonfires, songs, and dance.",
      funFacts: "Peanuts, popcorn, and jaggery are traditional Lohri foods.",
      features: "Bonfire, Bhangra, Gidda dance."
    }
  ],
  "Rajasthan": [
    {
      name: "Pushkar Camel Fair",
      month: "November",
      date: "Varies",
      desc: "Livestock fair with cultural performances.",
      img: "assets/images/festivals/pushkar.jpg",
      description: "Livestock fair with cultural performances held in Pushkar.",
      funFacts: "Famous among global tourists and photographers.",
      features: "Camel races, folk dances, bazaars."
    },
    {
      name: "Gangaur",
      month: "March–April",
      date: "Varies",
      desc: "Women worship Gauri for marital bliss.",
      img: "assets/images/festivals/gangaur_rajasthan.jpeg",
      description: "Celebrated by women worshipping Gauri for marital happiness.",
      funFacts: "Processions with decorated idols and ghevar sweets.",
      features: "Processions, songs, rituals."
    }
  ],
  "Sikkim": [
    {
      name: "Losar",
      month: "February–March",
      date: "Varies",
      desc: "Tibetan New Year with prayers, rituals, and celebrations.",
      img: "assets/images/festivals/losar_sikkim.jpeg",
      description: "Tibetan New Year with monasteries lighting butter lamps.",
      funFacts: "Monasteries light butter lamps to welcome the new year.",
      features: "Cham dances, feasts, prayers."
    }
  ],
  "Tamil Nadu": [
    {
      name: "Pongal",
      month: "January",
      date: "14–17 Jan",
      desc: "Harvest festival thanking Sun God.",
      img: "assets/images/festivals/pongal.webp",
      description: "Harvest festival thanking the Sun God with special rituals.",
      funFacts: "Pongal dish overflows from the pot as a good omen.",
      features: "Kolam designs, bull-taming (Jallikattu), community feasts."
    },
    {
      name: "Pongal (Attukal Pongala)",
      month: "February–March",
      date: "Varies",
      desc: "Devotion-filled cooking festival for women.",
      img: "assets/images/festivals/attukal_pongala.jpg",
      description: "Women cook sweet rice in open pots at the Attukal Temple.",
      funFacts: "Largest gathering of women cooking together.",
      features: "Cooking rituals, devotional chants, temple gathering."
    }
  ],
  "Telangana": [
    {
      name: "Bathukamma",
      month: "September–October",
      date: "Varies",
      desc: "Floral festival of Telangana women.",
      img: "assets/images/festivals/bathukamma.jpeg",
      description: "Floral festival where women arrange flowers in concentric stacks.",
      funFacts: "Women make flower stacks in seven concentric layers.",
      features: "Flower arrangements, folk songs, dance."
    }
  ],
  "Tripura": [
    {
      name: "Kharchi Puja",
      month: "July",
      date: "Varies",
      desc: "Rituals for 14 deities in Agartala.",
      img: "assets/images/festivals/kharchi.webp",
      description: "Worship of 14 deities with rituals and fairs.",
      funFacts: "Celebrated for seven days with tribal and Hindu customs.",
      features: "Processions, sacrifices, folk music."
    }
  ],
  "Uttar Pradesh": [
    {
      name: "Kumbh Mela",
      month: "January–March (every 12 years)",
      date: "Varies",
      desc: "Largest Hindu gathering at Sangam.",
      img: "assets/images/festivals/kumbh.jpg",
      description: "World’s largest spiritual gathering held periodically at Sangam.",
      funFacts: "Recognized by UNESCO as Intangible Cultural Heritage.",
      features: "Holy dips, sadhus, processions."
    },
    {
      name: "Taj Mahotsav / Bateshwar Fair",
      month: "February–March",
      date: "Varies",
      desc: "Cultural fairs near Agra featuring arts and crafts.",
      img: "assets/images/festivals/taj_mahotsav_up.webp",
      description: "Festivals like Taj Mahotsav and Bateshwar Fair showcase heritage and art.",
      funFacts: "State funding increased for fairs with >5 lakh visitors :contentReference[oaicite:0]{index=0}.",
      features: "Art, crafts, cultural performances."
    }
  ],
  "Uttarakhand": [
    {
      name: "Kumbh Mela (Haridwar)",
      month: "January–March (every 12 years)",
      date: "Varies",
      desc: "Major religious fair at Haridwar ghats.",
      img: "assets/images/festivals/kumbh_haridwar.jpeg",
      description: "Major religious fair at Haridwar ghats, part of the Kumbh cycle.",
      funFacts: "Millions converge for holy dips.",
      features: "Pilgrims, rituals, spiritual gatherings."
    },
    {
      name: "Nanda Devi Raj Jat",
      month: "Every 12 years (August–September)",
      date: "Varies",
      desc: "One of the longest religious processions in the world.",
      img: "assets/images/festivals/nanda_devi.jpg",
      description: "A long trek pilgrimage spanning 280 km across the Himalayas.",
      funFacts: "Trek spans 280 km through remote Himalayas.",
      features: "Yatra, rituals, folk dances."
    }
  ],
  "West Bengal": [
    {
      name: "Durga Puja",
      month: "September–October",
      date: "Varies",
      desc: "Biggest celebration with idols, pandals, and immersion.",
      img: "assets/images/festivals/durga.jpg",
      description: "The grandest festival of Bengal celebrating Goddess Durga.",
      funFacts: "UNESCO inscribed it as Intangible Cultural Heritage in 2021.",
      features: "Pandal hopping, idols, dhak drums."
    },
    {
      name: "Rath Yatra",
      month: "June–July",
      date: "Varies",
      desc: "Chariot festival of Lord Jagannath.",
      img: "assets/images/festivals/rath_wb.jpeg",
      description: "Hindu festival where the deity Jagannath is taken out in a chariot procession.",
      funFacts: "Massive chariots pulled through the streets of Kolkata :contentReference[oaicite:1]{index=1}.",
      features: "Chariot pulling, devotional singing, processions."
    }
  ]
};
// fallback
if (!FESTIVALS_BY_STATE.All) {
  FESTIVALS_BY_STATE.All = [
    {
      name: "Diwali",
      month: "October–November",
      date: "Varies",
      desc: "Festival of lights across India.",
      img: "assets/images/festivals/diwali.png"
    }
  ];
}

function showFestivalForState(stateName) {
  const panel = document.getElementById("statePanel");
  const title = document.getElementById("stateTitle");
  const list = document.getElementById("stateFestivals");

  // Show panel
  panel.classList.remove("hidden");

  // Update title
  title.textContent = stateName;

  // Clear existing festivals
  list.innerHTML = "";

  const festivals = FESTIVALS_BY_STATE[stateName];

  if (!festivals || festivals.length === 0) {
    list.innerHTML = `<p>No festivals available for ${stateName}</p>`;
    return;
  }

  festivals.forEach(festival => {
    const card = document.createElement("div");
    card.classList.add("festival-card");
    card.innerHTML = `
      <div class="text">
        <h3>${festival.name}</h3>
        <small class="muted">${festival.month}</small>
        <p>${festival.description}</p>
        <p><strong>Fun Fact:</strong> ${festival.funFacts}</p>
        <p><strong>Features:</strong> ${festival.features}</p>
      </div>
    `;
    list.appendChild(card);
  });
}

// Close button handler
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closePanel");
  const panel = document.getElementById("statePanel");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      panel.classList.add("hidden");
    });
  }
});