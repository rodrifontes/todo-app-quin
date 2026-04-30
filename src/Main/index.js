import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { tasks } from '../mocks/tasks';
import { Container } from './styles';

export default function Main() {
  function handleChangeStatus(id) {
    alert(`Alterar Status da Tarefa de id = ${id}`);
  }

  function handleEditTask(task) {
    alert(`Alterar Tarefa de id = ${task.id}`);
  }

  function handleDeleteTask(id) {
    alert(`Excluir Tarefa de id = ${id}`);
  }

  return (
    <Container>
      <Header />
      <Tasks
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </Container>
  );
}