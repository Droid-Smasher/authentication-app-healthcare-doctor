import QRCode from 'qrcode';

export const generateQRCode = async (text: string): Promise<string> => {
    try {
        // You might want to add additional data or encrypt this information
        // INPUT_REQUIRED {update this function as needed to include additional patient data}
        return await QRCode.toDataURL(text);
    } catch (error) {
        console.error('Error generating QR Code: ', error);
        throw error;
    }
};
