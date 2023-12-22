class Boid {

    // constructs every Boid
    constructor() {

        // set position to random point on canvas
        this.position = createVector(random(width), random(height));

        // randomize velocity intensity and max value
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.75, 1.75));
        this.maxVelocity = 4;

        // set acceleration and max value
        this.acceleration = createVector();
        this.maxAcceleration = 1;
    }

    // represent Boid as point on canvas
    show() {

        // set diameter of point
        strokeWeight(10);
        // set color of point
        stroke(75, 235, 255);
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

    // stop Boids from going over the canvas
    edges() {
    
        if(this.position.x < 0){ this.position.x = 0; }
        else if(this.position.x > width){ this.position.x = width; }

        if(this.position.y < 0){ this.position.y = 0; }
        else if(this.position.y > height){ this.position.y = height; }

    }

    // Boid Behavior Logic

    // seperation: return an avoidance force vector of all boids
    separate(boids) {

        let perceptionRadius = 50; // radius of boid perception
        let totalBoids = 0; // number of boids in perception radius
        let avoidance = createVector(); // avoidance vector

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
                
                //calculate AVARAGE avoidance vector: inverse of dist vector between two boids
                let diff = p5.Vector.sub(
                    this.position,
                    boid.position
                );

                diff.div(d);
                // add inverse vector to avoidance vector
                avoidance.add(diff);

                totalBoids++;

            }
        });

        if (totalBoids > 0) {
            avoidance.div(totalBoids);
            avoidance.setMag(this.maxVelocity);
            avoidance.sub(this.velocity)
            avoidance.limit(this.maxAcceleration)
        }

        return avoidance;

    }

    // Alignment: align boids' velocity vector with other particles to make them move in the same direction
    align(boids) {

    }
}