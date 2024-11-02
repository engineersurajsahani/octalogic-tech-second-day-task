"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeesTable1730528702012 = void 0;
class CreateEmployeesTable1730528702012 {
    constructor() {
        this.name = 'CreateEmployeesTable1730528702012';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "salary" numeric(10,2) NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "employee"`);
    }
}
exports.CreateEmployeesTable1730528702012 = CreateEmployeesTable1730528702012;
//# sourceMappingURL=1730528702012-CreateEmployeesTable.js.map