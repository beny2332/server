export interface LoginDto{
    username: string
    password: string
}

export interface RegisterDto extends LoginDto{
    isAdmin: boolean
}

export interface ProfileDto {
    id:string
}