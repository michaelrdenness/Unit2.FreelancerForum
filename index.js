const freelancers = [
  {name: "Alice", price: 30, occupation: "writer"},
  {name: "Bob", price: 50, occupation: "teacher"},
  {name: "Carol", price: 70, occupation: "programmer"}
]






const colors = ["red", "green", "blue", "orange", "yellow", "purple"];
const sizes = ["small", "medium", "large"];
const maxShapes = 10;
const shapes = [
  {
    color: "red",
    size: "small",
  },
  {
    color: "yellow",
    size: "small",
  },
];

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(addShape, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const squares = document.querySelector("#squares");
  const squareElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add("square", shape.color, shape.size);
    return element;
  });
  squares.replaceChildren(...squareElements);

  // TODO: Render the circles
  const circles = document.querySelector("#circles");
  const circleElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add("circle", shape.color, shape.size);
    return element;
  });
  circles.replaceChildren(...circleElements);
}

/**
 * Add a random shape to the `shapes` array
 */
function addShape() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = sizes[Math.floor(Math.random() * sizes.length)];

  // TODO: Randomize the size of the shape

  shapes.push({ color, size });

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if (shapes.length >= maxShapes) {
    clearInterval(addShapeIntervalId);
  }
}
