import Employee from '../models/employeeModel.js';

function calculateDaysWorked(dateEntry, dateRetire) {
  const entry = new Date(dateEntry);
  const retire = dateRetire ? new Date(dateRetire) : new Date();
  const differenceInTime = retire - entry;
  return Math.floor(differenceInTime / (1000 * 3600 * 24));
}

function calculateSeverancePay(salary, daysWorked) {
  return (salary * daysWorked) / 360;
}

export async function getEmployees(req, res) {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function postEmployee(req, res) {
  const { documentNumber, names, dateEntry, dateRetire, salary } = req.body;
  const daysWorked = calculateDaysWorked(dateEntry, dateRetire);
  const severancePay = calculateSeverancePay(salary, daysWorked);

  const employee = new Employee({
    documentNumber,
    names,
    dateEntry,
    dateRetire,
    salary,
    daysWorked,
    severancePay
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function putEmployee(req, res) {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const { documentNumber, names, dateEntry, dateRetire, salary } = req.body;
    const daysWorked = calculateDaysWorked(dateEntry, dateRetire);
    const severancePay = calculateSeverancePay(salary, daysWorked);

    employee.documentNumber = documentNumber;
    employee.names = names;
    employee.dateEntry = dateEntry;
    employee.dateRetire = dateRetire;
    employee.salary = salary;
    employee.daysWorked = daysWorked;
    employee.severancePay = severancePay;

    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json(error);
  }
}
