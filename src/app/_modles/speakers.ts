import {Add} from './address';
export class Speakers {
    constructor(
        public _id : string,
        public email: string,
        public userName: string,
        public Address: Add[],
        public password: string
    ){}
}
