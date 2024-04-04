import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface AttendeeListProps extends ComponentProps<"input"> {}

export function AttendeeList({ ...rest }: AttendeeListProps) {
  return (
    <section className="flex gap-6">
      <h1 className="text-2xl text-white font-bold">Participantes</h1>

      <div className="px-3 py-1.5 w-[280px] flex gap-3 border border-white/10 rounded-lg items-center">
        <Search className="size-4 text-emerald-300" />

        <input
          {...rest}
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Buscar participante..."
        />
      </div>
    </section>
  );
}
