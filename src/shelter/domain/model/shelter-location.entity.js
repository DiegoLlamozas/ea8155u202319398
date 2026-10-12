export class ShelterLocation {
    constructor({id = null, name = "", dogBreeds = "", maxCapacity = 0}) {
        this.id = id;
        this.name = name;
        this.dogBreeds = dogBreeds;
        this.maxCapacity = maxCapacity;
    }

}