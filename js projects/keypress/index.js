document.addEventListener("DOMContentLoaded", function () {
  const myInput = document.getElementById("myInput");

  const handleInput = (event) => {
    console.log(event);
    document.querySelector(
      ".inputValue"
    ).textContent = `Input value:${event.target.value}`;

    document.querySelector(
      ".inputName"
    ).textContent = `Input Name:${event.target.name}`;

    document.querySelector(
      ".inputType"
    ).textContent = `Input Type:${event.target.type}`;

    document.querySelector(
      ".eventType"
    ).textContent = `Event Type:${event.type}`;
  };

  myInput.addEventListener("input", handleInput);
});
