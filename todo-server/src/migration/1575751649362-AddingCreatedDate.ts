import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingCreatedDate1575751649362 implements MigrationInterface {
    name = 'AddingCreatedDate1575751649362'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` ADD `createdDate` datetime NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `createdDate`", undefined);
    }

}
