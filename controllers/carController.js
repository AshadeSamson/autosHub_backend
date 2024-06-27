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


// UPDATE CAR
export const updateCar = async (req, res) => {

    try {
        const updatedCar = await carModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true})
        res.status(201).json(updatedCar);
    } catch (error) {
        res.status(500).json(error.message)
    }

}


// DELETE CAR
export const removeCar = async (req, res) => {

    try {
        await carModel.findByIdAndDelete(req.params.id)
        res.status(201).json("Car has been deleted from the collection");
    } catch (error) {
        res.status(500).json(error.message)
    }

}



// GET A CAR 
export const getCar = async (req, res) => {

    try {
        const singleCar = await carModel.findById(req.params.id)
        if(singleCar === null){
            res.status(404).json("Car not found")
        }
        else{
            res.status(201).json(singleCar)
        }
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}



// GET ALL CARS
export const getAllCars = async (req, res) => {

    try {

        let allCars

        const brand = req.query.brand

        if(brand){
            allCars = await carModel.find({
                brand: brand
            })
        }else{
            allCars = await carModel.find({})
        }
        res.status(201).json(allCars)
    } catch (error) {
        res.status(500).json(error.message)
    }
}