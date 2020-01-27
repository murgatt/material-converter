/* eslint-disable sort-keys */
import i18n from '../../i18n';

export const codec = {
    defaultValue: 'passthru',
    id: 'codec',
    label: i18n.t('conversionSettings.codec'),
    options: [
        {
            label: i18n.t('conversionSettings.withoutAudioReencoding'),
            value: 'passthru',
        },
        {
            label: i18n.t('conversionSettings.aac'),
            value: 'aac',
        },
        {
            label: i18n.t('conversionSettings.ac3'),
            value: 'ac3',
        },
        {
            label: i18n.t('conversionSettings.dts'),
            value: 'dts',
        },
        {
            label: i18n.t('conversionSettings.eac3'),
            value: 'eac3',
        },
        {
            label: i18n.t('conversionSettings.noAudioCodec'),
            value: 'none',
        },
    ],
};

export const bitrate = {
    id: 'bitrate',
    label: i18n.t('conversionSettings.bitrate'),
    aac: {
        options: [
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 4 }),
                value: '4',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 32 }),
                value: '32',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 64 }),
                value: '64',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 128 }),
                value: '128',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 160 }),
                value: '160',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 224 }),
                value: '224',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 264 }),
                value: '264',
            },
        ],
    },
    ac3: {
        options: [
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 32 }),
                value: '32',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 64 }),
                value: '64',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 112 }),
                value: '112',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 192 }),
                value: '192',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 320 }),
                value: '320',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 448 }),
                value: '448',
            },
            {
                label: i18n.t('conversionSettings.bitrateValue', { value: 640 }),
                value: '640',
            },
        ],
    },
};

export default {
    bitrate,
    codec,
};
