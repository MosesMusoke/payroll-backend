const { prisma } = require('../models/prismaClient');

exports.storeEmployees = async (req, res) => {
  try {
    const data = req.body;

    if (!data.organization?.organizationName || !data.organization?.registrationNumber) {
      return res.status(400).json({ error: 'Missing organization details' });
    }

    if (!data.payPeriod?.year || !data.payPeriod?.month) {
      return res.status(400).json({ error: 'Missing pay period details' });
    }

    const organization = await prisma.organization.upsert({
      where: { organizationName: data.organization.organizationName },
      update: {
        registrationNumber: data.organization.registrationNumber,
      },
      create: {
        organizationName: data.organization.organizationName,
        registrationNumber: data.organization.registrationNumber,
      },
    });

    const payPeriod = await prisma.payPeriod.create({
      data: {
        year: data.payPeriod.year,
        month: data.payPeriod.month,
      },
    });

    const employeeData = data.employees.map(emp => ({
      ...emp,
      organizationId: organization.id,
      payPeriodId: payPeriod.id,
    }));

    await prisma.employee.createMany({ data: employeeData });

    res.status(201).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        organization: true,
        payPeriod: true,
      },
      orderBy: { id: 'desc' },
    });

    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.home = async (req, res) => {

    res.status(200).json({"Welcome" : "Welcomne To this payroll backend service"});

};

