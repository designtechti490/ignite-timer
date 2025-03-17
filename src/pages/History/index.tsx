import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { CyclesContext } from "../../contexts/CyclesContext";
import { useTasksPerPage } from "../../hooks/useTasksPerPage";
import {
  HistoryContainer,
  HistoryList,
  PaginationContainer,
  Status,
} from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export default function History() {
  const { cycles } = useContext(CyclesContext);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = useTasksPerPage();

  const offset = currentPage * tasksPerPage;
  const currentPageTasks = cycles.slice(offset, offset + tasksPerPage);
  const pageCount = Math.ceil(cycles.length / tasksPerPage);

  function handlePageChange({ selected }: { selected: number }) {
    setCurrentPage(selected);
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPageTasks.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>

      <PaginationContainer>
        <ReactPaginate
          previousLabel="Anterior"
          nextLabel="Próxima"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
        />
      </PaginationContainer>
    </HistoryContainer>
  );
}
