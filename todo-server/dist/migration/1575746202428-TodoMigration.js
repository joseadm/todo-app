"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoMigration1575746202428 {
    constructor() {
        this.name = 'TodoMigration1575746202428';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `completed` tinyint NOT NULL, `todoDate` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("DROP TABLE `todo`", undefined);
    }
}
exports.TodoMigration1575746202428 = TodoMigration1575746202428;
//# sourceMappingURL=1575746202428-TodoMigration.js.map