export class AttendantInfo {
    eventDocId: string;
    userDocId: any;
    code: string;
    checkin: boolean;
    withdraw: boolean;
    walkin: boolean;
    id?: string;

    getData(): object {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }
}