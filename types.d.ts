interface Asteroids {
  name: string;
  asteroidId: string;
  diameterMin: number;
  diameterMax: number;
  isDangerous: boolean;
  missDistanceKm: string;
  missDistanceLn: string;
  dateMaxArrival: string;
}

interface Asteroid {
  asteroidId: string;
  name: string;
  designation: string;
  absoluteMagnitude: number;
  diameter: Diameter;
  isDangerous: boolean;
  closeApproachData: CloseApproachData[];
  orbitalData: OrbitalData;
}

interface Diameter {
  kilometers: Kilometers
  meters: Meters
  miles: Miles
  feet: Feet
}

interface Kilometers {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface Meters {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface Miles {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface Feet {
  estimated_diameter_min: number
  estimated_diameter_max: number
}



interface CloseApproachData {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: RelativeVelocity
  miss_distance: MissDistance
  orbiting_body: string
}

interface RelativeVelocity {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

interface MissDistance {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}

interface OrbitalData {
  orbit_id: string
  orbit_determination_date: string
  first_observation_date: string
  last_observation_date: string
  data_arc_in_days: number
  observations_used: number
  orbit_uncertainty: string
  minimum_orbit_intersection: string
  jupiter_tisserand_invariant: string
  epoch_osculation: string
  eccentricity: string
  semi_major_axis: string
  inclination: string
  ascending_node_longitude: string
  orbital_period: string
  perihelion_distance: string
  perihelion_argument: string
  aphelion_distance: string
  perihelion_time: string
  mean_anomaly: string
  mean_motion: string
  equinox: string
  orbit_class: OrbitClass
}

interface OrbitClass {
  orbit_class_type: string
  orbit_class_range: string
  orbit_class_description: string
}