import { UserModel } from "../../data";
import { CustomError, RegisterUserDto } from "../../domain";

export class AuthService {
    //Dependency Injection
    constructor() {}

    public async registerUser(registerUserDto: RegisterUserDto) {
        const existUser = await UserModel.findOne({email: registerUserDto.email});

        if (existUser ) throw CustomError.badRequest('Email already exist');

        return 'ok!'
    }


}