import { AttendeeList } from "./components/attendeeList";
import { Header } from "./components/header";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
} from "lucide-react";
import { Table } from "./components/table/table";
import { TableHeader } from "./components/table/table-header";
import { TableCeil } from "./components/table/table-ceil";
import { TableRow } from "./components/table/table-row";
import { IconButton } from "./components/icon-button/icon-button";
import { attendees } from "./data/fake";
import { useState } from "react";

function App() {
  const [page, setPage] = useState<number>(1);

  const totalPages = Math.ceil(attendees.length / 10);

  const goToPreviusPage = () => {
    setPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  return (
    <div className="max-w-[1216px] mx-auto flex flex-col gap-6 py-6">
      <Header />
      <AttendeeList />

      <Table className="w-full">
        <thead>
          <tr>
            <th className="w-0 py-3 px-2.5">
              <input type="checkbox" />
            </th>
            <TableHeader className="py-3 px-2.5 text-left">Código</TableHeader>
            <TableHeader className="py-3 px-2.5 text-left">
              Participante
            </TableHeader>
            <TableHeader className="py-3 px-2.5 text-left">
              Data da inscrição
            </TableHeader>
            <TableHeader className="py-3 px-2.5 text-left">
              Data do check-in
            </TableHeader>
          </tr>
        </thead>

        <tbody>
          {attendees
            .slice((page - 1) * 10, page * 10)
            .map((attendees, index) => {
              return (
                <TableRow
                  className="border-b border-t border-white/10"
                  key={index}
                >
                  <TableCeil className="py-3 px-2.5 text-center">
                    <input type="checkbox" />
                  </TableCeil>

                  <TableCeil className="px-2.5 py-3 text-gray-200">
                    {attendees.id}
                  </TableCeil>

                  <TableCeil className="px-2.5 py-3">
                    <div>
                      <h1 className="text-white font-semibold">
                        {attendees.name}
                      </h1>
                      <span className="text-gray-200">{attendees.email}</span>
                    </div>
                  </TableCeil>

                  <TableCeil className="px-2.5 py-3 text-gray-200">
                    {attendees.createdAt.toISOString()}
                  </TableCeil>

                  <TableCeil className="px-2.5 py-3 text-gray-200">
                    {attendees.checkedInAt.toISOString()}
                  </TableCeil>

                  <TableCeil className="px-2.5 py-3 text-right">
                    <IconButton
                      transparent
                      className="border rounded-[6px] border-white/10 bg-black/20 p-1.5"
                    >
                      <Ellipsis size={16} />
                    </IconButton>
                  </TableCeil>
                </TableRow>
              );
            })}
        </tbody>

        <tfoot>
          <tr>
            <TableCeil colSpan={3} className="px-2.5 py-3">
              Showing 10 of {attendees.length} items
            </TableCeil>
            <TableCeil colSpan={3} className="px-2.5 py-3 text-right">
              <div className="inline-flex items-center gap-8">
                <span>
                  Page {page} of {totalPages}
                </span>

                <div className="flex gap-2">
                  <IconButton
                    className="border rounded-[6px] border-white/10 bg-black/20 p-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={goToFirstPage}
                    disabled={page === 1}
                  >
                    <ChevronsLeft size={16} />
                  </IconButton>
                  <IconButton
                    className="border rounded-[6px] border-white/10 bg-black/20 p-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={goToPreviusPage}
                    disabled={page === 1}
                  >
                    <ChevronLeft size={16} />
                  </IconButton>
                  <IconButton
                    className="border rounded-[6px] border-white/10 bg-black/20 p-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight size={16} />
                  </IconButton>
                  <IconButton
                    className="border rounded-[6px] border-white/10 bg-black/20 p-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
                    <ChevronsRight size={16} />
                  </IconButton>
                </div>
              </div>
            </TableCeil>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default App;
