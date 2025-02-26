import { Migration } from '@mikro-orm/migrations';

export class Migration20250226143335 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`user\` add \`username\` varchar(255) not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`user\` drop column \`username\`;`);
  }

}
