const models = require('../models')
const response = require('../helpers/response');


class DiscountController{
    static async create (req, res) {
        try {
            const { discountName,expired,total } = req.body
            const insert = await models.Discount.create({
                discountName,
                expired,
                total
            })
            res.status(201).json(response('success', 'discount created', insert))
        } catch (err) {
            res.status(500).json(response('fail', err.message))
        }
    }

    static async show(req, res) {
        const data = await models.Discount.findAll();
        return res
        .status(200)
        .json(response('Success', 'All data has been retrieved', {
            Discount: data
        }))

    }

    static async find(req, res) {
        const { id } = req.params;
        const data = await models.Discount.findByPk(id);
        try {
            if (!data) throw new Error("Discount not found");
            response.data = data;
            response.status = "success";
            res.json(response);
        } catch (error) {
            response.message = error.message;
            response.data = {};
            response.status = "fail";
            res.status(404).json(response);
        }
    }

    static async update(req, res) {
        try {
            const data = await models.Discount.findByPk(req.params.id)
            if(data){
                await models.Discount.update(req.body, {
                    where: {
                        id: req.params.id,
                    },
                })
            }
            
            let dataRes = {
                "New Data" : req.body,
                "Old Data" : {
                    address_name: data.dataValues.discountName,
                    city: data.dataValues.expired,
                    zipcode: data.dataValues.total
                }
            }

            return res
            .status(201)
            .json(response('Success', 'All data has been updates', {
                Discount: dataRes
            }))

        } catch(error) {

            return res
            .status(201)
            .json(response('Fail', 'Error', {
                Message: error.message
            }))

        }
    }

    static async delete(req, res) {
        
        try {
            const { id } = req.params;
            const data = await models.Discount.destroy({ 
                where: {
                    id: id
                }
            });

            return res
            .status(201)
            .json(response('Success', 'Discount delete success', {
                Discount: data
            }))

        } catch (err) {
            return res
            .status(201)
            .json(response('Faild', 'Discount delete Fail', {
                message: err.message
            }))
        }
    }
    

}

module.exports = DiscountController
