### In browser scripting to grab stuff from the webpage

### The purpose of this project is to try to grab elements from the website and re-format them so that I can work with them.

### First step.
- Get elements from inside a github issue thats made in json
- code:


<table class="d-block user-select-contain" data-paste-markdown-skip>
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p dir="auto">{<br>
"name": "john",<br>
"item": "stuff",<br>
"number": 4<br>
}</p>
      </td>
    </tr>

## This gets them all and reformats them

const paragraphElements = document.querySelectorAll('p[dir="auto"]');

paragraphElements.forEach(paragraphElement => {
  const jsonString = paragraphElement.textContent;
  const jsonObject = JSON.parse(jsonString);

  const name = jsonObject.name;
  const item = jsonObject.item;
  const number = jsonObject.number;

  const formattedString = name + item + number;
  console.log(formattedString);
});


# THIS GETS ALL: 
const paragraphElements = document.querySelectorAll('p[dir="auto"]');

paragraphElements.forEach(paragraphElement => {
  console.log(paragraphElement.textContent);
});

# THIS GETS THE FIRST:
const paragraphElement = document.querySelector('p[dir="auto"]');

if (paragraphElement) {
  console.log(paragraphElement.textContent);
} else {
  console.error('Paragraph element with dir="auto" not found.');
}

20230725johnstuff4

