
import { Property } from '../module/property/entities/property.entity';
import { PropertyType } from '../module/property/entities/propertyType.entity';
import { PropertyFeature } from '../module/propertyfeature/entities/propertyfeature.entity';
import { User } from '../module/user/entities/user.entity';
import { faker } from '@faker-js/faker';
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
        const users = await userFactory.saveMany(20);

        const propertyFactory = factoryManager.get(Property);
        const propertyFeatureFactory = factoryManager.get(PropertyFeature);
        const features = await propertyFeatureFactory.saveMany(5);

        const properties = await Promise.all(
            Array(50).fill(null).map(async () => {
                return await propertyFactory.make({
                    user: faker.helpers.arrayElement(users),
                    type: faker.helpers.arrayElement(propertyType),
                    propertyFeature: faker.helpers.arrayElement(features),
                });
            })
        );

        await dataSource.getRepository(Property).save(properties);

        console.log(`✅ Seeded ${users.length} users, ${propertyType.length} property types, ${properties.length} properties.`);
    }
}
