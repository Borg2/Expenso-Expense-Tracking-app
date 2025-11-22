const pages = {
  transactions: `<h2>Transactions</h2><p>All your expenses will appear here.</p>
                        <div id="expenses-container">
                        <div class="row">
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <div>
                                <h2>Expenses</h2>
                            </div>
                            <div class="d-flex align-items-center gap-3 flex-wrap">
                            <div>
                                <select class="form-select form-select-sm" id="filter-category" required>
                                <option value="">all</option>
                                <option>Food</option>
                                <option>Transport</option>
                                <option>Shopping</option>
                                <option>Bills</option>
                                <option>Entertainment</option>
                                <option>Other</option>
                            </select>
                            </div>
                            <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div class="col-auto"><label class="form-label mb-0">From:</label></div>
                                    <div class="col-auto"><input type="date" id="filter-from" class="form-control form-control-sm"></div>
                                    <div class="col-auto"><label class="form-label mb-0">To:</label></div>
                                    <div class="col-auto"><input type="date" id="filter-to" class="form-control form-control-sm"></div>
                                    
                            
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <div class="col-auto"><button class="btn btn-sm button-grey" onclick="listExpenses(undefined,undefined,true)">Filter</button></div>
                                <div class="col-auto"><button class="btn button-grey-inv btn-sm" onclick="clearFilters()">Clear</button></div>
                            </div>
                            </div>
                            
                            
                        </div>
                        </div>
                    <table class="table table-striped table-hover" id="expenses-table">
                        <thead>
                        <tr>
                            <th data-sort="name">Name <span class="d-inline-flex"><button class="bg-transparent border-0" onclick="listExpenses('name',false);">↑</button><button class="bg-transparent border-0" onclick="listExpenses('name');">↓</button></span></th>
                            <th data-sort="category">Category <span class="d-inline-flex"><button class="bg-transparent border-0" onclick="listExpenses('category',false);">↑</button><button class="bg-transparent border-0" onclick="listExpenses('category');">↓</button></span></th>
                            <th data-sort="Price">Price <span class="d-inline-flex"><button class="bg-transparent border-0" onclick="listExpenses('price',false);">↑</button><button class="bg-transparent border-0" onclick="listExpenses('price');">↓</button></span></th>
                            <th data-sort="date">Date <span class="d-inline-flex"><button class="bg-transparent border-0" onclick="listExpenses('date',false);">↑</button><button class="bg-transparent border-0" onclick="listExpenses('date');">↓</button></span></th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    </div>`,
  budget: ` <h2 id="intro-budget"></h2>
                    <div class="mb-3">
                    <label class="form-label">Select Month & Year</label>
                    <input type="month" onchange="updateBudget()"id="budget-month-picker" class="form-control" value="2025-11">
                    </div>
                    <h4 id ="budget"></h4>
                    <h4 id ="used-budget"></h4>
                    <div class="progress mt-3" style="height:30px">
                    <div id = "budget-bar" class="progress-bar bg-warning"></div></div>
                    <p id ="budget-warning" class="text-danger"></p>
                    <form id="budget-form" class="mt-3"onsubmit="return changeBudget();">
                    <div class="mb-3">
                    <label class="form-label">Enter new budget for chosen month</label>
                    <input type="number" id="budget-price" class="form-control" min="0" placeholder="e.g., 30"required>
                    </div>
                    <button type="submit" class="btn btn-success" >
                    <i class="fas fa-check me-2"></i> Change Budget
                    </button>
                    </form>
                            `,

  reports: `  <h2>Reports</h2>
                    <p>View monthly summaries and charts.</p>
                    <h2 id="intro-reports"></h2>
                    <div class="mb-3">
                    <label class="form-label">Select Month & Year</label>
                    <input type="month" onchange="initPieChart()"id="reports-month-picker" class="form-control" value="2025-11">
                    </div>
                    <div  style="max-width: 500px; margin: 0 auto;">
                    <canvas class="justify-content-center" id="myPieChart"></canvas>
                    </div>
                    <div class="row mb-4 text-center justify-content-center mt-2">
                    <div class="col-4">
                        <label class="form-label">Select Year</label>
                        <input 
                            type="number" 
                            id="reports-year-picker" 
                            class="form-control" 
                            min="2000" 
                            max="2030" 
                            value="2025"
                            onchange="renderYearChart()">
                    </div>
                    </div>
                    <div style="margin: 0 auto;">
                    <canvas id="lineChart" height ="300"></canvas>
                    </div>
`,
  add_expense: `  <div class="row">
                <div class="col-md-6">
                    <h3 id="intro-budget"></h3>
                  <div class="mb-3">
                    <label class="form-label">Select Month & Year</label>
                    <input
                      type="month"
                      onchange="updateBudget()"
                      id="budget-month-picker"
                      class="form-control"
                      value="2025-11"
                    />
                  </div>
                  <h6 id="budget"></h6>
                  <h6 id="used-budget"></h6>
                  <h6 id="availible-budget"></h6>
                  <div class="progress mt-3" style="height: 30px">
                    <div id="budget-bar" class="progress-bar bg-warning"></div>
                  </div>
                  <p id="budget-warning" class="text-danger"></p>
                  <form
                    id="budget-form"
                    class="mt-3"
                    onsubmit="return changeBudget();"
                  >
                    <div class="mb-3">
                      <label class="form-label"
                        >Enter new budget for chosen month</label
                      >
                      <input
                        type="number"
                        id="budget-price"
                        class="form-control"
                        min="0"
                        placeholder="e.g., 30"
                        required
                      />
                    </div>
                    <button type="submit" class="btn btn-sm button-grey">
                      <i class="fas fa-check me-2"></i> Change Budget
                    </button>
                  </form>
                  
                </div>
                <div class="col-md-6">
                  <h3>Add New Expense</h3>
                  <form
                    id="expense-form"
                    class="mt-3"
                    onsubmit="return saveExpense();"
                  >
                    <div class="mb-3">
                      <label class="form-label">Expense Name</label>
                      <input
                        type="text"
                        id="expense-name"
                        class="form-control"
                        placeholder="e.g., Coffee"
                        required
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Category</label>
                      <select
                        class="form-select"
                        id="expense-category"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                        <option>Bills</option>
                        <option>Entertainment</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Price</label>
                      <input
                        type="number"
                        id="expense-price"
                        min="0"
                        class="form-control"
                        placeholder="e.g., 30"
                        required
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input
                        type="date"
                        id="expense-date"
                        class="form-control"
                        required
                      />
                    </div>

                    <button type="submit" class="btn btn-sm button-grey">
                      <i class="fas fa-check me-2"></i> Add Expense
                    </button>
                  </form>
                </div>
              </div>
                        `,
};

