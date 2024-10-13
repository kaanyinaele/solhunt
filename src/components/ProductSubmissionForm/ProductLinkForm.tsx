import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

interface ProductLinkFormProps {
    formData: {
        productLink: string;
    };
    onChange: (data: Partial<{ productLink: string }>) => void;
}

const ProductLinkForm: React.FC<ProductLinkFormProps> = ({ formData, onChange }) => {
    return (
        <div>
            <Typography variant="h6" className="mb-4">Submit a product</Typography>
            <Typography variant="body1" className="mb-4">
                Found a cool product you want everyone to know about? Or maybe you made one
                yourself and want the world to know about it? You're in the right place. So relax and
                follow the steps.
            </Typography>
            <TextField
                fullWidth
                label="Link to the product"
                variant="outlined"
                value={formData.productLink}
                onChange={(e) => onChange({ productLink: e.target.value })}
                className="mb-4"
            />
            <Button variant="contained" color="primary">
                Share More
            </Button>
        </div>
    );
};

export default ProductLinkForm;