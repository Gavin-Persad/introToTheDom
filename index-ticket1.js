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
});
