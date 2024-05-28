import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';

import { Cart, Product, CartItem } from './models';

@Module({
  imports: [OrderModule, SequelizeModule.forFeature([Cart])],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
