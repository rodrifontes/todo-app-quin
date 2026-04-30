import styled from 'styled-components/native';

export const Task = styled.View`
  margin: 24px 20px 0;
  border-color: #EEEEEE;
  border-width: 1px;
  border-radius: 12px;
  gap: 24px;
  padding: 24px;
`;

export const TaskHeader = styled.View``;

export const TaskDecription = styled.View``;

export const TaskFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskIcon = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;

export const TaskStatus = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TaskActions = styled.View`
  flex-direction: row;
  gap: 16px;
`;