import React from 'react';
import { Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

interface ExtrasFormProps {
    formData: {
        pricing: 'free' | 'paid' | 'freemium';
        promoCode: string;
        promoOffer: string;
        promoExpiration: string;
    };
    onChange: (data: Partial<ExtrasFormProps['formData']>) => void;
}

const ExtrasForm: React.FC<ExtrasFormProps> = ({ formData, onChange }) => {
    return (
        <div className="space-y-6">
            <Typography variant="h6">Extras</Typography>

            <FormControl component="fieldset">
                <FormLabel component="legend">Pricing</FormLabel>
                <RadioGroup
                    value={formData.pricing}
                    onChange={(e) => onChange({ pricing: e.target.value as 'free' | 'paid' | 'freemium' })}
                >
                    <FormControlLabel value="free" control={<Radio />} label="Free (This product is free to use)" />
                    <FormControlLabel value="paid" control={<Radio />} label="Paid (This product requires payment and there is no free option)" />
                    <FormControlLabel value="freemium" control={<Radio />} label="Freemium (This product requires payment but also offers a free trial or version)" />
                </RadioGroup>
            </FormControl>

            <Typography variant="h6">Promo code</Typography>
            <Typography variant="body2">If you'd like to offer a promo code for the SolHunt community, you can add it here. All fields must be completed to have a valid promo offer.</Typography>

            <TextField
                fullWidth
                label="What is the offer?"
                variant="outlined"
                value={formData.promoOffer}
                onChange={(e) => onChange({ promoOffer: e.target.value })}
            />

            <TextField
                fullWidth
                label="Promo code"
                variant="outlined"
                value={formData.promoCode}
                onChange={(e) => onChange({ promoCode: e.target.value })}
            />

            <TextField
                fullWidth
                label="Expiration Date"
                type="date"
                variant="outlined"
                value={formData.promoExpiration}
                onChange={(e) => onChange({ promoExpiration: e.target.value })}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
};

export default ExtrasForm;