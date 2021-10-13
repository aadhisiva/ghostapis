import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.
@Entity({ name: "tags" })
export class Tags {

    @PrimaryColumn()
    id: string;

    @Column({ nullable: true })
    name: string;

   @Column({ nullable: true })
    slug!: string;

   @Column({ nullable: true })
    description!: string;

   @Column({ nullable: true })
    feature_image!: string;

   @Column({ nullable: true })
    visibility!: string;

   @Column({ nullable: true })
    meta_title!: string;

   @Column({ nullable: true })
    meta_description!: string;

   @Column({ nullable: true })
    og_image!: string;

   @Column({ nullable: true })
    og_title!: string;

   @Column({ nullable: true })
    og_description!: string;

   @Column({ nullable: true })
    twitter_image!: string;

   @Column({ nullable: true })
    twitter_title!: string;

   @Column({ nullable: true })
    twitter_description!: string;

   @Column({ nullable: true })
    codeinjection_head!: string;

   @Column({ nullable: true })
    codeinjection_foot!: string;

   @Column({ nullable: true })
    canonical_url!: string;

   @Column({ nullable: true })
    accent_color!: string;

   @Column({ nullable: true })
    url!: string;

}