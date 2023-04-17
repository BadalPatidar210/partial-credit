const express = require("express");
const { CustomerDetailsValidators } = require("../../libs/validators");
const { validate } = require("../../middleware");
const { CustomerDetailsServices } = require("../../services");

const router = express.Router();

router.post(
  "/add",
  validate(CustomerDetailsValidators.addCustomerValidator),
  async (req, res) => {
    try {
      await CustomerDetailsServices.addCustomer(req.body);
      res.send({
        success: true,
        message: "Customer added successfully",
      });
    } catch (err) {
      console.error(err);
    }
  }
);

router.get(
  "/getCustomer",
  validate(CustomerDetailsValidators.getCustomerValidator),
  async (req, res) => {
    try {
      const customer = await CustomerDetailsServices.getCustomerByCustomerId(
        req.query
      );
      res.send({
        success: true,
        data: customer,
      });
    } catch (err) {
      console.error(err);
    }
  }
);

router.get(
  "/getCustomers",
  validate(CustomerDetailsValidators.getCustomersValidator),
  async (req, res) => {
    try {
      const customers = await CustomerDetailsServices.getCustomersBySalesId(
        req.query
      );
      res.send({
        success: true,
        data: customers,
      });
    } catch (err) {
      console.error(err);
    }
  }
);

module.exports = router;
