export default async function getAllAsteroids(): Promise<Asteroids[]> {
  let today: string = new Date().toISOString().slice(0, 10);
  try {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=hHAtgTIdfQxXT7Wx6dl6cLfpx4piX3DZOrYbLvmE`)
        .then(res => res.json());
    const data = await res.near_earth_objects;
    const asteroids: Asteroids[] = [];

    for(let date in data) {
      for(let asteroid of data[date]) {
        const {
                name,
                estimated_diameter,
                is_potentially_hazardous_asteroid,
                neo_reference_id,
                close_approach_data
          } = asteroid;
        const asteroidId = neo_reference_id;
        const diameterMin = estimated_diameter.meters.estimated_diameter_min;
        const diameterMax = estimated_diameter.meters.estimated_diameter_max;
        const isDangerous = is_potentially_hazardous_asteroid;
        const dateMaxArrival = close_approach_data[0].close_approach_date;
        const missDistanceKm = close_approach_data[0].miss_distance.kilometers;
        const missDistanceLn = close_approach_data[0].miss_distance.lunar;
        
        asteroids.push({
            name,
            asteroidId,
            diameterMin,
            diameterMax,
            isDangerous, 
            dateMaxArrival,
            missDistanceKm,
            missDistanceLn
        });
      }
    }
  return asteroids;
} catch(error) {
    console.error("Ошибка при получении данных", error)
    return [];
}
};
