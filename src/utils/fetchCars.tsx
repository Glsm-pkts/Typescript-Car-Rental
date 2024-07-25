import { CarType } from "../types";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0d8e5a56admsh3ab38ef73bdc313p13f45ejsnbb73a6966989',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

type Params = {
	limit: number;
	make?: string;
	model?: string;
	fuel_type?: string;
	year?:number

}
const fetchCars = async ({
	limit,
	make = "bmw",
	model = "m4",
	fuel_type = "",
	year,
  }: Params): Promise<CarType[]> => {
	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;
  
	const res = await fetch(url, options);
  
	const data = await res.json();
  
	return data;
}

export default fetchCars;