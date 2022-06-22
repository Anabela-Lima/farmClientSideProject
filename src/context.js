
import React from 'react';
export const Context = React.createContext({
    filterBy: '',
    setFilterBy: (newValue) => {
        this.filterBy = newValue;
    },
  });