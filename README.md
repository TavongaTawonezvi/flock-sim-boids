# Flock Simulation
## This project is a take on Boids Algorithm, an artificial llife program that simulates the flocking behavior of birds, and related motion. This implementation is built using p5.js.
![flocksimboids](https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/76ff0e8f-68f0-4574-bc86-cbfb688312a0)

## Model details

### The rules applied to each Boid are as follows:
**Separation**: *steer* to avoid crowding local flockmates


![Rule_separation](https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/1382d2a1-b018-4e0f-a610-51472679c5e4)
**Alignment**:  steer towards the average heading of local flockmates
![Rule_alignment](https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/ddbe1d23-4a5c-4828-a4d8-5a6b757e64d0)
**cohesion**: steer to move towards the average position (center of mass) of local flockmates
![Rule_cohesion](https://github.com/TavongaTawonezvi/flock-sim-boids/assets/67804599/2d8e6ee4-c658-4e7a-884b-efc51d633078)


