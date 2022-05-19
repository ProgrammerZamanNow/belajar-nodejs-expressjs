import {UserRepository} from "./user-repository.js";

export class UserService {

    constructor(userRepository) {
        if (userRepository) {
            this.userRepository = userRepository;
        } else {
            this.userRepository = new UserRepository();
        }
    }

    save(user) {
        this.userRepository.save(user);
    }

    findById(id) {
        return this.userRepository.findById(id);
    }

    findAll() {
        return this.userRepository.findAll();
    }

}
