import React, { useState } from 'react';
import { Typography, TextField, Button, Chip, Box } from '@mui/material';

interface Maker {
    name: string;
    role: string;
}

interface MakersFormProps {
    formData: {
        isCreator: boolean;
        makers: Maker[];
    };
    onChange: (data: Partial<MakersFormProps['formData']>) => void;
}

const MakersForm: React.FC<MakersFormProps> = ({ formData, onChange }) => {
    const [newMaker, setNewMaker] = useState<Maker>({ name: '', role: '' });

    const handleAddMaker = () => {
        if (newMaker.name && newMaker.role) {
            onChange({ makers: [...formData.makers, newMaker] });
            setNewMaker({ name: '', role: '' });
        }
    };

    const handleRemoveMaker = (index: number) => {
        const updatedMakers = formData.makers.filter((_, i) => i !== index);
        onChange({ makers: updatedMakers });
    };

    return (
        <div className="space-y-6">
            <Typography variant="h6">Who worked on this product?</Typography>
            <div>
                <Typography variant="body1">Did you work on this product?</Typography>
                <Box display="flex" gap={2}>
                    <Button
                        variant={formData.isCreator ? "contained" : "outlined"}
                        onClick={() => onChange({ isCreator: true })}
                    >
                        I worked on this product
                    </Button>
                    <Button
                        variant={!formData.isCreator ? "contained" : "outlined"}
                        onClick={() => onChange({ isCreator: false })}
                    >
                        I didn't work on this product
                    </Button>
                </Box>
            </div>
            <div>
                <Typography variant="body1">Add other makers:</Typography>
                <Box display="flex" gap={2} alignItems="flex-start">
                    <TextField
                        label="Name"
                        value={newMaker.name}
                        onChange={(e) => setNewMaker({ ...newMaker, name: e.target.value })}
                    />
                    <TextField
                        label="Role"
                        value={newMaker.role}
                        onChange={(e) => setNewMaker({ ...newMaker, role: e.target.value })}
                    />
                    <Button variant="contained" onClick={handleAddMaker}>Add Maker</Button>
                </Box>
            </div>
            <div>
                <Typography variant="body1">Makers:</Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                    {formData.makers.map((maker, index) => (
                        <Chip
                            key={index}
                            label={`${maker.name} (${maker.role})`}
                            onDelete={() => handleRemoveMaker(index)}
                        />
                    ))}
                </Box>
            </div>
        </div>
    );
};

export default MakersForm;