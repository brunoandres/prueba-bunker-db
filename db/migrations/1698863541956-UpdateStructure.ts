import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStructure1698863541956 implements MigrationInterface {
    name = 'UpdateStructure1698863541956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`company_name\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`cant_employees\``);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`companyId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD UNIQUE INDEX \`IDX_1985c207186a38d6f7d2b85fb5\` (\`document_number\`)`);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`date_admission\``);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`date_admission\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD UNIQUE INDEX \`IDX_a76c5cd486f7779bd9c319afd2\` (\`name\`)`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_c7b030a4514a003d9d8d31a812b\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_c7b030a4514a003d9d8d31a812b\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP INDEX \`IDX_a76c5cd486f7779bd9c319afd2\``);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`name\` \`name\` varchar(255) CHARACTER SET "utf8mb3" COLLATE "utf8mb3_general_ci" NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`date_admission\``);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`date_admission\` varchar(255) CHARACTER SET "utf8mb3" COLLATE "utf8mb3_general_ci" NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP INDEX \`IDX_1985c207186a38d6f7d2b85fb5\``);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`cant_employees\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`company_name\` varchar(255) CHARACTER SET "utf8mb3" COLLATE "utf8mb3_general_ci" NOT NULL`);
    }

}
