export class Contact {
    displayName: String;
    email: String;
    key?: string;

    constructor(displayName: String, email: String){
        this.displayName = displayName;
        this.email = email;
    }
}