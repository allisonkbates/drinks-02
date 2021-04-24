import { useCombobox, resetIdCounter } from 'downshift';
import { SearchStyles, DropDown, DropDownItem } from "../styled-components/Dropdown";

export default function Search() {
  resetIdCounter();
  const { getMenuProps, getInputProps, getComboboxProps } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('input value changed');
    },
    onSelectedItemChange() {
      console.log('selected value changed');
    }
  });
  return (
      <SearchStyles>
        <div {...getComboboxProps()}>
          <input {...getInputProps({
            type: 'search',
            placeholder: 'search for a drink',
            id: 'search',
            className: 'loading'  
          })}/>
        </div> 
        <DropDown {...getMenuProps()}>
          <DropDownItem>Hey</DropDownItem>
          <DropDownItem>Hey</DropDownItem>
          <DropDownItem>Hey</DropDownItem>
          <DropDownItem>Hey</DropDownItem>
        </DropDown>
      </SearchStyles>
    )
}