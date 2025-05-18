
import { PropertyFeature } from "../../module/propertyfeature/entities/propertyfeature.entity";
import { setSeederFactory } from "typeorm-extension";

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, (faker) => {
    const feature = new PropertyFeature();

    feature.bedrooms = +faker.commerce.price({ min: 1000, max: 10000 });
    feature.parkingSpot = faker.location.streetAddress();

    return feature;
});
