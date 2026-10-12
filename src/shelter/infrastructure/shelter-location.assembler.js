import {ShelterLocation} from "../domain/model/shelter-location.entity.js";

export class ShelterAssembler {
    static toEntityFromResource(resource){
        return new ShelterLocation({...resource});
    }

    static toEntitiesFromResponse(response){
        if(response.status !== 200){
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }

        let resources = response.data instanceof Array ? response.data : [];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}