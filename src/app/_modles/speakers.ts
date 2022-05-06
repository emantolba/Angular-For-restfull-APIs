import {Address} from './address';
export class Speakers {
    constructor(
        public _id : string,
        public email: string,
        public userName: string,
        public Adderss: Address[],
        public password: string
    ){}
}
