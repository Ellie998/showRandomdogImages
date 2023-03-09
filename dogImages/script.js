const dogContainerElement = document.getElementById("dog");
const btnElement = document.querySelector("button");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    dogContainerElement.attributes.src.value = `${json.message}`;
  });

btnElement.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dogContainerElement.attributes.src.value = `${json.message}`;
    });
});
