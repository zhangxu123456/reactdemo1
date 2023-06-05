interface CaptchaAPIRes{
    msg:string;
    img:string;
    code:number;
    captchaEnabled:boolean;
    uuid:string;
}

interface LoginAPIReq {
    usename:string;
    password:string;
    code:string;
    uuid:string;
}
// 登录的响应类型约束
interface LoginAPIRes {
    msg:string;
    code:string;
    token:string;
}