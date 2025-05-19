
import { User } from "../../module/user/entities/user.entity";
import { setSeederFactory } from "typeorm-extension";
import { faker } from '@faker-js/faker';
export const UserFactory = setSeederFactory(User, () => {
    const user = new User();

    user.firstName = faker.person.firstName();
    user.lastName = faker.person.lastName();
    user.email = faker.internet.email();
    user.description =faker.lorem.sentence(1);

    return user;
});