document.addEventListener("DOMContentLoaded", updateBudget());

document.querySelectorAll("[data-page]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;

    showPage(page);

    document
      .querySelectorAll(".list-group-item")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

function showPage(page) {
  document.getElementById("page-content").innerHTML = pages[page];

  if (page == "transactions") {
    listExpenses();
  } else if (page == "budget" || page == "add_expense") {
    updateBudget();
  } else if (page == "reports") {
    initPieChart();
    renderYearChart();
  }
}

let expense = {};
let filteredExpenses = [];
let filterFlag = false;

function saveExpense() {
  const newExpense = {
    name: document.getElementById("expense-name").value.trim(),
    category: document.getElementById("expense-category").value,
    price: document.getElementById("expense-price").value,
    date: document.getElementById("expense-date").value,
  };

  if (
    !newExpense.name ||
    !newExpense.category ||
    !newExpense.date ||
    !newExpense.price
  ) {
    alert("Fill all fields");
    return false;
  }
  if(!checkBudgetLimit(newExpense.date.substring(0,7), parseFloat(newExpense.price))){
      alert("Adding this expense exceeds your budget for the month.");
      return false;
  }

  let expenses = fetchExpenses();

  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  alert("Expense saved!");
  document.getElementById("expense-form").reset();
  document.getElementById("budget-month-picker").value =
    newExpense.date.substring(0, 7);
  updateBudget();

  return false;
}

function checkBudgetLimit(month,amount){
    let budget = getBudgetForMonth(month);
    let usedBudget = getTotalExpensesForMonth(month);
    if(usedBudget + amount > budget){
        return false;
    }else{
        return true;
    }
}

function deleteExpense(name, category, date, price) {
  let expenses = [];
  const saved = localStorage.getItem("expenses");
  if (saved) {
    expenses = JSON.parse(saved);
  }
  expenses = expenses.filter(
    (exp) =>
      !(
        exp.name == name &&
        exp.category == category &&
        exp.date == date &&
        exp.price == price
      )
  );
  localStorage.setItem("expenses", JSON.stringify(expenses));
  alert("Expense deleted!");
  listExpenses();
}

function fetchExpenses() {
  let expenses = [];
  const saved = localStorage.getItem("expenses");
  if (saved) {
    try {
      expenses = JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  return expenses;
}
function getSortedExpenses(sortField, asc) {
  let expenses = [];
  if (filterFlag) {
    expenses = filteredExpenses;
  } else {
    expenses = fetchExpenses();
  }
  expenses.sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];

    if (sortField === "date") {
      valA = new Date(valA);
      valB = new Date(valB);
    } else if (sortField === "price") {
      valA = parseFloat(valA);
      valB = parseFloat(valB);
    } else {
      valA = (valA ?? "").toString().toLowerCase();
      valB = (valB ?? "").toString().toLowerCase();
    }

    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });

  return expenses;
}

