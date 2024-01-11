import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({type: "varchar"})
    name: string
}