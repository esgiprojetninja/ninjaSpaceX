export enum Order {
  asc = "asc",
  desc = "desc"
}

export interface LaunchFilters {
  // Use true to show mongo document id's
  id?: boolean;
  // Filter launches by mongo document id
  flight_id?: number;
  // Change result ordering by asc or desc
  order?: Order;
  // Filter by a date range
  start?: Date;
  // Filter by a date range
  final?: Date;
  // Filter by flight number
  flight_number?: number;
  // Filter by year
  launch_year?: string;
  // Filter by UTC timestamp
  launch_date_utc?: Date;
  // Filter by local ISO timestamp
  launch_date_local?: Date;
  // Filter by rocket id
  rocket_id?: string;
  // Filter by rocket name
  rocket_name?: string;
  // Filter by rocket type
  rocket_type?: string;
  // Filter by core serial #
  core_serial?: string;
  // Filter by dragon capsule serial #
  cap_serial?: string;
  // Filter by core flight number
  core_flight?: number;
  // Filter by core block number
  block?: number;
  // Filter by core reusability
  core_reuse?: boolean;
  // Filter by Falcon Heavy side core 1 reuse
  side_core1_reuse?: boolean;
  // Filter by Falcon Heavy side core 2 reuse
  side_core2_reuse?: boolean;
  // Filter by fairing reuse
  fairings_reuse?: boolean;
  // Filter by dragon capsule reuse
  capsule_reuse?: boolean;
  // Filter by launch site id
  site_id?: string;
  // Filter by launch site name
  site_name?: string;
  // Filter by long launch site name
  site_name_long?: string;
  // Filter by payload id
  payload_id?: string;
  // Filter by launch customer
  customer?: string;
  // Filter by payload type
  payload_type?: string;
  // Filter by payload orbit
  orbit?: string;
  // Filter by successful launches
  launch_success?: boolean;
  // Filter by launches with reused cores
  reused?: boolean;
  // Filter by sucessful core landings
  land_success?: boolean;
  // Filter by landing method
  landing_type?: string;
  // Filter by landing vehicle
  landing_vehicle?: string;
}
