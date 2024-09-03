function generateExcel() {
   
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const basic = parseFloat(document.getElementById('basic').value);
    const allowances = parseFloat(document.getElementById('allowances').value);
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    
    
    const grossSalary = basic + allowances;

    
    const salaryData = [
        ["Description", "Amount"],
        ["Employee Name", name],
        ["Emp_ID", id],
        ["Basic Salary", basic],
        ["Other Allowances", allowances],
        ["Month", month],
        ["Year", year],
        ["Gross Salary", grossSalary],
    ];

    
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(salaryData);
    
    
    XLSX.utils.book_append_sheet(wb, ws, "Salary Slip");
    
    
    XLSX.writeFile(wb, `Salary_Slip_${name}_${month}_${year}.xlsx`);
}
