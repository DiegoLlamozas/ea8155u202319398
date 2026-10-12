import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {ShelterApi} from "../infrastructure/shelter-api.js";
import {ShelterLocationAssembler} from "../infrastructure/shelter-location.assembler.js";
import {ShelterLocation} from "../domain/model/shelter-location.entity.js";
import {ShelterAnimal} from "../domain/model/shelter-animal.entity.js";

const shelterApi = new ShelterApi();

