const modificationChecklist = {
    ownerAdd: [
        { id: "laborPeaceCheck", label: "Labor Peace Agreement" },
        { id: "ownershipChangeCheck", label: "Change in Ownership" },
        { id: "financialDisclosureCheck", label: "Financial Disclosure" }
        // Add other relevant steps for "Add New Owner" here
    ],
    ownerRemove: [
        { id: "ownershipChangeCheck", label: "Change in Ownership" },
        { id: "resignationLetterCheck", label: "Owner's Resignation Letter" },
        { id: "notificationFormCheck", label: "License Modification Notification Form" }
        // Add other relevant steps for "Remove Existing Owner" here
    ]
};

// Notification details based on modification type
const notificationDetails = {
    ownerAdd: [
        { title: "Labor Peace Agreement (§ 15023(b))", detail: "If you employ 20 or more employees, notify the Department within 60 days with a notarized statement confirming a labor peace agreement." },
        { title: "Change in Ownership (§ 15023(c))", detail: "Submit a new license application and fee within 14 calendar days. Continue operations if one original owner remains." }
        // Add other relevant notifications for "Add New Owner" here
    ],
    ownerRemove: [
        { title: "Change in Ownership (§ 15023(c))", detail: "Submit a new license application and fee within 14 days if ownership changes." },
        { title: "Resignation Requirements", detail: "Submit a resignation letter from the exiting owner(s) and update the Department within 14 days." }
        // Add other relevant notifications for "Remove Existing Owner" here
    ]
};

// FAQ content
const faqContent = {
    ownerAdd: [
        { question: "What is the deadline for new ownership notification?", answer: "14 days from the effective date." }
        // Add more FAQs specific to "Add New Owner"
    ],
    ownerRemove: [
        { question: "Do I need to provide financial details for removed owners?", answer: "Yes, submit updated financial disclosure." }
        // Add more FAQs specific to "Remove Existing Owner"
    ]
};

// Function to update content based on selected modification type
function updateModificationType() {
    const modificationType = document.getElementById("modificationType").value;
    updateChecklist(modificationType);
    updateNotifications(modificationType);
    updateFaq(modificationType);
    updateProgress();  // Reset progress on type change
}

// Function to update checklist based on modification type
function updateChecklist(modificationType) {
    const checklistSection = document.getElementById("checklist");
    checklistSection.innerHTML = "";  // Clear existing items
    if (modificationChecklist[modificationType]) {
        modificationChecklist[modificationType].forEach(item => {
            checklistSection.innerHTML += `<li><input type="checkbox" id="${item.id}" onclick="updateProgress()">${item.label}</li>`;
        });
    }
}

// Function to update notifications based on modification type
function updateNotifications(modificationType) {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = "";  // Clear existing items
    if (notificationDetails[modificationType]) {
        notificationDetails[modificationType].forEach(item => {
            notificationList.innerHTML += `<li><span class="title" onclick="toggleDetail(this)">&#x25B6; ${item.title}</span><p class="detail">${item.detail}</p></li>`;
        });
    }
}

// Function to update FAQ based on modification type
function updateFaq(modificationType) {
    const faqSection = document.getElementById("faq-section");
    faqSection.innerHTML = `<h3>Frequently Asked Questions</h3>`;  // Clear existing FAQs
    if (faqContent[modificationType]) {
        faqContent[modificationType].forEach(faq => {
            faqSection.innerHTML += `<div class="faq" onclick="toggleFaq(this)">${faq.question}<span class="faq-answer">${faq.answer}</span></div>`;
        });
    }
}

// Update progress based on checklist completion
function updateProgress() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const progress = Math.round((checkedCount / checkboxes.length) * 100);
    const progressBar = document.getElementById("progress-bar");
    
    progressBar.style.width = progress + "%";
    progressBar.textContent = progress + "%";
}

// Other functions like finalReview, expandAll, collapseAll, etc., remain the same
