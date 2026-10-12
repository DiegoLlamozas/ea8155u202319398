export class ShelterAnimal {
    constructor({id = null, locationId = null, petName = "", registeredAt = ""}) {
        this.id = id;
        this.locationId = locationId;
        this.petName = petName;
        this.registeredAt = registeredAt;
    }
}