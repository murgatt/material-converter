import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AppBar, TextField, Toolbar, makeStyles } from '@material-ui/core';
import StartIcon from '@material-ui/icons/PlayArrowOutlined';
import IconButton from '../IconButton';

const useStyles = makeStyles({
    bottomBar: {
        bottom: 0,
        top: 'auto',
    },
    toolbar: {
        justifyContent: 'space-between',
    },
});

const BottomBar = ({ onStartConversion }) => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <AppBar className={classes.bottomBar}>
            <Toolbar className={classes.toolbar} variant="dense">
                <TextField label={t('destination')} size="small" variant="outlined" />
                <IconButton label={t('startConversion')} onClick={onStartConversion} size="small">
                    <StartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

BottomBar.propTypes = {
    onStartConversion: PropTypes.func,
};

BottomBar.defaultProps = {
    onStartConversion: () => {},
};

export default BottomBar;
