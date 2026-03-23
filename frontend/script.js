const API_URL = "http://localhost:5000/api/items";

const itemForm = document.getElementById("itemForm");
const nameInput = document.getElementById("nameInput");
const itemList = document.getElementById("itemList");

async function fetchItems() {
    try {
        const response = await fetch (API_URL);
        const items = await response.json();

        itemList.innerHTML = "";

        items.array.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.name;
            itemList.appendChild(li);
        });
    } catch (error) {
        console.error("Failed to fetch items:", error);
    }
}

itemForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();

    if (!name) return;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            throw new Error("Faoled to add item");
        }

        nameInput.value = "";
        fetchItems();
    } catch (error) {
        console.error("Failed to create item:", error);
    }
});

fetchItems();