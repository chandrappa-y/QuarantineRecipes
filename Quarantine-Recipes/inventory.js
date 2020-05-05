const recipes = {
  1: {
    "title": "Dalgona Coffee",
    "author": "Dalgona",
    "ingredients": "Coffee Powder, Milk, Sugar",
    "steps": "Add instant coffee powder and sugar in a cup. Add 2 tbsp water.Beat the coffee and sugar vigorously until it is light and fluffy.Fill a glass with crushed ice.Pour milk on top.Top the glass with whipped coffee. Mix well and serve chilled"
  }
};

const counter = () => {
  let count = 1;
  return () => {
    count += 1;
    return count;
  };
};

const nextId = counter();

const users = {}

module.exports = {
  recipes, users, nextId
};