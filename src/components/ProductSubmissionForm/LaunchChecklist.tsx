import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Button, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface LaunchChecklistProps {
    formData: {
        name: string;
        tagline: string;
        description: string;
        thumbnail: File | null;
        gallery: File[];
        topics: string[];
        makers: { name: string; role: string }[];
        firstComment: string;
        videoUrl: string;
    };
    onSubmit: () => void;
}

const LaunchChecklist: React.FC<LaunchChecklistProps> = ({ formData, onSubmit }) => {
    const requiredFields = [
        { name: 'Product name', completed: !!formData.name },
        { name: 'Product tagline', completed: !!formData.tagline },
        { name: 'Description', completed: !!formData.description },
        { name: 'Thumbnail', completed: !!formData.thumbnail },
        { name: 'Gallery images', completed: formData.gallery.length > 0 },
        { name: 'Topics', completed: formData.topics.length > 0 },
    ];

    const recommendedFields = [
        { name: 'Additional Makers', completed: formData.makers.length > 0 },
        { name: 'First comment', completed: !!formData.firstComment },
        { name: 'Video', completed: !!formData.videoUrl },
    ];

    const allRequiredCompleted = requiredFields.every(field => field.completed);

    return (
        <div className="space-y-6">
            <Typography variant="h6">Launch Checklist</Typography>

            <div>
                <Typography variant="subtitle1">Required</Typography>
                <List>
                    {requiredFields.map((field, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {field.completed ? <CheckCircleIcon color="success" /> : <ErrorIcon color="error" />}
                            </ListItemIcon>
                            <ListItemText primary={field.name} />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div>
                <Typography variant="subtitle1">Strongly Recommended</Typography>
                <List>
                    {recommendedFields.map((field, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {field.completed ? <CheckCircleIcon color="success" /> : <ErrorIcon color="warning" />}
                            </ListItemIcon>
                            <ListItemText primary={field.name} />
                        </ListItem>
                    ))}
                </List>
            </div>

            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    disabled={!allRequiredCompleted}
                >
                    Submit Product
                </Button>
                {!allRequiredCompleted && (
                    <Typography color="error" mt={2}>
                        Please complete all required fields before submitting.
                    </Typography>
                )}
            </Box>
        </div>
    );
};

export default LaunchChecklist;