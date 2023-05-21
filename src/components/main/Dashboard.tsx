import HistoryTable from "./HistoryTable.tsx"
import IncomeExpense from "./IncomeExpense.tsx"
import SavingsPlan from "./SavingsPlan.tsx"
import TotalBalance from "./TotalBalance.tsx"

function Dashboard() {
  return (
    <main className="lg:grid flex lg:items-baseline lg:mx-14 items-center flex-col gap-[25px] absolute w-[92%] md:left-[30px] lg:left-0 top-60 lg:grid-cols-[30%_1fr]">
      <section className="flex flex-col md:flex md:flex-row-reverse lg:flex lg:flex-col gap-[25px]">
        <TotalBalance />
        <SavingsPlan />
      </section>
      <section className="flex flex-col md:flex md:flex-row md:gap-9 md:justify-center md:w-full lg:flex-col  lg:w-full w-[22rem]">
        <IncomeExpense />
        <HistoryTable />
      </section>
    </main>
  )
}
export default Dashboard