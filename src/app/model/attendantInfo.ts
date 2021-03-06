export class AttendantInfo {
    eventDocId: string;
    userDocId: any;
    code: string;
    checkin: boolean;
    claim: boolean;
    withdraw: boolean;
    walkin: boolean;
    checkintime: string;
    id?: string;

    getData(): object {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }
}