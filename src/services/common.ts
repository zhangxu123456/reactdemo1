import request from '../utils/request';


export  class CommonService {
  // 获取临时凭证
  static async getSts() {
    return request.get(`/common/getSts`);
  }
  // 获取图片
  static async getFileUrl(params) {
    console.log('params',params);
    return request.get(`/common/getFileUrl`,params);
  }
}