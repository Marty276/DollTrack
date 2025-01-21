// import Image from "next/image";

// Define the type for categories
type Categories = {
  [key: string]: {
    title: string;
    type: "expense" | "income";
  };
};

// Define the type for a log entry
type LogEntry = {
  id: number;
  category_id: keyof Categories; // Ensures category_id matches categories' keys
  description: string;
  type: "expense" | "income";
  amount: number;
  date: Date;
};

// Define the full type for sampleData
type SampleData = {
  lm_income: number;
  lm_expenses: number;
  lt_income: number;
  lt_expenses: number;
  lt_savings: number;
  logs: LogEntry[];
  categories: Categories;
};

const sampleData: SampleData = {
  lm_income: 6850.00,
  lm_expenses: 2312.15,
  lt_income: 11780.00,
  lt_expenses: 7823.00,
  lt_savings: 2150.00,
  logs: [
    {
      id: 0,
      category_id: "2",
      description: "",
      type: "expense",
      amount: 45.05,
      date: new Date(2024, 12, 10)
    },
    {
      id: 1,
      category_id: "0",
      description: "coffee with annie",
      type: "expense",
      amount: 45.05,
      date: new Date(2024, 12, 12)
    },
    {
      id: 2,
      category_id: "3",
      description: "",
      type: "income",
      amount: 1505.00,
      date: new Date(2024, 11, 15)
    },
    {
      id: 3,
      category_id: "1",
      description: "",
      type: "expense",
      amount: 1354.50,
      date: new Date(2025, 0, 1)
    },
    {
      id: 4,
      category_id: "2",
      description: "",
      type: "expense",
      amount: 65.32,
      date: new Date(2025, 0, 3)
    }
  ],
  categories: {
    "0": {
      title: "Coffee and fast food",
      type: "expense"
    },
    "1": {
      title: "Rent",
      type: "expense"
    },
    "2": {
      title: "Gas",
      type: "expense"
    },
    "3": {
      title: "Weekly payment",
      type: "income"
    }
  }
}

export default function Home() {
  return (
    <>
      <section>
        <p>Available: ${(sampleData.lt_income - sampleData.lt_expenses - sampleData.lt_savings).toFixed(2)}</p>
        <p>Last month income: ${(sampleData.lm_income).toFixed(2)}</p>
        <p>Last month expenses: ${(sampleData.lm_expenses).toFixed(2)}</p>
      </section>
      <section>
        <p>Savings: ${(sampleData.lt_savings).toFixed(2)}</p>
      </section>
      <section>
        <p>Recent logs:</p>
        <button>New log +</button>
        {sampleData.logs
          .slice(-3).reverse()
          .map((log) => (
            <div key={log.id}>
              <span>{log.amount.toFixed(2)}
              {" - "}
              {sampleData.categories[log.category_id].title}</span>
              <p>{log.description}</p>
              <p>{log.date.toDateString()}</p>
            </div>
          ))
        }
        <button>See all logs...</button>
      </section>
    </>
  );
}
