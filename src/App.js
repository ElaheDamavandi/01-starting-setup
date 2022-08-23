import Expense from "./components/Expense";

function App() {
  const expenses = [
    {
      title: "car01",
      amount: 245,
      date: new Date(2021, 2, 23),
    },
    {
      title: "car02",
      amount: 497,
      date: new Date(2020, 2, 28),
    },
    {
      title: "car03",
      amount: 300,
      date: new Date(2021, 6, 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
