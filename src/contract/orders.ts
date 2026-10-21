/** Shared HTTP contract of the orders API (synthetic). */
export interface OrderDto {
  readonly id: string
  readonly status: OrderStatus
  readonly totalCents: number
  readonly note?: string
}

export type OrderStatus = (typeof ORDER_STATUSES)[number]

export const ORDER_STATUSES = ['new', 'shipped', 'cancelled'] as const

export const ORDERS_PATH = '/shops/:shopId/orders'
