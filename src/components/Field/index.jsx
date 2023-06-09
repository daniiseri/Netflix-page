import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => {
    
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
    }
  }
`;

function Field({label, type, name, value, onChange, suggestions, required}){
  const id = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea': 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestion = Boolean(suggestions?.length);

  return (
    <Wrapper>
      <Label
        htmlFor={id}
      >
        <Input
          as={tag} 
          id={id}
          hasValue={hasValue}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          list={hasSuggestion ? `suggestion_${id}` : undefined}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          required={required ? true : false} 
        />
        <Label.Text>
          {label}: 
        </Label.Text>
        {
          hasSuggestion && (
            <datalist id={`suggestion_${id}`}>
              {
                suggestions.map((suggestion, index) => {
                  return(
                    <option key={index} value={suggestion}>
                      {suggestion}
                    </option>
                  )
                })
              }
            </datalist>
          )
        }
        
      </Label>
    </Wrapper>
  )
}

Field.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

Field.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string, 
  name: PropTypes.string.isRequired, 
  value: PropTypes.string, 
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string)
};

export default Field;