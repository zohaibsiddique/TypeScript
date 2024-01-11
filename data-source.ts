import { DataSource } from "typeorm";
import {User} from "./User"

export const AppDataSource = new DataSource({
    type: 'react-native',
      database: 'test',
      location: 'default',
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [
        User
      ]
})