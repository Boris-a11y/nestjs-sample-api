/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../entity/AbstractEntity';

@Entity()
export class User extends AbstractEntity {
  @Column('varchar')
  username: string;

  @Column('varchar')
  password: string;
}
