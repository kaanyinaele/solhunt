import React, { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';

interface MediaUploadFormProps {
    formData: {
        thumbnail: File | null;
        gallery: File[];
        videoUrl: string;
        demoUrl: string;
    };
    onChange: (data: Partial<MediaUploadFormProps['formData']>) => void;
}

const MediaUploadForm: React.FC<MediaUploadFormProps> = ({ formData, onChange }) => {
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

    const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            onChange({ thumbnail: file });
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const handleGalleryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newGallery = [...formData.gallery, ...Array.from(event.target.files)];
            onChange({ gallery: newGallery });
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <Typography variant="h6">Thumbnail</Typography>
                <Typography variant="body2">Let's make your product look nice</Typography>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="thumbnail-upload"
                    type="file"
                    onChange={handleThumbnailChange}
                />
                <label htmlFor="thumbnail-upload">
                    <Button variant="contained" component="span">
                        Select an image
                    </Button>
                </label>
                {thumbnailPreview && (
                    <Box mt={2}>
                        <img src={thumbnailPreview} alt="Thumbnail preview" style={{ maxWidth: '200px' }} />
                    </Box>
                )}
                <Typography variant="caption">Recommended size: 240x240 | JPG, PNG, GIF. Max size: 2MB</Typography>
            </div>

            <div>
                <Typography variant="h6">Gallery</Typography>
                <Typography variant="body2">The first image will be used as the social preview when your link is shared online. We recommend at least 3 or more images.</Typography>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="gallery-upload"
                    type="file"
                    multiple
                    onChange={handleGalleryChange}
                />
                <label htmlFor="gallery-upload">
                    <Button variant="contained" component="span">
                        Browse for files
                    </Button>
                </label>
                <Typography variant="caption">1270x760px or higher recommended</Typography>
            </div>

            <TextField
                fullWidth
                label="Video / Loom URL"
                variant="outlined"
                value={formData.videoUrl}
                onChange={(e) => onChange({ videoUrl: e.target.value })}
                helperText="Optional: Add a YouTube or Loom video to show people how to use your product or share your maker story."
            />

            <TextField
                fullWidth
                label="Interactive Demo URL"
                variant="outlined"
                value={formData.demoUrl}
                onChange={(e) => onChange({ demoUrl: e.target.value })}
                helperText="Optional: Add an interactive demo to showcase your product's functionality."
            />
        </div>
    );
};

export default MediaUploadForm;