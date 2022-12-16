import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const Number = styled.span`
  margin-left: 10px;
`;
export const Button = styled.button`
  padding: 4px 5px;
  font-size: 15px;
  font-weight: 500;
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 11px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e7ede5;
  }
`;
