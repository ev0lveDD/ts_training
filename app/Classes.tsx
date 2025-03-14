export default function Classes(){

class Department {
   // private readonly id: string;
   // private name: string;
    protected employees: string[] = []; // same as private, but available in other instances of this classes

    constructor(private readonly id: string, public name: string) {
      //  this.id = id;
      //  this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }
    
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT'); //super calls the constructor of the base class in this case - Department
        this.admins = admins;
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        } 
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }

}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
it.printEmployeeInformation();
it.describe();

console.log(it);


const accounting = new AccountingDepartment('d2', []);

// console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'Year End report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    </main>
  )
}
