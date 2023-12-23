class Boid {

    // constructs every Boid
    constructor() {

        // set position to random point on canvas
        this.position = createVector(random(width), random(height));

        // randomize velocity intensity and max value
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.75, 1.75))
        this.maxVelocity = 4;

        // set acceleration and max value
        this.acceleration = createVector();
        this.maxAcceleration = 0.3; 

    }

    // represent Boid as point on canvas
    show() {

        // set diameter of point
        strokeWeight(9);
        // set color of point
        stroke(color(77, 121, 255));
        // print point in current position
        point(this.position.x, this.position.y);

    }

    // Boid movement
    // update position and velocity according to velocity and acceleration, respectively
    update() {
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.maxVelocity) // limit the velocity to max value
    }

    // loop the frame
    edges() {
    
        if (this.position.x > width) {
            this.position.x = 0
        } else if (this.position.x < 0) {
            this.position.x = width
        }

        if (this.position.y > height) {
            this.position.y = 0
        } else if (this.position.y < 0) {
            this.position.y = height
        }

    }

    // Boid Behavior Logic


    // seperation: return an avoidance force vector of all boids
    separate(boids) {

        let totalBoids = 0; // number of boids in perception radius
        let avoidance = createVector(); // avoidance vector
        let perceptionRadius = document.getElementById('separate').value;

        // loop through every boid and check if each falls in perc radius of this
        boids.forEach(boid => {
            
            // distance between this boid and other boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            );

            if(d<perceptionRadius && boid != this ) {
                
                //calculate vector pointing away from boid to this boid
                let diff = p5.Vector.sub( this.position, boid.position );

                // normalize seperation vector
                diff.div(d);
                // add inverse vector to avoidance vector
                avoidance.add(diff);
            
                totalBoids++;

            }
        });

        if (totalBoids > 0) {
            avoidance.div(totalBoids); // normalize total avoidance vector
            avoidance.setMag(this.maxVelocity); // limit to maxVelocity
            avoidance.sub(this.velocity)
            avoidance.limit(this.maxAcceleration) // limit to maxAcceleration
            }

        return avoidance;

    }

    // Alignment: align boids' velocity vector with nearby particles to make them move in the same direction
    align(boids) {

        let totalBoids = 0; 
        let alignForce = createVector(); // alignment vector
        let perceptionRadius = document.getElementById('align').value;

        boids.forEach(boid => {
            
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            );

            if(d<perceptionRadius && boid != this ) {
                
                // calculate total velocity of each boid in perc radius
                alignForce.add(boid.velocity);
                totalBoids++;

            }
        });

        if (totalBoids > 0) {
            alignForce.div(totalBoids); // normalize total alignment vector
            alignForce.setMag(this.maxVelocity); // makes sure Boid does not deccelerate
            alignForce.sub(this.velocity);
            alignForce.limit(this.maxAcceleration);// limit to maxAcceleration
            }

        return alignForce;

    }

    // 
    cohesion(boids) {

        let totalBoids = 0; 
        let steeringForce = createVector(); // alignment vector
        let perceptionRadius = document.getElementById('cohesion').value;

        boids.forEach(boid => {
            
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            );

            if(d<perceptionRadius && boid != this ) {
                
                // calculate total steering force of each boid in perc radius
                steeringForce.add(boid.velocity);
                totalBoids++;

            }
        });

        if (totalBoids > 0) {
            steeringForce.div(totalBoids); // normalize total steering force vector
            steeringForce.sub(this.position);
            steeringForce.setMag(this.maxVelocity); // makes sure Boid does not deccelerate
            steeringForce.sub(this.velocity);
            steeringForce.limit(this.maxAcceleration); // limit to maxAcceleration
            }

        return steeringForce;

    }

    flock(boids) {

        this.acceleration.set(0, 0) // reset boid acceleration in each frame

        // get force vectors returned
        let avoidance = this.separate(boids);
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);

        // add to acceleration force
        // there's no mass in the system so Force = Acceleration
        this.acceleration.add(avoidance);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);

    }
}