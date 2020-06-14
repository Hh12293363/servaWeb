export class LoguserInfo {
    constructor(
        private account: string = '',
        private password: string = ''
    ) {

    }
}

export class ResLogin {
    id: number;
    account: string;
    accountType: number;
    add_time: string;
    adminAccount: String;
    app_token: string;
    city: string;
    county: string;
    list: Array<any>[];// list: ;
    logo: string;
    makerParentId: number;
    newPassword: string;
    only_key: string;
    parent_id: number;
    password: string;
    real_name: string;
    recognition_code: string;
    remark: string;
    roleId: number;
    role_id: number;
    state: number;
    tel: string;
    token: string;

}