import request from '../utils/request';

// 用户信息接口
export interface UserInfo {
  id: number;
  name: string;
  age: number;
  gender: 'male' | 'female';
  joinDate: string;
  picture: string;
}

// 用户列表参数接口
export interface UserListParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

// 创建用户参数接口
export interface CreateUserParams {
  name: string;
  age: number;
  gender: 'male' | 'female';
  joinDate: string;
  picture: string;
}

// 用户服务类
export class UserService {
  // 获取用户列表
  static async getUserList(params: UserListParams) {
    return request.get<{
      list: UserInfo[];
      total: number;
    }>('/users', params);
  }

  // 获取用户详情
  static async getUserDetail(id: number) {
    return request.get<UserInfo>(`/users/${id}`);
  }

  // 创建用户
  static async createUser(data: CreateUserParams) {
    return request.post<UserInfo>('/users', data);
  }

  // 更新用户
  static async updateUser(id: number, data: Partial<CreateUserParams>) {
    return request.put<UserInfo>(`/users/${id}`, data);
  }

  // 删除用户
  static async deleteUser(id: number) {
    return request.delete(`/users/${id}`);
  }
}

export default UserService; 