import {Speakers} from './speakers';
import {Students} from './students';
export class Events {
    constructor(
        public _id:number,
        public title: string,
        public eventDate: string,
        public mainSpeakerId:Speakers,
        public otherSpeakersIds: Speakers[],
        public studentsIds: Students[],
        
    ) {}
}
