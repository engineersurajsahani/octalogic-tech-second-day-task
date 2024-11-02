"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeesTable1730540295858 = void 0;
class CreateEmployeesTable1730540295858 {
    constructor() {
        this.name = 'CreateEmployeesTable1730540295858';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "company" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "companyId" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_26c3d513e0832e5abbbdd3d2a88" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_26c3d513e0832e5abbbdd3d2a88"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "companyId"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "createdAt"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }
}
exports.CreateEmployeesTable1730540295858 = CreateEmployeesTable1730540295858;
//# sourceMappingURL=1730540295858-CreateEmployeesTable.js.map