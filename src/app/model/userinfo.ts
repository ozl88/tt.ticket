export class UserInfo {
    firstname: string;
    lastname: string;
    contact: string;
    email: string;
    organization: string;
    id?: string;
    code?: string;

    getData(): object {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }
}