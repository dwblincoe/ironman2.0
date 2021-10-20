export interface SignInDto {
    email: string;
    password: string;
}

export interface RegisterDto extends SignInDto {
    username: string;
}

export interface UserDto {
    id?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    username: string;
}

export interface AuthUserDto extends UserDto {
    token: string;
}
