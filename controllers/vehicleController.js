import Vehicle from '../models/vehicle.js'

export async function getVehicle(req, res){
    try {
        const vehicles =  await Vehicle.find()
        res.json(vehicles)
    } catch (error) {
        res.status(500).json({error})
    }
}

export async function postVehicle(req, res){
    const body = req.body //Get data from postman or form
    try {
        const vehicle = new Vehicle(body) //Create objecto vehicle
        await vehicle.save()//Create vehicle in Mongo
        res.status(201).json('Vehicle created successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function putVehicle(req, res){
    const {plate, color, model} = req.body//Destructuring data from body
    try {
        //Find and update the object in Mongo
        await Vehicle.findOneAndUpdate({plate:plate},{color:color, model: model})
        res.status(200).json('Vehicle update successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function deleteVehicle(req, res){
    const _id = req.params.id //Get the id from postman or thunderclient or form
    //const plate = req.params.plate
    try {
        await Vehicle.findByIdAndDelete({_id:_id})
        //await Vehicle.findOneAndDelete({plate:plate})
        res.json('Vehicle deleted succesfully')
    } catch (error) {
        res.status(404).json('Vehicle don´t found')
    }
}




