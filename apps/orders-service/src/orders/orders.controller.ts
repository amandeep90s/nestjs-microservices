import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('create_order')
  createOrder(order: { item: string; quantity: number }) {
    console.log({ emssage: 'Order received on the Order Microservice', order });
    return { message: 'Order Created', order };
  }
}
