import request from "./index";
// 验证码
export const captchaAPI = ():Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage")
// 登录请求
export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes>=> request.get("/prod-api/login",params);