"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddingCreatedDate1575751649362 {
    constructor() {
        this.name = 'AddingCreatedDate1575751649362';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `todo` ADD `createdDate` datetime NOT NULL", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `createdDate`", undefined);
    }
}
exports.AddingCreatedDate1575751649362 = AddingCreatedDate1575751649362;
//# sourceMappingURL=1575751649362-AddingCreatedDate.js.map