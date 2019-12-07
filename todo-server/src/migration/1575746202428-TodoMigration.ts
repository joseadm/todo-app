import { MigrationInterface, QueryRunner } from "typeorm";

export class TodoMigration1575746202428 implements MigrationInterface {
    name = 'TodoMigration1575746202428'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `completed` tinyint NOT NULL, `todoDate` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `todo`", undefined);
    }

}
