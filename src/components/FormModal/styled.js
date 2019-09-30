import styled from "styled-components";

export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const FormContainer = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 20em;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

export const Input = styled.input`
  outline: none;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 100%;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border-bottom: 1px solid #171717;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  overflow-x: hidden;
  outline: none;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 100%;

  &:hover {
    border-bottom: 1px solid #171717;
  }
`;

export const SubmitButton = styled.a`
  cursor: pointer;
  border: 1px solid #171717;
  background: #171717;
  color: #fff;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;

  &:hover {
    border: 1px solid #171717;
    background: #fff;
    color: #171717;
  }
`;

export const CancelButton = styled.a`
  cursor: pointer;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;

  &:hover {
    border: 1px solid #171717;
  }
`;

export const FileInput = styled.label`
  display: inline-block;
  cursor: pointer;

  outline: none;
  padding: 7px;
  border: none;
  border: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 8em;
  font-size: 14px;
  margin-right: 1em;

  &:hover {
    color: #fff;
    background: #171717;
  }
`;
