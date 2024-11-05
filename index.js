/* This event listener is for our testing - please only write your code where asked. */
document.addEventListener("DOMContentLoaded", () => {
	// Your code here...

	console.log("Linked!");

	//Ticket 1a
	const titleElement = document.getElementById("title");
	console.log(titleElement);

	//Ticket 1b
	const className = document.getElementsByClassName("content");
	console.log(className);

	//Ticket 1c
	const list = document.getElementsByTagName("li");
	console.log(list);

	//Ticket 1d
	const highlight = document.querySelector(".highlight");
	console.log(highlight);

	//Ticket 1e
	const highlightAll = document.querySelectorAll(".highlight");
	console.log(highlightAll);

	//Ticket 2a
	const listItem = document.querySelector(".list-item");
	console.log(listItem.parentNode);

	//Ticket 2b
	const itemList = document.getElementById("itemList");
	const childNodes = itemList.childNodes;
	console.log(childNodes);

	//Ticket 2c
	const children = itemList.children;
	console.log(children);

	//Ticket 2d
	const firstChild = itemList.firstElementChild;
	const lastChild = itemList.lastElementChild;
	console.log(firstChild);
	console.log(lastChild);

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
	itemList.classList.add("styled-list");
	const bananaItem = itemList.children[1];
	bananaItem.classList.remove("list-item");

	//Ticket 3f
	const dateItem = itemList.children[3];
	dateItem.remove();
});
