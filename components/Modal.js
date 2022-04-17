import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles } from '@material-ui/styles';
import Image from 'next/image';

const styles = (theme) =>
  createStyles({
    root: {
      margin: 0,
    },
    closeButton: {
      color: 'gray',
    },
    body: {
      placeSelf: 'center',
    },
  });

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div className='flex px-2 justify-between space-x-3'>
        <div className='title-table self-center font-larsseit '>
          {children}
          <div className=' flex '>
            <div className=' h-1 w-1/6 rounded-md ' />
            <div className=' h-1 w-3 rounded-md mx-2' />
          </div>
        </div>

        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
          style={{ outline: 'none' }}
        >
          {/* <CloseIcon /> */}
          <Image src='/img/icons/close.svg' alt='' height={16} width={16} />
        </IconButton>
      </div>
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(() => ({
  root: {
    placeSelf: 'center',
    width: '100%',
  },
}))(MuiDialogContent);

const Modal = ({ open, setOpen, children, modalTitle = null }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      className='font-larsseit'
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      {modalTitle && (
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          {modalTitle}
        </DialogTitle>
      )}
      <DialogContent dividers>
        <>{children}</>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
