import { PropertyFeature } from "../../module/propertyfeature/entities/propertyfeature.entity";
import { setSeederFactory } from "typeorm-extension";
import { faker } from '@faker-js/faker';


export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const feature = new PropertyFeature();

  feature.bedrooms = parseInt(faker.number.int({ min: 1, max: 10 }).toString()); 
  feature.parkingSpot = faker.location.streetAddress();
  feature.createdAt = new Date;

  return feature;
});
