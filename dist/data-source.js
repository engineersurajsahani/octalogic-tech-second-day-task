"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("./employee/entities/employee.entity");
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'employee_db',
    entities: [employee_entity_1.Employee],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map