import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterRemove()
  logUpdate() {
    console.log('Removed User with id', this.id);
  }

  @AfterUpdate()
  logRemove() {
    console.log('Updated User with id', this.id);
  }
}
