import {
  Column,
  Model,
  Table,
  PrimaryKey,
  HasMany,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.FLOAT)
  price: number;

  @HasMany(() => CartItem)
  cartItems: CartItem[];
}

@Table
export class Cart extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.UUID)
  user_id: string;

  @Column(DataType.STRING)
  status: string;

  @Column(DataType.DATE)
  created_at: Date;

  @Column(DataType.DATE)
  updated_at: Date;
}

@Table
export class CartItem extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => Cart)
  @Column(DataType.UUID)
  cart_id: string;

  @ForeignKey(() => Product)
  @Column(DataType.UUID)
  product_id: string;

  @Column(DataType.INTEGER)
  count: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => Product)
  product: Product;
}
