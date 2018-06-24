export class Contact {
    constructor(
        public account: number,
        public address: string,
        public createdBy: number,
        public description: string,
        public email: string,
        public first_name: string,
        public last_name: string,
        public phone: string,
        public isActive: boolean,
      ) {  }
}
