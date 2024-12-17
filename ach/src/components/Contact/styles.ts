import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: var(--text);
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: var(--secondary);
  }
`;