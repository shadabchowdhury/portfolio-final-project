function addRecommendation() {
  const input = document.getElementById("recInput");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("rec-list").appendChild(li);
    alert("Thank you for submitting a recommendation!");
    input.value = "";
  }
}
