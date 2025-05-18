
import { Property } from "../../module/property/entities/property.entity";
import { setSeederFactory } from "typeorm-extension";

export const PropertyFactory = setSeederFactory(Property, (faker) => {
    const property = new Property();

    property.name = faker.location.street();
    property.description = faker.lorem.sentence();
    property.price = +faker.commerce.price({ min: 1000, max: 10000 });

    return property;
});
