# Autocomplete dropdown widget
This is an autocomplete dropdown widget. Instances of this component can be injected into other components passed as modal content. 

## Inputs: 
1. settings: AutocompleteSettings; - an object that contains 
        placeholder(name of the dropdown criteria),
        symbolsToShow(amount of how many items to show dropdown) and
        customClass(name of a class which to apply to widget);
}

2. sourceArray: {title: string, value: any}[]; - an array of objects that should be in a dropdown;
3. resultValue = new EventEmitter<string>(); - a value that has been chosen;

## Methods
1. initForm() => void 
   Initializes the form with autocomplete field;

2. toogleDropdown() => void
   Checks whether dropdown overlay should be toogled and changes local boolean value;

3. getValue() => string 
   Returns a resultValue(a value that has been chosen in a dropdown);
