
import { faker } from '@faker-js/faker';
import { Property } from '../module/property/entities/property.entity';
import { PropertyType } from '../module/property/entities/propertyType.entity';
import { PropertyFeature } from '../module/propertyfeature/entities/propertyfeature.entity';
import { User } from '../module/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class DatabaseSeeder implements Seeder {
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const typeRepo = dataSource.getRepository(PropertyType);

        const propertyType = await typeRepo.save([
            { value: "Condo" },
            { value: "Apartment" }, // fixed typo
        ]);

        const userFactory = factoryManager.get(User);
        const users = await userFactory.saveMany(220);

        const propertyFactory = factoryManager.get(Property);
        const propertyFeatureFactory = factoryManager.get(PropertyFeature);
        const features = await propertyFeatureFactory.saveMany(225);


        const properties: Property[] = [];
            for (let i = 0; i < 250; i++) {
                const property = await propertyFactory.make();
                property.user = faker.helpers.arrayElement(users);
                property.type = faker.helpers.arrayElement(propertyType);
                property.propertyFeature = faker.helpers.arrayElement(features);
                properties.push(property);
            }
            await dataSource.getRepository(Property).save(properties);
            for (const user of users) {
                user.likedProperties = faker.helpers.arrayElements(properties, faker.number.int({ min: 2, max: 5 }));
            }
            await dataSource.getRepository(User).save(users);

       

    }
}
