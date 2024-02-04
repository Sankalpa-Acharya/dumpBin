import moment from "moment";
import * as docx from 'docx';
import { saveAs } from 'file-saver';
export const getDate = () => {
    return moment().format('MMM Do, YYYY');
}

export const generateDocx = (text: string, name: string) => {
    const doc = new docx.Document({
        sections: [
            {
                properties: {},
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(text),
                        ]
                    })
                ]
            }
        ]
    });

    docx.Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, name + ".docx");
    });
};
