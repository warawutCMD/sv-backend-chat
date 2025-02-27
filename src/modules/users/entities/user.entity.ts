import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { getLocalNowAsDate } from 'src/common/helper/time.helper';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  username!: string;

  @Property()
  email!: string;

  @Property({ hidden: true })
  password!: string;

  @Property({ onCreate: () => getLocalNowAsDate() })
  createdAt: Date = getLocalNowAsDate();

  @Property({ onUpdate: () => getLocalNowAsDate() })
  updatedAt: Date = getLocalNowAsDate();
}
