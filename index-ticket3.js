/* This event listener is for our testing - please only write your code where asked. */
document.addEventListener("DOMContentLoaded", () => {
	// Your code here...

	//Ticket 3a
	const titleElement1 = document.getElementById("title");
	titleElement1.style.color = "red";
	titleElement1.style.fontSize = "30px";

	//Ticket 3b
	const newParagraph = document.createElement("p");
	newParagraph.textContent = "This is a dynamically added paragraph.";
	document.body.appendChild(newParagraph);

	//Ticket 3c
	const firstContentParagraph = document.querySelector("p.content");
	firstContentParagraph.textContent = "This paragraph has been updated.";

	//Ticket 3d
	const secondContentParagraph = document.querySelectorAll("p.content")[1];
	secondContentParagraph.setAttribute("title", "Hover over me!");

	//Ticket 3e
	const itemList = document.getElementById("itemList");
	itemList.classList.add("styled-list");
	const bananaItem = itemList.children[1];
	bananaItem.classList.remove("list-item");

	//Ticket 3f
	const dateItem = itemList.children[3];
	dateItem.remove();
});
