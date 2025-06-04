import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

// 创建自定义错误类型
interface CustomError {
  code: number;
  message: string;
}

// 创建请求配置接口
interface RequestConfig extends AxiosRequestConfig {
  loading?: boolean;
  skipErrorHandler?: boolean;
  Authorization?: string;
  headers?:any
}

// 创建响应数据接口
interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

class Request {
  private instance: AxiosInstance;
  private baseConfig: RequestConfig = {
    baseURL: /* process.env.REACT_APP_API_URL || */ '/api',
    timeout: 10000,
    loading: true,
    // Authorization:'xxxxx',
  };

  constructor() {
    this.instance = axios.create(this.baseConfig);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: RequestConfig) => {
        // 获取token
        const token = localStorage.getItem('token');
        config.headers['x-csrf-token'] = 'token'
        if (token) {
          config.headers = {
            ...config.headers,
            // Authorization: `Bearer ${token}`,
          };
        }

        // 显示loading
        if (config.loading) {
          // 这里可以添加全局loading
          // loading.show()
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ResponseData>) => {
        console.log('response111111',response);
        
        const { data, config } = response;
        const { code, message: msg,data:res } = data;

        // 关闭loading
        if ((config as RequestConfig).loading) {
          // loading.hide()
        }

        // 处理业务错误
        if (code !== 0 && code !== 200) {
          if (!(config as RequestConfig).skipErrorHandler) {
            message.error(msg || '请求失败');
          }
          return Promise.reject(new Error(msg));
        }

        return res;
      },
      (error) => {
        // 关闭loading
        if ((error.config as RequestConfig).loading) {
          // loading.hide()
        }

        // 处理HTTP错误
        if (error.response) {
          const { status } = error.response;
          switch (status) {
            case 401:
              message.error('未授权，请重新登录');
              // 可以在这里处理登出逻辑
              break;
            case 403:
              message.error('拒绝访问');
              break;
            case 404:
              message.error('请求地址不存在');
              break;
            case 500:
              message.error('服务器内部错误');
              break;
            default:
              message.error('网络错误');
          }
        } else if (error.request) {
          message.error('网络请求超时');
        } else {
          message.error('请求配置错误');
        }

        return Promise.reject(error);
      }
    );
  }

  // GET请求
  public get<T = any>(
    url: string,
    params?: any,
    config?: RequestConfig
  ): Promise<ResponseData<T>> {
    return this.instance.get(url, { ...config, params });
  }

  // POST请求
  public post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseData<T>> {
    return this.instance.post(url, data, config);
  }

  // PUT请求
  public put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseData<T>> {
    return this.instance.put(url, data, config);
  }

  // DELETE请求
  public delete<T = any>(
    url: string,
    config?: RequestConfig
  ): Promise<ResponseData<T>> {
    return this.instance.delete(url, config);
  }
}

export const request = new Request();
export default request; 