import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormSection = styled(Form)`
  width: 300px;
  padding: 15px;
  border: 2px solid #425f3e;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #b1cba8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`
  width: 200px;
  border: none;
  border-radius: 5px;
`;
export const Button = styled.button`
  padding: 4px 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 11px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e7ede5;
  }
`;
