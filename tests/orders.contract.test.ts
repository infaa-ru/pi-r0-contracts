import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { ORDER_STATUSES } from '../src/contract/orders.ts'

describe('orders contract', () => {
  it('lists the order statuses', () => {
    assert.ok(ORDER_STATUSES.includes('new'))
    assert.ok(ORDER_STATUSES.includes('returned'))
  })
})
