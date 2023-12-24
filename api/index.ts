import { POST } from './axios'

export const login = data => POST('/api/frent/login', data)
export const register = data => POST('/api/frent/register', data)