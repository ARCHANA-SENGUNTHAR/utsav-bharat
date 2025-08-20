// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const festivalList = document.getElementById("festivalList");
  const festivalInfo = document.getElementById("festivalInfo");

  // Open sidebar with selected festivals
  function openSidebar(festivals) {
    festivalList.innerHTML = ""; // Clear list
    festivalInfo.innerHTML = ""; // Clear details

    if (!festivals || festivals.length === 0) {
      festivalList.innerHTML = `<li>No festivals available.</li>`;
    } else {
      festivals.forEach(festival => {
        const li = document.createElement("li");
        li.textContent = festival.name;

        li.addEventListener("click", () => {
          festivalInfo.innerHTML = `
            <h3>${festival.name}</h3>
            <p><strong>Date:</strong> ${festival.date}</p>
            <p>${festival.description}</p>
          `;
        });

        festivalList.appendChild(li);
      });
    }

    sidebar.classList.add("active");
  }

  // Close sidebar
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  // Allow other scripts (map.js) to trigger sidebar
  window.showSidebarFestivals = openSidebar;
});
