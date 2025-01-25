import { MigrationInterface, QueryRunner } from "typeorm";

export class StoreTable1737815833761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS store;`);
        await queryRunner.query(
            `CREATE TABLE store(id uuid NOT NULL DEFAULT uuid_generate_v4(), name varchar NOT NULL DEFAULT '',description varchar NOT NULL DEFAULT '', email varchar NOT NULL, created_at timestamp NOT NULL DEFAULT now(), updated_at timestamp NOT NULL DEFAULT now(), CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY (id))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "store"`);
    }

}
