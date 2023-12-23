class Customize {

    constructor() {
        this.sRadius; // radius of boid perception for separation 
        this.aRadius; // radius of boid perception for alignment
        this.cRadius; // radius of boid perception for separation 
        this.maxVelocity;
    }

    // retrieve perception radiuses
    getSepRadius() {
        return this.sRadius;
    }

    getAlignRadius() {
        return this.aRadius;
    }

    getCohRadius() {
        return this.cRadius;
    }

    // set custom perception radiuses
    setSepRadius(value) {
        this.sRadius = value;
    }

    setAlignRadius(value) {
        this.aRadius = value;
    }

    setCohRadius(value) {
        this.cRadius = value;
    }

    getMaxVelocity() {
        return this.maxVelocity;
    }

    setMaxVelocity(velocity) {
        this.maxVelocity = velocity;
    }


}