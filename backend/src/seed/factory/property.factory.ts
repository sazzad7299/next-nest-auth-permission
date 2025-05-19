
import { Property } from "../../module/property/entities/property.entity";
import { setSeederFactory } from "typeorm-extension";
import { faker } from '@faker-js/faker';
export const PropertyFactory = setSeederFactory(Property, () => {
    const property = new Property();
    property.name = faker.location.street();
    property.description = faker.lorem.sentence(1);
    property.price = +faker.number.int({ min: 1000, max: 10000 });
    return property;
});
