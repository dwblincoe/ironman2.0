export interface SignInDto {
    email: string
    password: string
}

export interface RegisterDto extends SignInDto {
    username: string
}

export interface UserInputDto {
    firstName?: string
    lastName?: string
    email: string
    username: string
}

export interface UserDto extends UserInputDto {
    id?: string
    isAdmin: boolean
    image: string
}

export interface AuthUserDto extends UserDto {
    token: string
}

export interface PasswordChangeInputDto {
    currentPassword: string
    newPassword: string
    confirmNewPassword: string
}
