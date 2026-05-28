export interface EmailData {
  toOverride?: string;
  fullName?: string;
  email: string;
  subject?: string;
  message?: string;
  company?: string;
  serviceType?: string;
  file?: File;
}

export const sendEmail = async (data: EmailData) => {
  const toEmail = data.toOverride || process.env.NEXT_PUBLIC_FORM_SUBMIT_EMAIL || "Sagadevan.S@devopstrioglobal.com";
  const endpoint = `https://formsubmit.co/ajax/${toEmail}`;

  let body: BodyInit;
  let headers: Record<string, string> = {
    Accept: "application/json",
  };

  if (data.file) {
    const formData = new FormData();
    formData.append("Full Name", data.fullName || "New Submission");
    formData.append("Email Address", data.email);
    formData.append("Inquiry Subject", data.subject || "FinTech Service Inquiry");
    formData.append("Message Content", data.message || "");
    formData.append("Company / Organization", data.company || "N/A");
    formData.append("Service Category", data.serviceType || "Financial Services");
    formData.append("attachment", data.file);
    
    // FormSubmit Configuration
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("_replyto", data.email);
    formData.append("_subject", `[Chalky InfoTech] ${data.subject || "New Inquiry"}`);
    
    body = formData;
  } else {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify({
      "Full Name": data.fullName,
      "Email Address": data.email,
      "Inquiry Subject": data.subject || "FinTech Service Inquiry",
      "Company / Organization": data.company || "N/A",
      "Service Category": data.serviceType || "Financial Services",
      "Message Content": data.message || "",
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      _subject: `[Chalky InfoTech] ${data.subject || "New Inquiry"}`,
    });
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body,
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    const errorMsg = result.message || `HTTP error! Status: ${response.status}`;
    throw new Error(errorMsg);
  }

  return result;
};
