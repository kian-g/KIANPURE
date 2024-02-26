document.addEventListener("DOMContentLoaded", function () {
    const jsonData = ["Did you do this?", "Or this?"]; // Example JSON data
    const container = document.getElementById("checkboxList");

    jsonData.forEach((item, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `item-${index}`;
        checkbox.name = `item-${index}`;

        const label = document.createElement("label");
        label.htmlFor = `item-${index}`;
        label.textContent = item;

        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });

    document.getElementById("calculateBtn").addEventListener("click", function () {
        const checkboxes = container.querySelectorAll("input[type='checkbox']");
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const result = jsonData.length - checkedCount;

        document.getElementById("result").textContent = `Difference: ${result}`;
    });
});
