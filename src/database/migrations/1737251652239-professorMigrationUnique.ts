import { MigrationInterface, QueryRunner } from "typeorm";

export class ProfessorMigrationUnique1737251652239 implements MigrationInterface {
    name = 'ProfessorMigrationUnique1737251652239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`professor\` ADD UNIQUE INDEX \`IDX_492e744e6333071da912c7d651\` (\`email\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`professor\` DROP INDEX \`IDX_492e744e6333071da912c7d651\``);
    }

}
