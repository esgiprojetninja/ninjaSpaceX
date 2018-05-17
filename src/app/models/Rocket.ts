export interface RocketDimensions {
    meters: number;
    feet: number;
}

export interface RocketMass {
    kg: number;
    lb: number;
}

export interface RocketPayloadWeight extends RocketMass {
    id: string;
    name: string;
}

export interface RocketThrust {
    kN: number;
    lbf: number;
}

export interface RocketFirstStage {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: RocketThrust;
    thrust_vacuum: RocketThrust;
}

export interface RocketSecondStage {
    engines: number;
    burn_time_sec: number;
    thrust: RocketThrust;
    payloads: {
        option_1: string;
        option_2?: string;
        composite_fairing: {
            height: RocketDimensions;
            diameter: RocketDimensions;
        }
    };
}

export interface RocketEngines {
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: RocketThrust;
    thrust_vacuum: RocketThrust;
    thrust_to_weight: number;
}

export interface RocketLandingLegs {
    number: number;
    material: string;
}

export interface Rocket {
    id: string;
    name: string;
    type: string;
    active: true;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: RocketDimensions;
    diameter: RocketDimensions;
    mass: RocketMass;
    payload_weights: RocketPayloadWeight[];
    first_stage: RocketFirstStage;
    second_stage: RocketSecondStage;
    engines: RocketEngines;
    landing_legs: RocketLandingLegs;
    description: string;
}
