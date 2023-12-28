# Flock Simulation
### This project is a take on Boids Algorithm, an artificial life program that simulates the flocking behavior of birds, and related motion. This implementation is built using p5.js.
<p align="center">
  <img src="https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/76ff0e8f-68f0-4574-bc86-cbfb688312a0" style="width: 850px; height: 400px;">
</p>

## Model details

### The rules applied to each Boid are as follows:

**Separation**: *steer* to avoid crowding local flockmates
<p align="center">
  <img src="https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/1382d2a1-b018-4e0f-a610-51472679c5e4" alt="Rule Separation" style="width: 150; height: 100;">
</p>

---

**Alignment**:  steer towards the average heading of local flockmates
<p align="center">
  <img src="https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/ddbe1d23-4a5c-4828-a4d8-5a6b757e64d0" alt="Rule Separation" style="width: 150; height: 100;">
</p>

---

**Cohesion**: steer to move towards the average position (center of mass) of local flockmates
<p align="center">
  <img src="https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/2d8e6ee4-c658-4e7a-884b-efc51d633078" alt="Rule Separation" style="width: 150; height: 100;">
</p>

---
### Increasing complexity
 More complex rules can be added, such as obstacle avoidance, goal seeking and specist/racist behavior between Boids of different kinds.



