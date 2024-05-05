import { SomeObject } from '@admixltd/admix-component-library'
import { Bike, BikeCountResponse } from '@app/services/Bikes/types'
import { atom } from 'recoil'

const prefix = `BikePage`

export const DataListAtom = atom({
	key: `${prefix}DataList`,
	default: [] as Bike[],
})

export const BikesTotalCountAtom = atom({
	key: `${prefix}BikesTotalCount`,
	default: {} as BikeCountResponse,
})

export const LoadingDataAtom = atom({
	key: `${prefix}LoadingData`,
	default: false,
})

export const BikeFilterAtom = atom<SomeObject>({
	key: `${prefix}BikeFilter`,
	default: {},
})

export const PageSizeAtom = atom({
	key: `${prefix}PageSize`,
	default: 10,
})

export const PageIndexAtom = atom({
	key: `${prefix}PageIndex`,
	default: 1,
})

export const FilterLoadingAtom = atom({
	key: `${prefix}FilterLoading`,
	default: false,
})
