
export default async function getAsteroid(id: string): Promise<Asteroid> {
      const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=hHAtgTIdfQxXT7Wx6dl6cLfpx4piX3DZOrYbLvmE`)
         .then(res => res.json());
      const data = await res;
      const {
         neo_reference_id,
         name,
         designation,
         absolute_magnitude_h,
         estimated_diameter,
         is_potentially_hazardous_asteroid,
         close_approach_data,
         orbital_data
      } = data;

      const absoluteMagnitude = absolute_magnitude_h;
      const diameter = estimated_diameter;
      const isDangerous = is_potentially_hazardous_asteroid;
      const closeApproachData = close_approach_data;
      const asteroidId = neo_reference_id;
      const orbitalData = orbital_data;

      const asteroid = {
         asteroidId,
         name,
         designation,
         absoluteMagnitude,
         diameter,
         isDangerous,
         closeApproachData,
         orbitalData
      }

      return asteroid;
}