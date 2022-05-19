import { post } from '../utils/http'

export const admin_signin = (email: string, password: string) => {
    return post('/admin/signin', { email, password})
}

export const admin_signup = (email: string, password: string) => {
    return post('/admin/signup', { email, password})
}