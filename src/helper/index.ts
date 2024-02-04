import moment from "moment";
import * as docx from 'docx';
import { saveAs } from 'file-saver';
export const getDate = () => {
    return moment().format('MMM Do, YYYY');
}

export const generateDocx = (text: string, name: string) => {
    const lines = text.split('\n');
    const doc = new docx.Document({
        sections: [
            {
                properties: {},
                children: lines.map(line =>
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(line)
                        ]
                    })
                )
            }
        ]
    });

    docx.Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, name + ".docx");
    });
};
