import { MigrationInterface, QueryRunner } from "typeorm";
export declare class TodoMigration1575746202428 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
