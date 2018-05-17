export interface DetailedCore {
  core_serial: string;
  block: number;
  status: string;
  original_launch: Date;
  missions: string[];
  rtls_attempt: boolean;
  rtls_landings: number;
  asds_attempt: boolean;
  asds_landings: number;
  water_landing: boolean;
  details: string;
}
