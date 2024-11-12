document.addEventListener('DOMContentLoaded', function() {
    const licenseTypes = {
        "type17": {
            title: "Type 17: Beer and Wine Wholesaler",
            fields: [
                { label: "Business Name", type: "text", id: "businessName" },
                { label: "Owner's Name", type: "text", id: "ownerName" },
                { label: "Business Address", type: "text", id: "businessAddress" },
                { label: "Contact Email", type: "email", id: "contactEmail" },
                { label: "Federal Employer Identification Number (EIN)", type: "text", id: "ein" }
            ],
            uploads: [
                { label: "ABC-211-SIG: Application Signature Sheet", id: "sigSheet", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-211-SIG.pdf" },
                { label: "ABC-217: Application Questionnaire", id: "appQuestionnaire", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-217.pdf" },
                { label: "ABC-208-B: Individual Financial Affidavit", id: "financialAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-208-B.pdf" },
                { label: "ABC-253: Supplemental Diagram", id: "propertyDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-253.pdf" },
                { label: "ABC-257: Licensed Premises Diagram", id: "premisesDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-257.pdf" },
                { label: "ABC-255: Zoning Affidavit", id: "zoningAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-255.pdf" },
                { label: "ABC-247: Residences Statement", id: "residencesStatement", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-247.pdf" },
                { label: "ABC-251: Consideration Points Statement", id: "considerationPoints", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-251.pdf" },
                { label: "ABC-140: Tied-House Restrictions Certificate", id: "tiedHouseCert", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-140.pdf" }
            ]
        },
        "type18": {
            title: "Type 18: Distilled Spirits Wholesaler",
            fields: [
                { label: "Business Name", type: "text", id: "businessName" },
                { label: "Owner's Name", type: "text", id: "ownerName" },
                { label: "Business Address", type: "text", id: "businessAddress" },
                { label: "Contact Email", type: "email", id: "contactEmail" },
                { label: "Federal Employer Identification Number (EIN)", type: "text", id: "ein" }
            ],
            uploads: [
                { label: "ABC-211-SIG: Application Signature Sheet", id: "sigSheet", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-211-SIG.pdf" },
                { label: "ABC-217: Application Questionnaire", id: "appQuestionnaire", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-217.pdf" },
                { label: "ABC-208-B: Individual Financial Affidavit", id: "financialAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-208-B.pdf" },
                { label: "ABC-253: Supplemental Diagram", id: "propertyDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-253.pdf" },
                { label: "ABC-257: Licensed Premises Diagram", id: "premisesDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-257.pdf" },
                { label: "ABC-255: Zoning Affidavit", id: "zoningAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-255.pdf" },
                { label: "ABC-140: Tied-House Restrictions Certificate", id: "tiedHouseCert", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-140.pdf" }
            ]
        },
        "type20": {
            title: "Type 20: Off-Sale Beer & Wine",
            fields: [
                { label: "Business Name", type: "text", id: "businessName" },
                { label: "Owner's Name", type: "text", id: "ownerName" },
                { label: "Business Address", type: "text", id: "businessAddress" },
                { label: "Contact Email", type: "email", id: "contactEmail" },
                { label: "Tax ID Number", type: "text", id: "taxId" }
            ],
            uploads: [
                { label: "ABC-211-SIG: Application Signature Sheet", id: "sigSheet", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-211-SIG.pdf" },
                { label: "ABC-217: Application Questionnaire", id: "appQuestionnaire", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-217.pdf" },
                { label: "ABC-253: Supplemental Diagram", id: "propertyDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-253.pdf" },
                { label: "ABC-255: Zoning Affidavit", id: "zoningAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-255.pdf" }
            ]
        },
        "type21": {
            title: "Type 21: Off-Sale General",
            fields: [
                { label: "Business Name", type: "text", id: "businessName" },
                { label: "Owner's Name", type: "text", id: "ownerName" },
                { label: "Business Address", type: "text", id: "businessAddress" },
                { label: "Contact Email", type: "email", id: "contactEmail" },
                { label: "Federal Employer Identification Number (EIN)", type: "text", id: "ein" }
            ],
            uploads: [
                { label: "ABC-211-SIG: Application Signature Sheet", id: "sigSheet", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-211-SIG.pdf" },
                { label: "ABC-217: Application Questionnaire", id: "appQuestionnaire", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-217.pdf" },
                { label: "ABC-253: Supplemental Diagram", id: "propertyDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-253.pdf" },
                { label: "ABC-255: Zoning Affidavit", id: "zoningAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-255.pdf" },
                { label: "ABC-247: Residences Statement", id: "residencesStatement", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-247.pdf" }
            ]
        },
        "type41": {
            title: "Type 41: On-Sale Beer & Wine – Eating Place",
            fields: [
                { label: "Business Name", type: "text", id: "businessName" },
                { label: "Owner's Name", type: "text", id: "ownerName" },
                { label: "Business Address", type: "text", id: "businessAddress" },
                { label: "Contact Email", type: "email", id: "contactEmail" },
                { label: "Health License Number", type: "text", id: "healthLicense" }
            ],
            uploads: [
                { label: "ABC-211-SIG: Application Signature Sheet", id: "sigSheet", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-211-SIG.pdf" },
                { label: "ABC-217: Application Questionnaire", id: "appQuestionnaire", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-217.pdf" },
                { label: "ABC-257: Licensed Premises Diagram", id: "premisesDiagram", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-257.pdf" },
                { label: "ABC-255: Zoning Affidavit", id: "zoningAffidavit", link: "https://www.abc.ca.gov/wp-content/uploads/forms/ABC-255.pdf" }
            ]
        }
    };

    function selectLicenseType() {
        const licenseType = document.getElementById("licenseType").value;
        const appForm = document.getElementById("application-form");
        const formFields = document.getElementById("form-fields");
        const fileUploads = document.getElementById("file-uploads");

        if (licenseTypes[licenseType]) {
            appForm.style.display = "block";
            formFields.innerHTML = "";
            fileUploads.innerHTML = "";

            const selectedLicense = licenseTypes[licenseType];

            // Add form fields dynamically based on selected license
            selectedLicense.fields.forEach(field => {
                formFields.innerHTML += `<label>${field.label}:</label><input type="${field.type}" id="${field.id}" required><br>`;
            });

            // Add file upload inputs with clickable links using the actual document names
            selectedLicense.uploads.forEach(upload => {
                fileUploads.innerHTML += `<label><a href="${upload.link}" target="_blank">${upload.label}</a>:</label><input type="file" id="${upload.id}" required><br>`;
            });
        } else {
            appForm.style.display = "none";
        }
    }

    document.getElementById('licenseType').addEventListener('change', selectLicenseType);
});
