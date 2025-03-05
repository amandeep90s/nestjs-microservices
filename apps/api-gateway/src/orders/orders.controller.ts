import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.ORDERS_SERVICE)
    private orderServiceClient: ClientProxy,
  ) {}

  @Post()
  createOrder(@Body() order: { item: string; quantity: number }) {
    return this.orderServiceClient.send('create_order', order);
  }
}
