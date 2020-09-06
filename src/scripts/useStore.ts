import { rentalCartContent } from 'src/data/rentalCartContent'
import create from 'zustand'
import { combine } from 'zustand/middleware'

const storeCartContents: { [name: string]: number } = {}

export const useStore = create(
  combine(
    {
      storeCartContents,
      storeCartPrice: 0
    },
    (set, get) => ({
      STORE_MANAGE_CART_ITEM: (mode: rentalMode, key: number | string, action: 'add' | 'remove' | 'clear') => {
        const storeCartContents = get().storeCartContents

        let newCartContents = { ...storeCartContents }
        const id = [mode, key].join('--')
        if (action === 'add') newCartContents[id] = storeCartContents[id] ? storeCartContents[id] + 1 : 1
        if (action === 'remove') newCartContents[id] = storeCartContents[id] - 1
        if (action === 'clear') newCartContents[id] = 0
        if (newCartContents[id] === 0) delete newCartContents[id]

        let newCartPrice = 0
        const objectKeys = Object.keys(newCartContents)
        objectKeys.map((objectKey) => {
          const [mode, key] = objectKey.split('--')
          newCartPrice += rentalCartContent[mode][Number(key)].price * newCartContents[objectKey]
        })

        set(() => ({ storeCartContents: newCartContents, storeCartPrice: newCartPrice }))
      }
    })
  )
)