function getFilteredExpenses(cat = null, from = null, to = null) {
  let expenses = fetchExpenses();
  if (cat && cat != "all") {
    expenses = expenses.filter((exp) => exp.category == cat);
  }
  if (from || to) {
    expenses = expenses.filter((exp) => {
      if (from && exp.date < from) return false;
      if (to && exp.date > to) return false;
      return true;
    });
  }
  filterFlag = true;
  filteredExpenses = expenses;
  return expenses;
}

function clearFilters() {
  filteredExpenses = [];
  filterFlag = false;
  document.getElementById("filter-category").value = "";
  document.getElementById("filter-from").value = "";
  document.getElementById("filter-to").value = "";
  listExpenses();
}
function listExpenses(sortField = "date", asc = true, filter = false) {
  const tbody = document.querySelector("#expenses-table tbody");
  tbody.innerHTML = "";
  let expenses = [];
  if (filter) {
    let category = document.getElementById("filter-category").value;
    let from = document.getElementById("filter-from").value;
    let to = document.getElementById("filter-to").value;
    expenses = getFilteredExpenses(category, from, to);
  }

  expenses = getSortedExpenses(sortField, asc);

  if (!expenses || expenses.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="4" style="text-align:center;">No expenses yet.</td>`;
    tbody.appendChild(row);
    return;
  }

  expenses.forEach((exp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${exp.name}</td>
        <td>${exp.category}</td>
        <td>${exp.price}</td>
        <td>${exp.date}</td>
        <td><button class="btn btn-sm button-red" onclick="deleteExpense('${exp.name}','${exp.category}','${exp.date}','${exp.price}')">
            <i class="fas fa-trash"></i>
        </button>
        </td>
        
        `;
    tbody.appendChild(tr);
  });
}

function getCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function formatMonth(yyyyMm) {
  const [year, month] = yyyyMm.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function changeBudget() {
  let amount = document.getElementById("budget-price").value;
  let picker = document.getElementById("budget-month-picker");
  date = picker ? picker.value : getCurrentMonth();

  let budgets = JSON.parse(localStorage.getItem("monthlyBudgets") || "{}");
  if (!budgets[date]) {
    budgets[date] = { month: date, amount: parseFloat(amount) };
  } else {
    budgets[date].amount = parseFloat(amount);
  }
  localStorage.setItem("monthlyBudgets", JSON.stringify(budgets));
  document.getElementById("budget-form").reset();
  alert("Budget updated!");
  updateBudget(date);
  return false;
}

function getBudgetForMonth(month) {
  const budgets = JSON.parse(localStorage.getItem("monthlyBudgets") || "[]");
  const budget = budgets[month];
  return budget ? budget.amount : 0.0;
}

function getExpensesListForMonth(month) {
  const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  return expenses.filter((exp) => exp.date.startsWith(month));
}
function getTotalExpensesForMonth(month) {
  const expenses = getExpensesListForMonth(month);
  return expenses.reduce((sum, exp) => sum + (parseFloat(exp.price) || 0.0), 0.0);
}

function updateBudget(month = null) {
  document.getElementById("budget-warning").textContent = "";

  if (!month) {
    const picker = document.getElementById("budget-month-picker");
    month = picker ? picker.value : getCurrentMonth();
  }

  document.getElementById(
    "intro-budget"
  ).textContent = `Budget for ${formatMonth(month)}`;

  let budget = getBudgetForMonth(month);

  document.getElementById(
    "budget"
  ).textContent = `Budget: ${budget.toFixed(2)} EGP`;

  let usedBudget = getTotalExpensesForMonth(month);

  document.getElementById(
    "used-budget"
  ).textContent = `Used: ${usedBudget.toFixed(2)} EGP`;

  let availible = budget - usedBudget > 0 ? budget - usedBudget : 0.0;
  document.getElementById(
    "availible-budget"
  ).textContent = `Availible: ${(availible)} EGP`;

  if (budget == 0) {
    document.getElementById("budget-warning").textContent =
      "Please enter a budget for this month.";
    document.getElementById("budget-bar").style.width = "0%";
    document.getElementById("budget-bar").textContent = "0% Used";
    return;
  } else if (usedBudget == 0) {
    document.getElementById("budget-bar").style.width = "0%";
    document.getElementById("budget-bar").textContent = "0% Used";
    return;
  }

  percentageUsed = (usedBudget / budget) * 100;
  document.getElementById("budget-bar").style.width =
    percentageUsed.toFixed(1) + "%";
  document.getElementById("budget-bar").textContent =
    percentageUsed.toFixed(1) + "% Used";

  if (percentageUsed > 0 && percentageUsed < 60) {
    document.getElementById("budget-bar").className = "progress-bar bg-success";
  } else if (percentageUsed >= 60 && percentageUsed < 90) {
    document.getElementById("budget-bar").className = "progress-bar bg-warning";
  } else if (percentageUsed >= 90 && percentageUsed < 100) {
    document.getElementById("budget-bar").className = "progress-bar bg-danger";
    document.getElementById("budget-warning").textContent =
      "Warning: You are close to exceeding your budget!";
  } else if (percentageUsed >= 100) {
    document.getElementById("budget-bar").className = "progress-bar bg-danger";
    document.getElementById("budget-warning").textContent =
      "Alert: You have exceeded your budget!";
  }
}

function initPieChart() {
  const ctx = document.getElementById("myPieChart").getContext("2d");

  const picker = document.getElementById("reports-month-picker");
  const month = picker ? picker.value : getCurrentMonth();
  let monthExpenses = getExpensesListForMonth(month);

  let categoryTotals = {};
  monthExpenses.forEach((exp) => {
    let cat = exp.category;
    let price = parseFloat(exp.price) || 0.0;
    categoryTotals[cat] = (categoryTotals[cat] || 0) + price;
  });

  const labels = Object.keys(categoryTotals);
  const values = Object.values(categoryTotals);
  const totalSpending = values.reduce((sum, val) => sum + val, 0);
  const totalBudget = getBudgetForMonth(month);

const colors = [
  "rgb(108, 117, 125)",  
  "rgb(73, 80, 87)",    
  "rgb(206, 212, 218)", 
   
  "rgb(173, 181, 189)",   
  "rgb(134, 142, 150)", 
  "rgb(52, 58, 64)",   
].slice(0, labels.length || 0);

  let diff = totalBudget - totalSpending;
  if (diff > 0) {
    values.push(totalBudget - totalSpending);
    labels.push("Remaining Budget");
    colors.push("rgb(220, 220, 220)");
  }

  if (window.myChart) window.myChart.destroy();

  const data = {
    labels: labels.length ? labels : ["No Data"],
    datasets: [
      {
        label: "Spending EGP",
        data: values.length ? values : [0],
        backgroundColor: labels.length ? colors : ["#ccc"],
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: labels.length
            ? `Spending – ${formatMonth(
                month
              )} (Budget: EGP ${totalBudget.toFixed(2)})    ${(
                (totalSpending / totalBudget) *
                100
              ).toFixed(2)}% of budget used`
            : `No expenses in ${formatMonth(month)}`,
        },
      },
    },
  };

  window.myChart = new Chart(ctx, config);
}
function renderYearChart() {
  const year = document.getElementById('reports-year-picker').value;
  const canvas = document.getElementById('lineChart');
  const ctx = canvas.getContext('2d');

  
  if (window.yearChart) window.yearChart.destroy();

  
  const labels = [];
  for (let m = 1; m <= 12; m++) {
    const monthStr = `${year}-${String(m).padStart(2, '0')}`; // "2025-01"
    labels.push(monthStr);
  }

  let budgetData = [];
  let spendingData = [];
  labels.forEach((month,_)=>{
    budgetData.push(getBudgetForMonth(month));
    spendingData.push(getTotalExpensesForMonth(month));
  })
  labels.forEach((month, index) => {
    let date = formatMonth(month);
    labels[index] = date.slice(0,-5);
  });


  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Budget',
        data: budgetData,
        borderColor: 'rgb(73, 80, 87)', // blue
        backgroundColor: 'rgba(73, 80, 87, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.3
      },
      {
        label: 'Spending',
        data: spendingData,
        borderColor: 'rgb(134, 142, 150)', // red
        backgroundColor: 'rgb(173, 181, 189,0.3)',
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: `Budget vs Spending - ${year}`
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = context.parsed.y;
              return `${context.dataset.label}: EGP ${value.toFixed(2)}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Amount (EGP)' }
        },
        x: {
          title: { display: true, text: 'Month' }
        }
      }
    }
  };

 window.yearChart = new Chart(ctx, config);
}