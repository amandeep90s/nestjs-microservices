import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('create_order')
  createOrder(order: { id: number; item: string; quantity: number }) {
    return { message: 'Order Created', order };
  }
}
