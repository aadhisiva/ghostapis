import { Timestamp } from "bson";
import { Entity, PrimaryColumn, Column } from "typeorm";

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.
@Entity({ name: "pages" })
export class Pages {

  @PrimaryColumn()
  id: string;

 @Column({nullable: true})
  uuid: string;

 @Column({nullable: true})
  title!: string;

 @Column({nullable: true})
  slug!: string;

 @Column({nullable: true})
  html!: string;

 @Column({nullable: true})
  comment_id!: string;

  @Column({nullable: true})
  feature_image!: string;

 @Column({nullable: true})
  featured!: string;

 @Column({nullable: true})
  visibility!: string;

 @Column({nullable: true})
  created_at!: string;

 @Column({nullable: true})
  updated_at!: string;

 @Column({nullable: true})
  published_at!: string;

 @Column({nullable: true})
  custom_excerpt!: string;

 @Column({nullable: true})
  codeinjection_head!: string;

 @Column({nullable: true})
  codeinjection_foot!: string;

 @Column({nullable: true})
  custom_template!: string;

 @Column({nullable: true})
  canonical_url!: string;

 @Column({nullable: true})
  url!: string;

 @Column({nullable: true})
  excerpt!: string;

 @Column({nullable: true})
  reading_time!: string;

  @Column({nullable: true})
  page!: string;

 @Column({nullable: true})
  access!: string;

 @Column({nullable: true})
  og_image!: string;

 @Column({nullable: true})
  og_title!: string;

 @Column({nullable: true})
  og_description!: string;

 @Column({nullable: true})
  twitter_image!: string;

 @Column({nullable: true})
  twitter_title!: string;

 @Column({nullable: true})
  twitter_description!: string;

 @Column({nullable: true})
  meta_title!: string;

 @Column({nullable: true})
  meta_description!: string;

 @Column({nullable: true})
  frontmatter!: string;

}