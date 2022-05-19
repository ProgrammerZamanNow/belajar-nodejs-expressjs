import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";


jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {

    const user = {
        id: 1,
        name: "Eko"
    };

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);

});

test("test mock class findById",() => {
    const user = {
        id: 1,
        name: "Eko"
    };

    repository.findById.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
})

test("test mock class findAll",() => {
    const users = [
        {
            id: 1,
            name: "Eko"
        },
        {
            id: 2,
            name: "Eko"
        }
    ];

    repository.findAll.mockReturnValueOnce(users);

    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
})
