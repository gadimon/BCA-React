import React, { createContext } from 'react';
import Styles from './snackbar.module.css';

interface Props {
  showMessage: (message: string) => void;
}
const SnackbarContext = React.createContext<Props>({showMessage: () => {}})
const snackbar = (props: Props) => {
  return (
    <div>snackbar</div>
  )
}

export default snackbar;