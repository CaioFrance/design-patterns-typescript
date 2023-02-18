import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {
  private static type: Db = Db.MONGODB;

  static create(): IDbProduct {
    switch (DbProductFactory.type) {
      case Db.MONGODB:
        return new MongoDBProduct();
      default:
        return new MySQLProduct();
    }
  }
}
