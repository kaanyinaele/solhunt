import React from 'react';
import { TextField, Typography, Chip, Box } from '@mui/material';

interface ProductInfoFormProps {
    formData: {
        name: string;
        tagline: string;
        description: string;
        twitter: string;
        topics: string[];
        firstComment: string;
    };
    onChange: (data: Partial<ProductInfoFormProps['formData']>) => void;
}

const ProductInfoForm: React.FC<ProductInfoFormProps> = ({ formData, onChange }) => {
    const handleTopicChange = (topic: string) => {
        const newTopics = formData.topics.includes(topic)
            ? formData.topics.filter(t => t !== topic)
            : [...formData.topics, topic];
        onChange({ topics: newTopics });
    };

    return (
        <div className="space-y-6">
            <Typography variant="h6">Tell us more about this product</Typography>
            <Typography variant="body2">We'll need its name, tagline, links, topics, and description.</Typography>

            <TextField
                fullWidth
                label="Name of the product"
                variant="outlined"
                value={formData.name}
                onChange={(e) => onChange({ name: e.target.value })}
                inputProps={{ maxLength: 40 }}
                helperText={`${formData.name.length}/40`}
            />

            <TextField
                fullWidth
                label="Tagline"
                variant="outlined"
                value={formData.tagline}
                onChange={(e) => onChange({ tagline: e.target.value })}
                inputProps={{ maxLength: 60 }}
                helperText={`${formData.tagline.length}/60`}
            />

            <TextField
                fullWidth
                label="Twitter account of the product"
                variant="outlined"
                value={formData.twitter}
                onChange={(e) => onChange({ twitter: e.target.value })}
                InputProps={{
                    startAdornment: <span className="text-gray-500">twitter.com/</span>,
                }}
            />

            <TextField
                fullWidth
                multiline
                rows={4}
                label="Description of the product"
                variant="outlined"
                value={formData.description}
                onChange={(e) => onChange({ description: e.target.value })}
                inputProps={{ maxLength: 260 }}
                helperText={`${formData.description.length}/260`}
            />

            <div>
                <Typography variant="subtitle1">Topics</Typography>
                <Typography variant="body2">Select up to three topics</Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {['AI', 'Productivity', 'Developer Tools', 'Finance', 'Design'].map((topic) => (
                        <Chip
                            key={topic}
                            label={topic}
                            onClick={() => handleTopicChange(topic)}
                            color={formData.topics.includes(topic) ? "primary" : "default"}
                        />
                    ))}
                </Box>
            </div>

            <TextField
                fullWidth
                multiline
                rows={4}
                label="Write the first comment"
                variant="outlined"
                value={formData.firstComment}
                onChange={(e) => onChange({ firstComment: e.target.value })}
                helperText="This comment will be posted when your product launches. Adding a first comment is essential to get the discussion started."
            />
        </div>
    );
};

export default ProductInfoForm;