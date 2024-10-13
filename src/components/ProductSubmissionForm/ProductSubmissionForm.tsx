import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import ProductLinkForm from "./ProductLinkForm";
import ProductInfoForm from './ProductInfoForm';
import MediaUploadForm from './MediaUploadForm';
import MakersForm from './MakersForm';
import ExtrasForm from './ExtrasForm';
import LaunchChecklist from './LaunchChecklist';

const steps = ['Main info', 'Images and media', 'Makers', 'Extras', 'Launch checklist'];

const ProductSubmissionForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        productLink: '',
        name: '',
        tagline: '',
        description: '',
        twitter: '',
        topics: [] as string[],
        firstComment: '',
        thumbnail: null as File | null,
        gallery: [] as File[],
        videoUrl: '',
        demoUrl: '',
        isCreator: false,
        makers: [] as { name: string; role: string }[],
        pricing: 'free' as 'free' | 'paid' | 'freemium',
        promoCode: '',
        promoOffer: '',
        promoExpiration: '',
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFormChange = (newData: Partial<typeof formData>) => {
        setFormData((prevData) => ({ ...prevData, ...newData }));
    };

    const handleSubmit = async () => {
        // TODO: Implement submission to backend
        console.log('Submitting form data:', formData);
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <ProductLinkForm formData={formData} onChange={handleFormChange} />;
            case 1:
                return <ProductInfoForm formData={formData} onChange={handleFormChange} />;
            case 2:
                return <MediaUploadForm formData={formData} onChange={handleFormChange} />;
            case 3:
                return <MakersForm formData={formData} onChange={handleFormChange} />;
            case 4:
                return <ExtrasForm formData={formData} onChange={handleFormChange} />;
            default:
                return <Typography>Unknown step</Typography>;
        }
    };

    return (
        <div className="bg-purple-900 bg-opacity-50 min-h-screen text-white p-8">
            <Typography variant="h4" className="mb-8">Submit a Product</Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="mt-8">
                {activeStep === steps.length ? (
                    <LaunchChecklist formData={formData} onSubmit={handleSubmit} />
                ) : (
                    <>
                        {getStepContent(activeStep)}
                        <div className="mt-4">
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className="mr-4"
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                            >
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductSubmissionForm;