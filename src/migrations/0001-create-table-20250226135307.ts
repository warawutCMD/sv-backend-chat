import { Migration } from '@mikro-orm/migrations';

export class Migration20250226135307 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`user\` (\`id\` int unsigned not null auto_increment primary key, \`name\` varchar(255) not null, \`email\` varchar(255) not null, \`password\` varchar(255) not null, \`created_at\` datetime not null, \`updated_at\` datetime not null) default character set utf8mb4 engine = InnoDB;`);

    this.addSql(`drop table if exists \`migrations\`;`);
  }

  override async down(): Promise<void> {
    this.addSql(`create table \`migrations\` (\`id\` int not null auto_increment primary key, \`timestamp\` bigint not null, \`name\` varchar(255) not null) default character set utf8mb4 engine = InnoDB;`);

    this.addSql(`drop table if exists \`user\`;`);
  }

}
