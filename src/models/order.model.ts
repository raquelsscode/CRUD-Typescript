import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT a.id, a.userId, JSON_ARRAYAGG(b.id) AS productsIds
      FROM Trybesmith.Orders AS a
      INNER JOIN Trybesmith.Products AS b
      ON a.id = b.orderId
      GROUP BY a.id
      ORDER BY a.userId;`);
    const [rows] = result;
    return rows as Order[];
  }
}