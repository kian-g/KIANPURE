document.addEventListener("DOMContentLoaded", function () {
    const jsonData = ["Did you do this?", "Or this?"]; // Example JSON data
    const container = document.getElementById("checkboxList");

    jsonData.forEach((item, index) => {
        const listItem = document.createElement("li"); // Create a list item

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `item-${index}`;
        checkbox.name = `item-${index}`;

        const label = document.createElement("label");
        label.htmlFor = `item-${index}`;
        label.textContent = item;

        listItem.appendChild(checkbox); // Add checkbox to list item
        listItem.appendChild(label); // Add label to list item
        container.appendChild(listItem); // Add list item to ordered list
    });

    document.getElementById("calculateBtn").addEventListener("click", function () {
        const checkboxes = container.querySelectorAll("input[type='checkbox']");
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const result = jsonData.length - checkedCount;

        document.getElementById("result").textContent = `SCORE: ${result}`;
    });
});
