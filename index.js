const freelancers = [
  {name: "Alice", price: 30, occupation: "writer"},
  {name: "Bob", price: 50, occupation: "teacher"},
  {name: "Carol", price: 70, occupation: "programmer"}
];

const addFreelancerInterval = setInterval(addFreelancer, 3000);

render();

function render() {
  const freelancer = document.querySelector("#freelancers");
  const freelancerElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
    return element;
  });
  freelancer.replaceChildren(...freelancerElements);
}

function addFreelancer() {
  for (i = 0; i < freelancers.length; i++) {
    let name = freelancers.name[i];
    let price = freelancers.price[i];
    let occupation = freelancers.occupation[i];
    freelancers.push({name, price, occupation});
   }
}

render();