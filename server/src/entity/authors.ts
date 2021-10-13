import { Entity, PrimaryColumn, Column } from "typeorm";

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.
@Entity({ name: "authors" })
export class Authors {

  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  name: string;

 @Column({ nullable: true })
  slug!: string;

 @Column({ nullable: true })
  profile_image!: string;

 @Column({ nullable: true })
  cover_image!: string;

 @Column({ nullable: true })
  bio!: string;

 @Column({ nullable: true })
  website!: string;

 @Column({ nullable: true })
  location!: string;

 @Column({ nullable: true })
  facebook!: string;

 @Column({ nullable: true })
  twitter!: string;

 @Column({ nullable: true })
  meta_title!: string;

 @Column({ nullable: true })
  meta_description!: string;

 @Column({ nullable: true })
  url!: string;

}