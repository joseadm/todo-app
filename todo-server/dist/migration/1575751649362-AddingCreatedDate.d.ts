import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddingCreatedDate1575751649362 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
