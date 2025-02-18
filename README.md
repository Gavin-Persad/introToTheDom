# DOM Workshop ✨

Welcome to the DOM workshop! 👋 This workshop will provide hands-on experience working with the Document Object Model (DOM) in JavaScript. The DOM allows us to manipulate HTML and CSS using JavaScript.

In this workshop, you will learn:

- How to select DOM elements using different selectors like getElementById, querySelector, etc. 🎯
- Traverse the DOM tree using properties like `parentNode`, `childNodes`, `children`, `firstChild`, and`lastChild`.
- How to modify text, HTML attributes, styles of DOM elements 🖌
- How to add, remove, and replace DOM elements ➕ ➖
- How to create new DOM elements and add them to the page 👷‍♂️

The workshop contains examples and exercises to help you practice DOM manipulation. 💪 By the end of this workshop, you will have the skills to dynamically update web pages using JavaScript like a pro! 😎

## Getting Started

1. We have provided an index.js for each ticket, but haven't linked it up to the html. Please get linking, there are 3 files that you will need to link, one for each ticket, if you have not linked multiple JS files before you should google how to do this. All three files will need to be linked for this to work.

2. Check your javascript files are linked correctly by adding code to log a message:

```js
console.log("Linked!");
```

If you can't see your messages, double check the following:

1. Your file path is correct.
2. Your script tag is after the body tag of your html document or uses the defer attribute.
3. Make sure to save the file and refresh the page.

4. Once you have completed each ticket you can run the tests for this ticket to check that you have passed the tasks. To run the tests please enter the following into your terminal.

- Ticket 1 - `npm test ticket1.test.js`
- Ticket 2 - `npm test ticket2.test.js`
- Ticket 3 - `npm test ticket3.test.js`
- All tickets - `npm test`

You may need to run a `npm i` to install the testing dependencies first.

### Ticket 1: Selecting DOM Elements

#### Ticket 1a: `getElementById()`

- **Instructions**:
  - Use `getElementById()` to select the element with the `id` of "title".
  - Log the selected element to the console.
- **Expected Outcome**:
  - The console should display the `<h1>` element with the content "Intro to the DOM".

#### Ticket 1b: `getElementsByClassName()`

- **Instructions**:
  - Use `getElementsByClassName()` to select elements with the class of "content".
  - Log the selected elements to the console.
- **Expected Outcome**:
  - The console should display a collection of two `<p>` elements. The first with the content "This is a paragraph with the class 'content'." and the second with "This is another paragraph with the class 'content' and 'highlight'."

#### Ticket 1c: `getElementsByTagName()`

- **Instructions**:
  - Use `getElementsByTagName()` to select all `<li>` elements on the page.
  - Log the selected elements to the console.
- **Expected Outcome**:
  - The console should display a collection of five `<li>` elements with the content "🍎 Apple", "🍌 Banana", "🍒 Cherry", "🍇 Date", and "🍈 Fig", respectively.

#### Ticket 1d: `querySelector()`

- **Instructions**:
  - Use `querySelector()` to select the first element with the class "highlight".
  - Log the selected element to the console.
- **Expected Outcome**:
  - The console should display a single `<p>` element with the content "This is another paragraph with the class 'content' and 'highlight'."

#### Ticket 1e: `querySelectorAll()`

- **Instructions**:
  - Use `querySelectorAll()` to select all elements with the class "highlight".
  - Log the selected elements to the console.
- **Expected Outcome**:

  - The console should display a collection of three elements: a `<p>` element with the content "This is another paragraph with the class 'content' and 'highlight'" and two `<li>` elements with the content "🍒 Cherry" and "🍈 Fig".

#### Testing

Don't forget you can run a test here to check your work.

- Ticket 1 - `npm test ticket1.test.js`

### Ticket 2: Traversing the DOM

#### Ticket 2a: Parent Node

- **Instructions**:
  - Select the first `<li>` element inside the `<ul>` with the id of "itemList".
  - Use the `parentNode` property to access its parent.
  - Log the parent element to the console.
- **Expected Outcome**:
  - The console should display the entire `<ul>` element with the `id` of "itemList" and all of its `<li>` children.

#### Ticket 2b: Child Nodes

- **Instructions**:
  - Select the `<ul>` element with the id of "itemList".
  - Use the `childNodes` property to get all its child nodes.
  - Log the child nodes to the console.
- **Expected Outcome**:
  - The console should display a collection (NodeList) of child nodes of the `<ul>` element, which includes the `<li>` elements as well as any whitespace or line breaks.

#### Ticket 2c: Element Children

- **Instructions**:
  - Select the `<ul>` element with the id of "itemList".
  - Use the `children` property to get all its element children.
  - Log the element children to the console.
- **Expected Outcome**:
  - The console should display a HTMLCollection of five `<li>` elements.

#### Ticket 2d: First and Last Child

- **Instructions**:
  - Select the `<ul>` element with the id of "itemList".
  - Use the `firstElementChild` and `lastElementChild` properties to get the first and last child nodes.
  - Log both child nodes to the console.
- **Expected Outcome**:
  - The console should display two nodes. The last should be the `<li>` element with the content "🍈 Fig".

#### Testing

Don't forget you can run a test here to check your work.

- Ticket 2 - `npm test ticket2.test.js`

### Ticket 3: Manipulating the DOM

**Ticket 3 has automatic testing set up - so after completing all of its sections run `npm test` in your terminal and you will
get that lovely green checkmark if you pass. It will also tell you which ticket you haven't passed if you get one slightly wrong.**

#### Ticket 3a: Styling Elements

- **Instructions**:
  - Select the `<h1>` element with the id of "title".
  - Change its text color to "red" and font size to "30px" using JavaScript.
- **Expected Outcome**:
  - The heading "Intro to the DOM" should appear in red and its font size should be 30px.

#### Ticket 3b: Creating and Adding Elements

- **Instructions**:
  - Create a new `<p>` element.
  - Set its text content to "This is a dynamically added paragraph.".
  - Append it to the end of the body using JavaScript.
- **Expected Outcome**:
  - A new paragraph with the text "This is a dynamically added paragraph." should appear at the bottom of the page.

#### Ticket 3c: Modifying Text

- **Instructions**:
  - Select the first `<p>` element with the class "content".
  - Change its text content to "This paragraph has been updated." using JavaScript.
- **Expected Outcome**:
  - The text of the first paragraph with class "content" should now read "This paragraph has been updated."

#### Ticket 3d: Modifying Attributes

- **Instructions**:
  - Select the second `<p>` element with the class "content".
  - Add a title attribute with the value "Hover over me!" using JavaScript.
- **Expected Outcome**:
  - When you hover over the second paragraph with the class "content", a tooltip should appear with the text "Hover over me!".

#### Ticket 3e: Adding and Removing Classes

- **Instructions**:
  - Select the `<ul>` element with the id of "itemList".
  - Add a new class "styled-list" to it using JavaScript.
  - Select the `<li>` element with the content "🍌 Banana".
  - Remove the class "list-item" from it using JavaScript.
- **Expected Outcome**:
  - The `<ul>` element should now have an additional class "styled-list".
  - The `<li>` with the content "🍌 Banana" should no longer have the class "list-item".

#### Ticket 3f: Removing Elements

- **Instructions**:
  - Select the `<li>` element with the content "🍇 Date".
  - Remove it from the DOM using JavaScript.
- **Expected Outcome**:
  - The `<li>` with the content "🍇 Date" should no longer appear in the page.

#### Testing

Don't forget you can run a test here to check your work.

- Ticket 3 - `npm test ticket3.test.js`
