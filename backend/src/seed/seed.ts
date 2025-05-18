import { postgresDB } from "../../src/configs/database.config";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { PropertyFactory } from "./factory/property.factory";
import { UserFactory } from "./factory/user.factory";
import { PropertyFeatureFactory } from "./factory/propertyfeature.factory";
import { DatabaseSeeder } from "./database.seed";
import { PropertyType } from "../module/property/entities/propertyType.entity";
import { User } from "../module/user/entities/user.entity";
import { Property } from "../module/property/entities/property.entity";
import { PropertyFeature } from "../module/propertyfeature/entities/propertyfeature.entity";


const options: DataSourceOptions & SeederOptions = {
    ...postgresDB,
    entities: [
        PropertyType, User, Property, PropertyFeature
    ],
    factories: [PropertyFactory, UserFactory, PropertyFeatureFactory],
    seeds: [DatabaseSeeder]
}
const datasource = new DataSource(options);
datasource.initialize().then(async () => {
    await datasource.synchronize(true)

    await runSeeders(datasource)

    process.exit()
})