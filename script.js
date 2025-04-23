async function findRecipes() {
  const input = document.getElementById("ingredientsInput").value;
  const userIngredients = input.toLowerCase().split(',').map(i => i.trim());

  const res = await fetch("recipes.json");
  const allRecipes = await res.json();

  const matchedRecipes = allRecipes.filter(recipe =>
    recipe.ingredients.some(ingredient => userIngredients.includes(ingredient))
  );

  const recipesDiv = document.getElementById("recipes");
  recipesDiv.innerHTML = "";

  if (matchedRecipes.length === 0) {
    recipesDiv.innerHTML = `
      <div class="recipe-card">
        <h2>No Recipes Found 😢</h2>
        <p>Try adding more common ingredients like <strong>tomato</strong>, <strong>onion</strong>, or <strong>rice</strong>.</p>
      </div>
    `;
    return;
  }

  matchedRecipes.forEach(recipe => {
    const usedIngredients = recipe.ingredients.filter(i => userIngredients.includes(i));
    const missingIngredients = recipe.ingredients.filter(i => !userIngredients.includes(i));

    const div = document.createElement("div");
    div.className = "recipe-card";
    div.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}">
      <p><strong>Used Ingredients:</strong> ${usedIngredients.map(i => `<span class="tag">${i}</span>`).join(' ')}</p>
      <p><strong>Missing Ingredients:</strong> ${missingIngredients.length ? missingIngredients.map(i => `<span class="tag">${i}</span>`).join(' ') : "<span class='tag'>None</span>"}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
    recipesDiv.appendChild(div);
  });
}
