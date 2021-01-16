import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export const NomButton = withStyles({
  root: {
    color: 'white',
    backgroundColor: '#249B69',
    '&:hover': {
      backgroundColor: '#249b69',
      boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.5)'
    },
  },
})(Button);

