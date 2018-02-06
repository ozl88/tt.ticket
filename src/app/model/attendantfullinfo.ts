import { AttendantInfo } from "./attendantInfo";
import { UserInfo } from "./userinfo";

export class AttendantFullInfo {
    attendant: AttendantInfo;
    user: UserInfo;
 
     getData(): object {
         const result = {};
         Object.keys(this).map(key => result[key] = this[key]);
         return result;
     }
 }