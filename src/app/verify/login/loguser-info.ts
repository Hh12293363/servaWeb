export class LoguserInfo {
    constructor(
        private account: string = '',
        private password: string = ''
    ) {

    }
}

export class ResLogin {
    public id: number;
    public account: string;
    public accountType: number;
    public add_time: string;
    public adminAccount: String;
    public app_token: string;
    public city: string;
    public county: string;
    public list: Array<any>[];// list: ;
    public logo: string;
    public makerParentId: number;
    public newPassword: string;
    public only_key: string;
    public parent_id: number;
    public password: string;
    public real_name: string;
    public recognition_code: string;
    public remark: string;
    public roleId: number;
    public role_id: number;
    public state: number;
    public tel: string;
    public token: string;

    constructor() {        
     }

}