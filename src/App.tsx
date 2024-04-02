import { AttendeeList } from "./components/attendeeList";
import { Header } from "./components/header";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from "lucide-react";

function App() {
  return (
    <div className="max-w-[1216px] mx-auto flex flex-col gap-6 py-6">
      <Header />
      <AttendeeList />

      <div className="w-full border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-0 py-3 px-2.5">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-2.5 text-left">Código</th>
              <th className="py-3 px-2.5 text-left">Participante</th>
              <th className="py-3 px-2.5 text-left">Data da inscrição</th>
              <th className="py-3 px-2.5 text-left">Data do check-in</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <tr className="border-b border-t border-white/10" key={index}>
                  <td className="py-3 px-2.5 text-center">
                    <input type="checkbox" />
                  </td>

                  <td className="px-2.5 py-3 text-gray-200">52716</td>

                  <td className="px-2.5 py-3">
                    <div>
                      <h1 className="text-white font-semibold">
                        Diego Schell Fernandes
                      </h1>
                      <span className="text-gray-200">
                        diego.schell.f@gmail.com
                      </span>
                    </div>
                  </td>

                  <td className="px-2.5 py-3 text-gray-200">7 days ago</td>

                  <td className="px-2.5 py-3 text-gray-200">7 days ago</td>

                  <td className="px-2.5 py-3">
                    <button className="border rounded-[6px] border-white/10 bg-black/20 p-1.5">
                      <Ellipsis size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className="px-2.5 py-3">
                Showing 10 of 228 items
              </td>
              <td colSpan={3} className="px-2.5 py-3 text-right">
                <div className="inline-flex items-center gap-8">
                  <span>Page 1 of 11</span>

                  <div className="flex gap-2">
                    <button className="border rounded-[6px] border-white/10 bg-black/20 p-1.5">
                      <ChevronsLeft size={16} />
                    </button>
                    <button className="border rounded-[6px] border-white/10 bg-black/20 p-1.5">
                      <ChevronLeft size={16} />
                    </button>
                    <button className="border rounded-[6px] border-white/10 bg-black/20 p-1.5">
                      <ChevronRight size={16} />
                    </button>
                    <button className="border rounded-[6px] border-white/10 bg-black/20 p-1.5">
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
