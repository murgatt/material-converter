import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../Select';
import codecSetting from '../../config/conversion/audio/codec';
import { getSingleConversionSetting } from '../../store/conversionSettings/conversionSettings.selectors';
import { CONVERSION_SETTINGS, setConversionSetting } from '../../store/conversionSettings/conversionSettings.actions';

const CodeSelect = () => {
    const dispatch = useDispatch();
    const codec = useSelector(getSingleConversionSetting(CONVERSION_SETTINGS.audioCodec));
    const { label, options } = codecSetting;

    const handleChange = useCallback(value => dispatch(setConversionSetting(CONVERSION_SETTINGS.audioCodec, value)), [
        dispatch,
    ]);

    return (
        <Select fullWidth label={label} onChange={handleChange} options={options} value={codec} variant="outlined" />
    );
};

export default CodeSelect;
