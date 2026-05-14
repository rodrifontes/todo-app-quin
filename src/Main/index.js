import { useState } from 'react';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import EditTaskModal from '../components/EditTaskModal';
import Header from '../components/Header';
import NewTaskModal from '../components/NewTaskModal';
import Tasks from '../components/Tasks';
import { tasks } from '../mocks/tasks';
import { Container } from './styles';

export default function Main() {
  const [isDeleteConfirmModalVisible, setIsDeleteConfirmModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskIdBeingDeleted, setTaskIdBeingDeleted] = useState();
  const [taskBeingEdited, setTaskBeingEdited] = useState();

  function handleChangeStatus(id) {
    alert(`Alterar Status da Tarefa de id = ${id}`);
  }

  function handleEditTask(task) {
    setTaskBeingEdited(task);
    setIsEditTaskModalVisible(true);
  }

  function handleDeleteTask(id) {
    setTaskIdBeingDeleted(id);
    setIsDeleteConfirmModalVisible(true);
  }

  function handleDeleteConfirmTask() {
    alert(`Excluir Tarefa de id = ${taskIdBeingDeleted}`);
    setIsDeleteConfirmModalVisible(false);
  }

  function handleCreateTask(task) {
    //Alterar para o cadastro
    setIsNewTaskModalVisible(false);
  }

  function handleSaveEditTask(task) {
    //Alterar para a persistencia da alteração
    setIsEditTaskModalVisible(false);
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

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteConfirmModalVisible}
        onClose={() => setIsDeleteConfirmModalVisible(false)}
        onConfirm={handleDeleteConfirmTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEditTask}
        task={taskBeingEdited}
      />

    </Container>
  );
}