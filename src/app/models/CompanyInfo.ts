export interface Headquarters {
  address: string;
  city: string;
  state: string;
}

export interface CompanyInfo {
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  launch_sites: number;
  test_sites: number;
  ceo: string;
  cto: string;
  coo: string;
  cto_propulsion: string;
  valuation: number;
  headquarters: Headquarters;
  summary: string;
}
