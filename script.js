const transactions = [
  {
    company: "Atlas Digital",
    initials: "AD",
    amount: 400,
    date: "Hoje, 18:42"
  },
  {
    company: "Lumen Works",
    initials: "LW",
    amount: 200,
    date: "Hoje, 16:18"
  },
  {
    company: "Nova Systems",
    initials: "NS",
    amount: 50,
    date: "Hoje, 14:05"
  },
  {
    company: "Vertex Media",
    initials: "VM",
    amount: 1000,
    date: "Hoje, 11:37"
  },
  {
    company: "Orion Labs",
    initials: "OL",
    amount: 6000,
    date: "Ontem, 19:26"
  },
  {
    company: "BluePeak Group",
    initials: "BP",
    amount: 1250,
    date: "Ontem, 15:41"
  },
  {
    company: "Nexora Digital",
    initials: "ND",
    amount: 780,
    date: "Ontem, 12:13"
  },
  {
    company: "PrimeWorks",
    initials: "PW",
    amount: 2300,
    date: "30 Set, 17:52"
  },
  {
    company: "Silverline",
    initials: "SL",
    amount: 950,
    date: "30 Set, 13:28"
  },
  {
    company: "Vertex Commerce",
    initials: "VC",
    amount: 4200,
    date: "29 Set, 18:04"
  },
  {
    company: "Aster Solutions",
    initials: "AS",
    amount: 1650,
    date: "29 Set, 10:46"
  },
  {
    company: "Northstar Digital",
    initials: "ND",
    amount: 800,
    date: "28 Set, 16:32"
  }
];
const transactionsContainer =
  document.getElementById("transactions");
const balanceElement =
  document.getElementById("balance");
const totalBalanceElement =
  document.getElementById("totalBalance");
const incomeElement =
  document.getElementById("income");
const movementCountElement =
  document.getElementById("movementCount");
function formatEUR(value) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  }).format(value);
}
function renderTransactions() {
  transactionsContainer.innerHTML = "";
  transactions.forEach((transaction) => {
    const element = document.createElement("div");
    element.className = "transaction";
    element.innerHTML = `
      <div class="transaction-left">
        <div class="company-icon">
          ${transaction.initials}
        </div>
        <div>
          <div class="company-name">
            ${transaction.company}
          </div>
          <div class="transaction-date">
            Transferência recebida • ${transaction.date}
          </div>
        </div>
      </div>
      <div class="amount">
        + ${formatEUR(transaction.amount)}
        <small>Entrada</small>
      </div>
    `;
    transactionsContainer.appendChild(element);
  });
  movementCountElement.textContent =
    transactions.length;
}
function refreshBalance() {
  const original = 289000;
  balanceElement.textContent =
    original.toLocaleString("pt-PT", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  totalBalanceElement.textContent =
    formatEUR(original);
  incomeElement.textContent =
    formatEUR(original);
}
document
  .getElementById("refreshBtn")
  .addEventListener("click", () => {
    const button =
      document.getElementById("refreshBtn");
    button.textContent = "✓ Atualizado";
    setTimeout(() => {
      button.textContent = "↻ Atualizar";
    }, 1200);
    refreshBalance();
  });
document
  .getElementById("addTransaction")
  .addEventListener("click", () => {
    const newTransaction = {
      company: "Nova Empresa",
      initials: "NE",
      amount: 600,
      date: "Agora"
    };
    transactions.unshift(newTransaction);
    renderTransactions();
  });
refreshBalance();
renderTransactions();
