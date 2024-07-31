(() => {
  const data = JSON.parse(document.getElementById("data").textContent);
  const container = document.getElementById("links");

  // Sort top-level categories (case-insensitive)
  const sortedCategories = Object.keys(data).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "case" }),
  );

  // Loop through sorted categories
  sortedCategories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.className = "urls";
    const title = document.createElement("div");
    title.textContent = category;
    title.className = "header";
    categoryContainer.appendChild(title);

    const list = document.createElement("ul");
    categoryContainer.appendChild(list);

    // Sort links within the category (case-insensitive)
    const sortedLinks = Object.keys(data[category]).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "case" }),
    );

    // Loop through sorted links and create elements
    sortedLinks.forEach((link) => {
      const listItem = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.href = data[category][link];
      linkElement.textContent = link;
      listItem.appendChild(linkElement);
      list.appendChild(listItem);
    });

    container.appendChild(categoryContainer);
  });
})();
