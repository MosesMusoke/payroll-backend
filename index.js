const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { prisma } = require("./models/prismaClient");
const excelJs = require("exceljs");
let fs = require('fs');

const employeeRoutes = require("./routes/employeeRoutes");
const zohoRoutes = require("./routes/zohoRoutes");
const { home } = require("./controllers/employeeController");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use(cors());

app.get('/', home);
app.use('/api/employees', employeeRoutes);
app.use('/zoho', zohoRoutes);

// process.on('SIGINT', async () => {
//   await prisma.$disconnect();
//   process.exit();
// });

// process.on('SIGTERM', async () => {
//   await prisma.$disconnect();
//   process.exit();
// });

app.get("/export", async (request, response) => {
  try {
      let workbook = new excelJs.Workbook();

      const sheet = workbook.addWorksheet("employees");
      sheet.columns = [
          {header: "staffNIN", key: "staffNIN", width: 25},
          {header: "staffNssfNumber", key: "staffNssfNumber", width: 50},
          {header: "contributionType", key: "contributionType", width: 50},
          {header: "incomeType", key: "incomeType", width: 50},
          {header: "staffName", key: "staffName", width: 50},
          {header: "staffBasicPay", key: "staffBasicPay", width: 50},
          {header: "staffMedicalPay", key: "staffMedicalPay", width: 50},
          {header: "staffHousingPay", key: "staffHousingPay", width: 50},
          {header: "staffBonus", key: "staffBonus", width: 50},
          {header: "PAYE", key: "PAYE", width: 50},
          {header: "savings", key: "savings", width: 50},
      ] 
      
      let object = JSON.parse(fs.readFileSync("data.json", "utf8"));

      await object.employees.map((item, index) => {

          sheet.addRow({
              staffNIN: item.staffNIN,
              staffNssfNumber: item.staffNssfNumber,
              contributionType: item.contributionType,
              incomeType: item.incomeType,
              staffName: item.staffName,
              staffBasicPay: item.staffBasicPay,
              staffMedicalPay: item.staffMedicalPay,
              staffHousingPay: item.staffHousingPay,
              staffBonus: item.staffBonus,
              PAYE: item.PAYE,
              savings: item.savings
          });

      });

      response.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );

      response.setHeader(
          "Content-Disposition",
          "attachment;filename=" + "employees.xlsx"
      );

      workbook.xlsx.write(response)
      response.send(excelBuffer)

  } catch (error) {
      console.log(error);
  }
})

app.get('/api/employees/salary-details', async (req, res) => {
    const { year, month, nin } = req.query;

    try {
      const where = {};

      if (nin) {
        where.staffNIN = String(nin);
      }

      if (year || month) {
        where.payPeriod = {};

        if (year) {
          where.payPeriod.year = parseInt(String(year));
        }

        if (month) {
          where.payPeriod.month = parseInt(String(month));
        }
      }

      const employees = await prisma.employee.findMany({
        where,
        include: {
          organization: true,
          payPeriod: true
        }
      });

      if (!employees || employees.length === 0) {
        return res.status(404).json({ error: 'No employees found for the provided filter(s)' });
      }

      res.status(200).json(employees);
    } catch (error) {
      console.error("Error retrieving salary details:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(PORT,'0.0.0.0', () => {
  console.log(`✅ Server running on PORT: ${PORT}`);
});


