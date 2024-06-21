import carModel from "../model/car.js"



// ADD NEW CAR
export const addNewCar = async (req, res) => {

    const newCar = new carModel(req.body)

    try {
        const savedCar = await newCar.save()
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(500).json(error.message)
    }

}