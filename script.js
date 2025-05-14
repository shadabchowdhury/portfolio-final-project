function addRecommendation() {
  const input = document.getElementById("recInput");
  const text = input.value.trim();

  if (text !== "") {
    const container = document.querySelector(".recommendation-cards");
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `“${text}”`;
    container.appendChild(card);
    alert("Thank you for submitting a recommendation!");
    input.value = "";
  }
}

