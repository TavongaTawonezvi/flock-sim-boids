function setup() {
  createCanvas(window.innerWidth, 600);

  // loop over to populate array with Boids
  for(let i=0; i<maxBoids; i++) {
    flock.push(new Boid())
  }
}

function draw() {
  background(color(51, 51, 51));

  document.querySelector('.p5Canvas').addEventListener('mousedown', e => frameRate(40)) // slow down on mouse-down to better visualise sim
  document.querySelector('.p5Canvas').addEventListener('mouseup', e => frameRate(60))


  // call show() on each Boid in the simulation.
  flock.forEach(boid => {

    boid.edges(); // keep Boid within bounds of the canvas
    boid.flock(flock); // introduce boid behavior
    boid.update(); // update Boid position
    boid.show(); // display each Boid

  })
}

const flock = [];
const maxBoids = 100;

