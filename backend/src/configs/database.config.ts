import { Property } from "src/module/property/entites/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const postgresDB : PostgresConnectionOptions ={
    url:'postgresql://test_owner:npg_ptfTIl8QKgW2@ep-green-bar-a4jx331e-pooler.us-east-1.aws.neon.tech/test?sslmode=require',
    type:'postgres',
    port:3306,
    entities:[Property],
    synchronize:true
}