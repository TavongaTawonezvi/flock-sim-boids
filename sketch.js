function setup() {
  createCanvas(400, 400);

  // loop over to populate array with Boids
  for(let i=0; i<maxBoids; i++) {
    flock.push(new Boid())
  }
}

function draw() {
  background(220);

  // call show() on each Boid in the simulation.
  flock.forEach(boid => {
    boid.edges(); // keep Boid within bounds of the canvas
    boid.update(); // update Boid position
    boid.show(); // display each Boid
  })
}

const flock = [];
const maxBoids = 150;

