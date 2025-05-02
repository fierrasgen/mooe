import { FC, useState } from 'react';
import { Button, IconButton, Modal, Typography, Input } from '@mui/material';
import { Edit as EditIcon, CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { ImageWrapper, Container, EditButtonWrapper, ModalContent } from './styles';
import { Navigation } from '../Navigation';

export const MainHeader: FC<{ isAdmin?: boolean }> = ({ isAdmin = false }) => {
    const [ openChooseImage, setChooseImage ] = useState(false);
    // const [ file, setFile ] = useState(null);
    
    return (
        <ImageWrapper>
            <Container>
                <Navigation />
            </Container>
            {
                isAdmin && (
                    <>
                        <EditButtonWrapper>
                            <IconButton onClick={() => setChooseImage(!openChooseImage)}>
                                <EditIcon />
                            </IconButton>
                        </EditButtonWrapper>
                        <Modal open={openChooseImage} onClose={() => setChooseImage(!openChooseImage)}>
                            <ModalContent>
                                <Typography>Выберите файлы:</Typography>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    >
                                    Upload files
                                    <Input
                                        type="file"
                                        // onChange={(event) => setFile(event.target.files)}
                                    />
                                    </Button>
                            </ModalContent>                            
                        </Modal>
                    </>
                )
            }
        </ImageWrapper>
    );
};