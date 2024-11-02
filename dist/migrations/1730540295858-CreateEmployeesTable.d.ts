import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateEmployeesTable1730540295858 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
