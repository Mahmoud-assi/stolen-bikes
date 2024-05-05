interface BikeFilter {
	date_stolen: number
	description: string
	frame_model: string
	id: number
	is_stock_img: boolean
	large_img: string
	location_found: string
	manufacturer_name: string
	external_id: number
	registry_name: string
	registry_url: string
	serial: string
	status: string
	stolen: boolean
	stolen_coordinates: null
	stolen_location: string
	thumb: string
	title: string
	url: string
	year: string
	propulsion_type_slug: string
	cycle_type_slug: string
}

export type Bike = BikeFilter

export interface BikeCountResponse {
	proximity: number
	stolen: number
	non: number
}

export interface Color {
	name: string
	slug: string
	id: number
}
