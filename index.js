console.log("Linked!");

// Ticket 3: Manipulating the DOM

// Ticket 3a: Styling Elements
const title = document.getElementById("title");
title.style.color = "red";
title.style.fontSize = "30px";

// Ticket 3b: Creating and Adding Elements
const newPara = document.createElement("p");
const body = document.body;
newPara.textContent = "This is a dynamically added paragraph.";
body.appendChild(newPara);

// Ticket 3c: Modifying Text
const firstContentParagraph = document.querySelector("p.content");
firstContentParagraph.textContent = "This paragraph has been updated.";

// Ticket 3d: Modifying Attributes
const secondContentParagraph = document.querySelectorAll("p.content")[1];
secondContentParagraph.setAttribute("title", "Hover over me!");

// Ticket 3e: Adding and Removing Classes
const itemList = document.getElementById("itemList");
itemList.classList.add("styled-list");

const bananaItem = Array.from(itemList.children).find(
	(li) => li.textContent === "🍌 Banana",
);
bananaItem.classList.remove("list-item");

// Ticket 3f: Removing Elements
const dateItem = Array.from(itemList.children).find(
	(li) => li.textContent === "🍇 Date",
);
dateItem.remove();
