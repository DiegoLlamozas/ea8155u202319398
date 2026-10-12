import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const shelterLocationsEndpointPath = import.meta.env.VITE_SHELTER_LOCATIONS_ENDPOINT_PATH;
const shelterAnimalsEndpointPath = import.meta.env.VITE_SHELTER_ANIMALS_ENDPOINT_PATH;

export class ShelterApi extends BaseApi {
    #shelterLocations;
    #shelterAnimals;

    constructor(){
        super();
        this.#shelterAnimals = new BaseEndpoint(this,shelterLocationsEndpointPath );
        this.#shelterAnimals = new BaseEndpoint(this,shelterAnimalsEndpointPath );

    }

    getShelterLocations(){
        return this.#shelterLocations.getAll();
    }

    getShelterLocationById(id){
        return this.#shelterLocations.getById(id);
    }

    getShelterAnimals(){
        return this.#shelterAnimals.getAll();
    }

    getShelterAnimalById(id){
        return this.#shelterAnimals.getById(id);
    }

    createShelterAnimal(resource){
        return this.#shelterAnimals.post(resource);
    }

    updateShelterAnimal(resource){
        return this.#shelterAnimals.update(resource.id, resource);
    }

    deleteShelterAnimal(id){
        return this.#shelterAnimals.delete(id);
    }




}