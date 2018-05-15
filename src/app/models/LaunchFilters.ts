enum Order {
  asc = "asc",
  desc = "desc"
}

export interface LaunchFilters {
  id?: boolean;
  flight_id?: number;
  order?: Order;
  start?: Date;
  end?: Date;
  flight_number?: number;
  launch_year?: "string";
  launch_date_utc?: Date;
  launch_date_local?: Date;
  rocket_id?: string;
  rocket_name?: string;
  rocket_type?: string;
  core_serial?: string;
  cap_serial?: string;
  core_flight?: number;
  block?: number;
  core_reuse?: boolean;
  side_core1_reuse?: boolean;
  side_core2_reuse?: boolean;
  fairings_reuse?: boolean;
  capsule_reuse?: boolean;
  site_id?: string;
  site_name?: string;
  site_name_long?: string;
  payload_id?: string;
  customer?: string;
  payload_type?: string;
  orbit?: string;
  launch_success?: boolean;
  reused?: boolean;
  land_success?: boolean;
  landing_type?: string;
  landing_vehicle?: string;
}
