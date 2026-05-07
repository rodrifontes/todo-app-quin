import { useState } from 'react';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { tasks } from '../mocks/tasks';
import { Container } from './styles';

export default function Main() {
  const [isDeleteConfirmModalVisible, setIsDeleteConfirmModalVisible] = useState(false);
  const [taskIdBeingDeleted, setTaskIdBeingDeleted] = useState();

  function handleChangeStatus(id) {
    alert(`Alterar Status da Tarefa de id = ${id}`);
  }

  function handleEditTask(task) {
    alert(`Alterar Tarefa de id = ${task.id}`);
  }

  function handleDeleteTask(id) {
    setTaskIdBeingDeleted(id);
    setIsDeleteConfirmModalVisible(true);
  }

  function handleDeleteConfirmTask() {
    alert(`Excluir Tarefa de id = ${taskIdBeingDeleted}`);
    setIsDeleteConfirmModalVisible(false);
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

      <AddTaskButton onPress={() => alert("Add Tarefa")} />

      <DeleteConfirmModal
        visible={isDeleteConfirmModalVisible}
        onClose={() => setIsDeleteConfirmModalVisible(false)}
        onConfirm={handleDeleteConfirmTask}
      />

    </Container>
  );
}